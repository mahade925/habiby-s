import Head from "next/head";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Head>
        <title>Habiby's</title>
        <link rel="shortcut icon" href="https://i.ibb.co/ZHL48R5/logo.png" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      <Navbar></Navbar>
    </>
  );
}

export default index;
