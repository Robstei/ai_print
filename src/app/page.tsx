"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import dynamic from "next/dynamic";
import { CanvasWrapper } from "@/components/canvasWrapper";
import { Prompt } from "@/components/prompt";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen">
        <div>
          <ModeToggle></ModeToggle>
        </div>
        <div className="flex flex-column grow">
          <CanvasWrapper />
        </div>
        <Prompt />
      </div>
    </main>
  );
}
