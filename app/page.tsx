"use client";
// It must be not a client component we have to move client components into separate file
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-orange-50 dark:bg-gray-950 justify-center">
      <Button onClick={updateTheme}>Theme Toggle</Button>
    </main>
  );
}
