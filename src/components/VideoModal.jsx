import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, CheckCircle2, Loader2, RefreshCw } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Auto-attempt playback safely
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            // Autoplay blocked: mute and retry
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            }
          });
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, video]);

  if (!video) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Playback error:', err));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current && videoRef.current.duration) {
      const seekTo = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTo;
      setProgress(e.target.value);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const handleRetry = (e) => {
    e.stopPropagation();
    setHasError(false);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsLoading(false);
        });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="video-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="video-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="video-modal-header">
            <div className="video-header-left">
              <span className="video-modal-badge">{video.category}</span>
              <h3 className="video-modal-title">{video.title}</h3>
            </div>
            <button
              type="button"
              className="video-modal-close"
              onClick={onClose}
              aria-label="Close Video Player"
            >
              <X size={20} />
            </button>
          </div>

          {/* Player Wrapper */}
          <div className="video-player-wrapper" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.poster}
              playsInline
              loop
              preload="auto"
              onPlay={() => {
                setIsPlaying(true);
                setIsLoading(false);
              }}
              onPause={() => setIsPlaying(false)}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => setIsLoading(false)}
              onLoadedData={() => setIsLoading(false)}
              onTimeUpdate={handleTimeUpdate}
              onError={() => {
                setHasError(true);
                setIsLoading(false);
              }}
              className="video-element"
            />

            {/* Loading Spinner */}
            {isLoading && !hasError && (
              <div className="video-loader-overlay">
                <Loader2 size={36} className="video-spinner" />
                <span>Loading Walkthrough...</span>
              </div>
            )}

            {/* Error Overlay */}
            {hasError && (
              <div className="video-loader-overlay">
                <p>Unable to stream video preview.</p>
                <button type="button" className="video-retry-btn" onClick={handleRetry}>
                  <RefreshCw size={14} />
                  <span>Retry Stream</span>
                </button>
              </div>
            )}

            {/* Big Play Overlay if Paused */}
            {!isPlaying && !isLoading && !hasError && (
              <div className="video-play-center-btn">
                <Play size={28} fill="currentColor" />
              </div>
            )}

            {/* Custom Video Controls Overlay */}
            <div className="video-custom-controls" onClick={(e) => e.stopPropagation()}>
              {/* Progress Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress || 0}
                onChange={handleSeek}
                className="video-seek-slider"
                aria-label="Video Progress Bar"
              />

              <div className="controls-button-row">
                <div className="controls-left">
                  <button
                    type="button"
                    className="control-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>

                  <button
                    type="button"
                    className="control-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <span className="video-duration-tag">{video.duration}</span>
                </div>

                <div className="controls-right">
                  <button
                    type="button"
                    className="control-btn"
                    onClick={handleFullscreen}
                    aria-label="Enter Fullscreen"
                  >
                    <Maximize size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Key Features */}
          <div className="video-modal-footer">
            <p className="video-modal-desc">{video.description}</p>
            {video.features && (
              <div className="video-features-row">
                {video.features.map((feat) => (
                  <span key={feat} className="video-feat-pill">
                    <CheckCircle2 size={12} className="feat-check" />
                    {feat}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
