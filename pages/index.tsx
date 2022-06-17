import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const Player = dynamic(() => import("../components/player"), {
    ssr: false, // <- ここで ssr を無効にするオプションを渡す
  });
  return (
    <>
      <main>
        <Player></Player>
      </main>
    </>
  );
};

export default Home;
