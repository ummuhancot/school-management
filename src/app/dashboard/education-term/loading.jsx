import { LoadingList } from "@/components/common/loaders/LoadingList";
import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import React from "react";

export default function Loading() {
  return (
    <>
      <PageHeader title="Terms" />
      <Spacer />
      <LoadingList colCount={5} />
      <Spacer />
    </>
  );
}
