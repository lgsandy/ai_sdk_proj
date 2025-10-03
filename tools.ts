import { google } from "@ai-sdk/google";
import { generateText, tool } from "ai";
import { z } from "zod";


const logToConsoleTool = tool({
    name: "logToConsole", 
    description: "Log a message to the console",
    inputSchema: z.object({
        message: z.string().describe("The message to log to the console"),
    }),
    execute: async ({ message }) => {
        console.log(message);
    },
});


const { text } = await generateText({
    model: google("models/gemini-2.0-flash-exp"),
    prompt: "Hellow???",
    system:
        `Your only role in life is to log ` +
        `messages to the console. ` +
        `Use the tool provided to log the ` +
        `prompt to the console.`,
    tools: {
        logToConsole: logToConsoleTool,
    },
});

console.log(text)

