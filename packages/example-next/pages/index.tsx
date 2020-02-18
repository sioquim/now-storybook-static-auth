import { Cowsay } from "@esglobalfe/constructicons";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <>
    <Head>
      <title>Example App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <main>
      <h1>This is an example app. Navigate to other pages to see the cow.</h1>
    </main>
  </>
);

export default Home;
