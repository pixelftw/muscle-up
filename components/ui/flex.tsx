import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Flex({ children, className }: FlexProps) {
  return <div className={cn("flex", className)}>{children}</div>;
}
