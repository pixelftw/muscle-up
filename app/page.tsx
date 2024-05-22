import { Spotlight } from "@/components/ui/spotLight";

export default function Home() {
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
