import axios from "axios";
import "dotenv/config";
import { z } from "zod";

const jira = axios.create({
  baseURL: process.env.JIRA_BASE_URL!,
  auth: {
    username: process.env.JIRA_EMAIL!,
    password: process.env.JIRA_API_TOKEN!,
  },
  headers: {
    Accept: "application/json",
  },
});

export const buscarTicketsJiraSchema = z.object({
  status: z.string(),
});

export type BuscarTicketsJiraInput =
  z.infer<typeof buscarTicketsJiraSchema>;

export async function buscarTicketsJira(input: BuscarTicketsJiraInput) {
  console.log("\n[TOOL] Buscando tickets reais no Jira...\n");

  const jql = `status = "${input.status}" ORDER BY created DESC`;

  const response = await jira.post(
    "/rest/api/3/search/jql",
    {
      jql,
      maxResults: 5,
      fields: [
        "summary",
        "status",
        "assignee",
      ],
    }
  );

  return response.data.issues.map((issue: any) => ({
    key: issue.key,
    titulo: issue.fields.summary,
    status: issue.fields.status.name,
    responsavel:
      issue.fields.assignee?.displayName ??
      "Não atribuído",
  }));
}