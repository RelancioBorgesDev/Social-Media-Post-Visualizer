import { HTMLProps } from "react";

interface SeparatorProps extends HTMLProps<HTMLHRElement> {}

export default function Separator({ ...rest }: SeparatorProps) {
  return <hr className="w-full border-t-2 border-gray-200 " {...rest} />;
}
