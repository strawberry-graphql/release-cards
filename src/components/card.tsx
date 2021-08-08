import React from "react";
import { Logo } from "./logo";
import { ReleaseContributor } from "./release-contributor";
import { ReleaseDescription } from "./release-description";
import { ReleaseTitle } from "./release-title";

type Props = {
  version: string;
  description: string;
  contributor: string;
};

export const Card = ({ version, description, contributor }: Props) => (
  <div className="card border-8 p-8 flex flex-col relative">
    <ReleaseTitle version={version} />

    <ReleaseDescription description={description} />
    <div className="mt-auto">
      <ReleaseContributor contributor={contributor} />
    </div>

    <div className="absolute bottom-8 right-8">
      <Logo />
    </div>
  </div>
);
