import { buscarTicketsJira, buscarTicketsJiraSchema } from "./ai/tools/jira.js";

export const tools = {
  buscarTicketsJira: {
    definition: {
      type: "function" as const,
      function: {
        name: "buscarTicketsJira",
        description: "Busca tickets no Jira por status",
        parameters: {
          type: "object",
          properties: {
            status: {
              type: "string",
              description: "Status dos tickets",
            },
          },
          required: ["status"],
        },
      },
    },

    schema: buscarTicketsJiraSchema,

    execute: buscarTicketsJira,
  },
};