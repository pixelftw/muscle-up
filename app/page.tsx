"use client";
// It must be not a client component we have to move client components into separate file
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotLight";
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
    <main>
      <div className="h-screen w-full  flex items-center justify-center bg-black/[0.96]  luigantialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="top-40 left-0 md:left-60 md:-top-20"
          fill="cyan"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 uppercase bg-opacity-50">
            Website <br /> is under development.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            You lovy dovy people. We will be there for you soon ❤️ Promise
          </p>
        </div>
      </div>
    </main>
  );
}
