import { generateText, type CoreMessage } from "ai";
import express, { type Request, type Response } from "express";
import { google } from "@ai-sdk/google"

const app = express();

app.use(express.json())
app.post('/api/ask', async (req: Request, res: Response) => {
    const messages: CoreMessage[] = req.body;
    console.log(messages)
    const result = await generateText({
        model: google("models/gemini-2.0-flash-exp"),
        messages
    })
    return res.json(result.response.messages);
});

app.listen(3000, () => console.log("app listening on port 3000"));
