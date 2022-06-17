import { useEffect } from "react";
import JsPlayer from "./JsPlayer";

const Player = (): JSX.Element => {
  const params = {
    target: "target",
    width: 600,
    height: 400,
    src: "https://cdn.theoplayer.com/video/elephants-dream/playlist-single-audio.m3u8",
    mode: "vod",
  };

  useEffect(() => {
    new JsPlayer(params);
  }, []);

  return <div id="target">...</div>;
};

export default Player;
