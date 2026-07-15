import { useEffect, useRef } from "react";
import Hls from "hls.js";

const SRC = "https://stream.mux.com/E3rAKyTB54G02a702jKVDAsRnWoRXwUss6mjjctaODp8w.m3u8";

/**
 * Fixed full-viewport HLS video background. Poster shows instantly while HLS
 * initialises so there is no blank/delay on first paint.
 */
const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = SRC;
      video.addEventListener("loadedmetadata", tryPlay, { once: true });
    } else if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);
      return () => hls.destroy();
    }
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #e8b4f8 0%, #c084fc 25%, #a78bfa 50%, #93c5fd 75%, #f9a8d4 100%)" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(1.05) contrast(1.0) saturate(1.1)" }}
      />
      {/* Subtle overlay for text readability without killing video colors */}
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.15)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />
    </div>
  );
};

export default VideoBackground;
