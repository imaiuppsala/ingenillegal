"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title=" فارسی"
      subtitle="هیچ انسانی‌ غیر قانونی‌ نیست، به امید جهانی‌ بدون مرز!"
      dir="rtl"
    >
      <Content />
    </GlobalWrapper>
  );
}
