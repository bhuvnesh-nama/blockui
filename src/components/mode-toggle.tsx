"use client"
import {Button} from "./ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="absolute right-3 top-3">
        <Button variant="secondary" onClick={() => setTheme("light")}>Light Mode</Button>
        <Button variant="secondary" onClick={() => setTheme("dark")}>Dark Mode</Button>
        <Button variant="secondary" onClick={() => setTheme("system")}>System Mode</Button>
    </div>
  )
}