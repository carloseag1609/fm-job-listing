import Head from "next/head";
import { JobsList } from "../components/jobs";
import { TopBackground } from "../components/TopBackground";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Job Listing</title>
      </Head>
      <TopBackground />
      <JobsList />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/carloseag1609"
          target="_blank"
          rel="noreferrer"
        >
          Carlos Aguirre
        </a>
        .
      </div>
    </>
  );
};

export default HomePage;
