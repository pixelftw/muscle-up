import { HeroGradient } from "./hero-gradient";
import { HeroContent } from "./hero-content";
import Image from "next/image";
import Flex from "@/components/ui/flex";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <HeroGradient />
      <Flex className="relative z-10 containe">
        <Flex className="container py-10 lg:py-16 flex-col lg:flex-row gap-8 lg:16 items-centers justify-center">
          <HeroContent />
          <Image
            width={600}
            height={338}
            loading="eager"
            objectFit="cover"
            src="/images/fitness-dashboard.png"
            alt="fitness-darshboard"
          />
        </Flex>
      </Flex>
    </section>
  );
}
