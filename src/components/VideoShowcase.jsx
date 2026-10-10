import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { videoShowcaseData } from '../data/interiorData';

function VideoPanel({ video, onSelect, isLarge = false }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Subtle muted preview on hover or viewport intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      className={`video-showcase-panel ${isLarge ? 'panel-large' : 'panel-medium'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(video)}
      tabIndex={0}
      role="button"
      aria-label={`Play ${video.title} interior walkthrough video`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(video);
        }
      }}
    >
      <div className="video-panel-media">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.poster}
          muted
          playsInline
          loop
          preload="metadata"
          className="panel-video-tag"
        />

        <div className="panel-shade-overlay" />

        {/* Duration & Tag */}
        <div className="panel-top-bar">
          <span className="panel-category-pill">{video.category}</span>
          <span className="panel-duration-pill">{video.duration}</span>
        </div>

        {/* Central Play Indicator */}
        <div className={`panel-play-btn ${isHovered ? 'play-btn-hover' : ''}`}>
          <Play size={20} className="play-icon" fill="currentColor" />
        </div>

        {/* Bottom Title Bar */}
        <div className="panel-bottom-info">
          <h3 className="panel-title">{video.title}</h3>
          <p className="panel-sub">{video.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase({ onSelectVideo }) {
  return (
    <section className="video-showcase-section" id="walkthroughs">
      <div className="section-container">
        {/* Section Header */}
        <div className="video-section-header">
          <div className="header-left-wrap">
            <span className="section-eyebrow">CINEMATIC WALKTHROUGHS</span>
            <h2 className="section-title">
              Step Inside <em>Beautiful Spaces</em>
            </h2>
          </div>
          <p className="section-lead">
            Experience the flow of natural light, tactile materiality, and spatial proportions through
            our curated interior walkthroughs.
          </p>
        </div>

        {/* Asymmetrical Video Panel Grid */}
        <div className="video-showcase-grid">
          {/* Main Hero Video Panel (Living Room Walkthrough) */}
          <div className="grid-col-large">
            <VideoPanel
              video={videoShowcaseData[0]}
              onSelect={onSelectVideo}
              isLarge={true}
            />
          </div>

          {/* Secondary Video Panels (Bedroom & Modular Kitchen) */}
          <div className="grid-col-stacked">
            <VideoPanel
              video={videoShowcaseData[1]}
              onSelect={onSelectVideo}
              isLarge={false}
            />
            <VideoPanel
              video={videoShowcaseData[2]}
              onSelect={onSelectVideo}
              isLarge={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
