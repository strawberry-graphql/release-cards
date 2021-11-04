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

    <div className="flex">
      <div className="flex flex-col mr-10">
        <ReleaseDescription description={description} />
        <div className="mt-12">
          <ReleaseContributor contributor={contributor} />
        </div>
      </div>

      <div className="w-40">
        <Logo />
      </div>
    </div>
  </div>
);
