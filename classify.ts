import { generateObject } from "ai"
import { google } from "@ai-sdk/google"
const { object } = await generateObject({
model: google("models/gemini-2.0-flash-exp"),
output:"enum",
enum:["positive","negative","neutral"],
prompt: "i feel very good",
system:`Classify the sentiment of the text either`+
        `positive,negative or neutral.`
});

console.log(object)