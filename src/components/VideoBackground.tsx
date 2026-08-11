import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const SRC = "https://stream.mux.com/E3rAKyTB54G02a702jKVDAsRnWoRXwUss6mjjctaODp8w.m3u8";

/**
 * Fixed full-viewport HLS video background. Poster shows instantly while HLS
 * initialises so there is no blank/delay on first paint.
 */
const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const showVideo = () => {
      setIsReady(true);
      tryPlay();
    };

    const resumeVideo = () => {
      if (!document.hidden) tryPlay();
    };

    video.addEventListener("loadeddata", showVideo);
    video.addEventListener("canplay", showVideo);
    document.addEventListener("visibilitychange", resumeVideo);
    window.addEventListener("pageshow", resumeVideo);
    window.addEventListener("pointerdown", tryPlay, { once: true });

    let hls: Hls | undefined;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = SRC;
      video.load();
      tryPlay();
    } else if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        startLevel: -1,
        maxBufferLength: 20,
      });
      hls.loadSource(SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (!data.fatal || !hls) return;
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
          hls.startLoad();
        } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
          hls.recoverMediaError();
        }
      });
    }

    return () => {
      video.removeEventListener("loadeddata", showVideo);
      video.removeEventListener("canplay", showVideo);
      document.removeEventListener("visibilitychange", resumeVideo);
      window.removeEventListener("pageshow", resumeVideo);
      window.removeEventListener("pointerdown", tryPlay);
      hls?.destroy();
    };
  }, []);

  return (
    <div
      aria-hidden
      className="video-background fixed inset-0 -z-10 overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className={`video-background__media absolute inset-0 h-full w-full object-cover ${
          isReady ? "is-ready" : ""
        }`}
      />
      <div className="video-background__wash absolute inset-0" />
    </div>
  );
};

export default VideoBackground;
