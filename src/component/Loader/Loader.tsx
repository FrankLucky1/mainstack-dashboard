import { Loader2 } from "lucide-react";
import React from "react";
type Props = {
  className?: string;
};
const Loader = ({ className }: Props) => {
  return <Loader2 className={`${className} animate-spin`} color="orange" />;
};

export default Loader;

