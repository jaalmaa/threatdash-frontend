import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div className="mx-auto flex flex-col text-center">
      <h1 className="mx-auto p-4 text-4xl text-neutral-100">
        About Threatdash
      </h1>
      <hr />
      <p className="p-2 text-left text-neutral-100">
        In its current iteration, Threatdash aims to determine the depth at
        which the Cowrie honeypot can be used to provide threat intelligence.
      </p>
      <p className="p-2 text-neutral-100">This is a second paragraph.</p>
    </div>
  );
};

export default AboutPage;
