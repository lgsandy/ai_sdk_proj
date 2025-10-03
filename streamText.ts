import { streamText } from "ai"
import { google } from "@ai-sdk/google"
const { textStream,text } = await streamText({
    model: google("models/gemini-2.0-flash-exp"),
    prompt: "What is color of the sun?"
});
//final test also we can get
// const res = await text;
// console.log(res);
//Stream text
for await (const text of textStream) {
    console.log(text)
}