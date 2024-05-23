import {
  AnimateText,
  MoveIn,
  StaggerChildren,
} from "@/components/motion-components";
import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <StaggerChildren
      initial="initial"
      animate="animate"
      className="flex max-w-2xl flex-col text-center mx-auto justify-center"
    >
      <MoveIn>
        <p className="">Elevate your projects</p>
      </MoveIn>
      <Box className="mt-5 max-w-2xl">
        <AnimateText
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl"
          text="Get in shape faster, Safer and Accuratly"
        />
      </Box>
      <MoveIn>
        <Box className="mt-5 max-w-3xl">
          <p className="text-xl text-muted-foreground">
            Over 10+ fully responsive, UI blocks you can drop into your Shadcn
            UI projects and customize to your heart&apos;s content.
          </p>
        </Box>
      </MoveIn>
      <MoveIn>
        <Box className="mt-8 gap-3 flex justify-center">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            Learn more
          </Button>
        </Box>
      </MoveIn>
    </StaggerChildren>
  );
}
