import { google } from "@ai-sdk/google";
import { stepCountIs, streamText, tool } from "ai";
import { z } from "zod";


const getWeatherTool = tool({
    name: "getWeather",
    description:
        "Get the current weather in the specified city",
    inputSchema: z.object({
        city: z
            .string()
            .describe("The city to get the weather for"),
    }),
    execute: async ({ city }) => {
        console.log("dd", city);
        return `The weather in ${city} is 25°C and sunny.`;
    },
});


const { textStream, steps } = await streamText({
    model: google("models/gemini-2.0-flash-exp"),
    prompt: "What is the weather in hyderabad",
    tools: {
        getWeather: getWeatherTool,
    },
   stopWhen: stepCountIs(2)
});

// console.dir(await steps,{depth:null});

for await (const tex of textStream) {
    console.log(tex)
}

