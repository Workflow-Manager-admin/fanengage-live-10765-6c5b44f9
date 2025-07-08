import React from "react";

/**
 * PUBLIC_INTERFACE
 * Displays embedded YouTube stream/video for the football match.
 * @param {string} videoId - YouTube video ID to embed.
 */
function YouTubeStream({ videoId }) {
  if (!videoId) return null;
  return (
    <div className="youtube-stream">
      <iframe
        width="100%"
        height="390"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Football Match Live Stream"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default YouTubeStream;
