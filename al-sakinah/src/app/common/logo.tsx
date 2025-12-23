"use client";
import React from "react";
import Image from "next/image";

const Logo: React.FC<{}> = ({}) => (
    <div className="hover:cursor-pointer">
      <Image
        src="/logo.png"
        width="50"
        height="50"
        alt="AlSakinah Logo"
        priority={true}
        onClick={() => window.open('/', "_self")}
      />
    </div>
);

export default Logo;