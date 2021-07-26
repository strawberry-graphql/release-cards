import React from "react";

export const ReleaseContributor = ({
  contributor,
}: {
  contributor: string;
}) => (
  <p>
    Contributed by <strong>{contributor}</strong>
  </p>
);
