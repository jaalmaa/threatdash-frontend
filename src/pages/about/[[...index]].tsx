import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div className="mx-72 flex flex-col text-center">
      <h1 className="mx-auto p-4 text-4xl text-neutral-100">
        About Threatdash
      </h1>
      <hr />
      <p className="mt-4 p-2 text-left">
        Threatdash project is a platform that collects attack data from
        honeypots and displays them to the user as a feed. The platform is
        designed to gather data from the Cowrie honeypot, and analyze it to
        identify emerging threats and trends. This data is collected in
        real-time and can be visualized using intuitive charts and graphs,
        making it easy to analyze and understand.
      </p>
      <p className="p-2 text-left">
        Honeypots are designed to mimic vulnerable systems and services,
        attracting attackers and gathering valuable information about their
        tactics, techniques, and procedures (TTPs).
      </p>
      <p className="p-2 text-left">
        While Threatdash is currently in an alpha stage, and undergoing active
        development, the following features are planned:
      </p>
      <ul className="list-disc px-6 text-left">
        <li>Collect and store attack data from honeypots and other sources.</li>
        <li>
          Analyze attack data in real-time to identify emerging threats and
          trends.
        </li>
        <li>Export data for further analysis and reporting.</li>
        <li>Configure alerts to be notified of specific types of attacks.</li>
      </ul>
      <p className="p-2 text-left">
        Whether you're a hobbyist interested in cybersecurity or a security
        professional looking to stay ahead of the latest threats, Threatdash has
        something to offer, and offers a range of features that make it easy to
        use and understand.
      </p>
    </div>
  );
};

export default AboutPage;
