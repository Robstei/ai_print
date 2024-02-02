import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as fs from "node:fs/promises";
import path from "node:path";

export async function POST(request: NextRequest) {
  const data = schema.parse(await request.json());
  const body = JSON.stringify({ text_prompts: [{ text: data.prompt }] });
  console.log(body);
  const response = await (
    await fetch(
      "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: body,
      }
    )
  ).json();
  const imageAsBase64 = response.artifacts[0].base64;
  const buffer = Buffer.from(imageAsBase64, "base64");
  const file = await fs.open(
    path.join(process.cwd(), "public", "image.png"),
    "w"
  );
  file.write(buffer);
  return NextResponse.json(response.artifacts[0].base64);
}

const schema = z.object({ prompt: z.string() });
