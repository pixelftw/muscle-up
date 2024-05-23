import Box from "@/components/ui/box";

export function HeroGradient() {
  return (
    <Box
      aria-hidden="true"
      className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
    >
      <Box className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
      <Box className="bg-gradient-to-tl blur-3xl w-[120rem] h-[60rem] rounded-full origin-top-left -rotate-12 -translate-x-[5rem] from-primary-foreground via-primary-foreground to-blue-500" />
    </Box>
  );
}
