import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Box({ children, className }: FlexProps) {
  return <div className={className}>{children}</div>;
}
