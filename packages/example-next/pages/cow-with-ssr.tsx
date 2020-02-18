import Head from "next/head";
import Nav from "../components/nav";
import dynamic from "next/dynamic";

const Cow = () => {
  const TimeCow = dynamic({
    loader: () => import("../components/time-cow"),
    loading: () => <p>Loading ...</p>
  });

  return (
    <>
      <Head>
        <title>Example App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h1>
          <TimeCow />
        </h1>
      </main>
    </>
  );
};

export default Cow;
