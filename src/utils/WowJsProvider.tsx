"use client"
import React, { useEffect } from "react";
import { initWow } from "./wow-init";

export default function WowJsProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initWow();
  }, []);

  return <div>{children}</div>;
}
