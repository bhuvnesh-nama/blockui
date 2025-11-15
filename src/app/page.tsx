import {Button} from "@/components/ui/button";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";
import {Textarea} from "@/components/ui/textarea";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div className="flex justify-center items-center h-screen w-full">
        <Textarea></Textarea>
      </div>
    </ThemeProvider>
  );
}
