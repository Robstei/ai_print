import { Button } from "./ui/button";

export function Prompt() {
  return (
    <div className="flex flex-col">
      <textarea className="h-80" placeholder="your text"></textarea>
      <Button>get Image</Button>
    </div>
  );
}
