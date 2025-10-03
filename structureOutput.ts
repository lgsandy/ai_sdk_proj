import { generateObject } from "ai"
import { google } from "@ai-sdk/google"
import { z } from "zod";

const schema = z.object({
    recipe: z.object({
        name: z
            .string()
            .describe("The title of the recipe"),
        ingredients: z
            .array(
                z.object({
                    name: z.string(),
                    amount: z.string(),
                }),
            )
            .describe(
                "The ingredients needed for the recipe",
            ),
        steps: z
            .array(z.string())
            .describe("The steps to make the recipe"),
    }),
});
const { object } = await generateObject({
    model: google("models/gemini-2.0-flash-exp"),
    schema,
    schemaName: "Recipe",
    prompt: "How to make Mutton biryani?",
    system:
        `You are helping a user create recipe.` +
        `Use British English variants of ingredient names` +
        `Like Coriander over Cilantro.`
});

console.log(object.recipe)