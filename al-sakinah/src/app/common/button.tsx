"use client";
import React from "react";

const Button: React.FC<{
  text: string;
  link: string;
}> = ({ text, link }) => (
  <button
    className="rounded-full border text-center py-1.5 px-4 text-white bg-[#3A3042] w-full shadow-md hover:bg-white hover:text-black"
    style={{
      border: "2px solid #3A3042",
    }}
    onClick={() => window.open(link, "_blank")}
  >
    {text}
  </button>
);

export default Button;
