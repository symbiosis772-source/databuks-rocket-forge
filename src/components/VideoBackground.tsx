import { useEffect, useRef, useState } from "react";
import backgroundVideo from "@/assets/video/databuks-background.webm";

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

    video.load();
    tryPlay();

    return () => {
      video.removeEventListener("loadeddata", showVideo);
      video.removeEventListener("canplay", showVideo);
      document.removeEventListener("visibilitychange", resumeVideo);
      window.removeEventListener("pageshow", resumeVideo);
      window.removeEventListener("pointerdown", tryPlay);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="video-background fixed inset-0 -z-10 overflow-hidden"
    >
      <video
        ref={videoRef}
        src={backgroundVideo}
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
