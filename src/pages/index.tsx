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
    </>
  );
};

export default HomePage;
