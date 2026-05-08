import OpenAI from "openai";
import "dotenv/config";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
  input,
  output,
});

async function main() {
  const question = await rl.question("Pergunte algo: ");

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "Você é um assistente técnico útil.",
      },
      {
        role: "user",
        content: question,
      },
    ],
  });

  console.log("\nIA:\n");

  if(!response?.choices[0]) {
    console.log("Não foi possível obter uma resposta da IA.");
    rl.close();
    return;
  }

  console.log(response.choices[0].message.content);

  rl.close();
}

main();