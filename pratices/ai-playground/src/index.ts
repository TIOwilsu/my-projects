import OpenAI from "openai";
import "dotenv/config";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { tools } from "./toolRegistry";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
  input,
  output,
});

const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: `
      Você é um assistente técnico da empresa.
      Você pode consultar tickets do Jira.
  `,
  },
];

async function main() {
  while (true) {
    const question = await rl.question("\nVocê: ");

    if (question.toLowerCase() === "sair") {
      break;
    }

    messages.push({
      role: "user",
      content: question,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages,
      tools: Object.values(tools).map((tool) => tool.definition),
    });

    if(!response?.choices[0]) {
      console.log("Não foi possível obter uma resposta da IA.");
      rl.close();
      return;
    }

    const message = response.choices[0].message;

    // VERIFICA SE A IA QUER CHAMAR TOOL
    if (message.tool_calls) {
      messages.push({
        role: "assistant",
        content: message.content || "",
        tool_calls: message.tool_calls,
      });
      
      for (const toolCall of message.tool_calls) {
        if (toolCall?.type !== "function") {
          continue;
        }

        const toolName = toolCall.function.name;

        const tool = tools[
          toolName as keyof typeof tools
        ];

        if (!tool) {
          messages.push({
            role: "tool",
            tool_call_id: toolCall.id,
            content: JSON.stringify({
              error: "Tool não encontrada",
            }),
          });

          continue;
        }

        const rawArgs = JSON.parse(toolCall.function.arguments);

        const args = tool.schema.parse(rawArgs);

        try {
          const result = await tool.execute(args);

          messages.push({
            role: "tool",
            tool_call_id: toolCall.id,
            content: JSON.stringify(result),
          });
        } catch (error) {
          console.error(error);

          messages.push({
            role: "tool",
            tool_call_id: toolCall.id,
            content: JSON.stringify({
              error: "Erro ao executar tool",
            }),
          });
        }

        // SEGUNDA CHAMADA PARA IA RESPONDER
        const secondResponse = await openai.chat.completions.create({
          model: "gpt-4.1-mini",
          messages,
        });

        if(!secondResponse?.choices[0]) {
          console.log("Não foi possível obter uma resposta da IA.");
          rl.close();
          return;
        }

        const finalAnswer =
          secondResponse.choices[0].message.content;

        console.log("\nIA:\n");

        console.log(finalAnswer);

      }
    } else {
      console.log("\nIA:\n");

      console.log(message.content);

      messages.push({
        role: "assistant",
        content: message.content || "",
      });
    }
  }

  rl.close();
}

main();