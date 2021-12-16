import React from "react";
import { Wrapper } from "./styles";
import dia from "/images/jpg/nuvens.jpg";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
