import  { generateText,type LanguageModel } from "ai";
import { google } from "@ai-sdk/google"

export const ask = async (prompt:string,model:LanguageModel)=>{
    const {text} = await generateText({
        model,
        prompt
    });
    return text;
};

const res = await ask("What is color of the sun?",google("models/gemini-2.0-flash-exp"));
console.log(res);