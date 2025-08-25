"use client";

import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";

export const Logo = ({ theme = "dark" }) => {
  return (
    <Navbar.Brand href="/" as={Link}>
      <Image
        src={`/img/logos/logo-${theme}.png`}
        width={208}
        height={48}
        alt={config.project.name}
        priority
      />
    </Navbar.Brand>
  );
};
