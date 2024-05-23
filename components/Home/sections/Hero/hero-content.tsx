import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import Flex from "@/components/ui/flex";

export function HeroContent() {
  return (
    <Flex className="max-w-2xl flex-col text-center mx-auto justify-center">
      <p className="">Elevate your projects</p>
      <Box className="mt-5 max-w-2xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Get in shape faster, Safer and Accuratly
        </h1>
      </Box>
      <Box className="mt-5 max-w-3xl">
        <p className="text-xl text-muted-foreground">
          Over 10+ fully responsive, UI blocks you can drop into your Shadcn UI
          projects and customize to your heart&apos;s content.
        </p>
      </Box>
      <Box className="mt-8 gap-3 flex justify-center">
        <Button size="lg">Get started</Button>
        <Button size="lg" variant="outline">
          Learn more
        </Button>
      </Box>
    </Flex>
  );
}
