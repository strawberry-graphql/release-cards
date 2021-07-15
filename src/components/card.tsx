import { Logo } from "./logo";
import { ReleaseContributor } from "./release-contributor";
import { ReleaseDescription } from "./release-description";
import { ReleaseTitle } from "./release-title";

export const Card = () => (
  <div className="card border-8 p-16 flex flex-col">
    <ReleaseTitle />

    <div className="flex text-5xl leading-relaxed flex-1">
      <div className="w-10/12 flex justify-between flex-col">
        <ReleaseDescription />
        <ReleaseContributor />
      </div>

      <div className="w-2/12 self-end flex justify-end">
        <Logo />
      </div>
    </div>
  </div>
);
