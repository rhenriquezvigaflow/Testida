import React from "react";
import { Skeleton } from "../../../../commons/components/skeleton/Skeleton";

export function SkeletonPlantaSelector() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px"
      }}>
      <Skeleton style={{ height: "36px", maxWidth: "60%" }} />
      <Skeleton style={{ height: "240px", maxWidth: "80%" }} />
    </section>
  );
}
