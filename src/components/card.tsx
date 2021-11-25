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
  <div className="card p-8 flex flex-col">
    <ReleaseTitle version={version} />

    <div className="flex-1 flex">
      <div className="flex-1 flex flex-col">
        <ReleaseDescription description={description} />
        <div className="mt-auto">
          <ReleaseContributor contributor={contributor} />
        </div>
      </div>
      <div className="ml-auto w-44 flex items-end justify-end">
        <Logo />
      </div>
    </div>
  </div>
);
