import React from "react";

export const ReleaseContributor = ({
  contributor,
}: {
  contributor: string;
}) => (
  <p className="text-3xl">
    Contributed by <strong>{contributor}</strong>
  </p>
);
