import React, { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const updateBuffered = () => {
      if (video.buffered.length > 0) {
        setBuffered(video.buffered.end(video.buffered.length - 1));
      }
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('progress', updateBuffered);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('progress', updateBuffered);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const time = parseFloat(e.target.value);
    video.currentTime = time;
    setCurrentTime(time);
  };

  const updateProgress = (e: React.MouseEvent<HTMLDivElement> | MouseEvent, container?: HTMLElement) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const targetContainer = container || (e.currentTarget as HTMLElement);
    const rect = targetContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const time = Math.max(0, Math.min((clickX / width) * duration, duration));
    
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      updateProgress(e);
    }
  };

  const updateProgressFromTouch = (e: TouchEvent, container: HTMLElement) => {
    const video = videoRef.current;
    if (!video || !duration || !e.touches[0]) return;

    const rect = container.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const width = rect.width;
    const time = Math.max(0, Math.min((touchX / width) * duration, duration));
    
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setIsDragging(true);
    updateProgress(e, container);
    
    const handleMouseMove = (e: MouseEvent) => {
      updateProgress(e, container);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const container = e.currentTarget;
    setIsDragging(true);
    updateProgressFromTouch(e.nativeEvent, container);
    
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      updateProgressFromTouch(e, container);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      setIsDragging(false);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setVolume(video.volume);
    } else {
      video.muted = true;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="video-player-container"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="video-player-element"
        poster={poster}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      {/* Controles customizados */}
      <div className={`video-controls ${showControls ? 'show' : ''}`}>
        {/* Controles principais */}
        <div className="video-controls-main">
          <div className="video-controls-left">
            <button 
              className="video-play-button"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.19995 2.5C2.19995 2.22386 2.42381 2 2.69995 2H5.19995C5.47609 2 5.69995 2.22386 5.69995 2.5V13.5C5.69995 13.7761 5.47609 14 5.19995 14H2.69995C2.42381 14 2.19995 13.7761 2.19995 13.5V2.5Z" fill="white"/>
                  <path d="M10.2 2.5C10.2 2.22386 10.4238 2 10.7 2H13.2C13.4761 2 13.7 2.22386 13.7 2.5V13.5C13.7 13.7761 13.4761 14 13.2 14H10.7C10.4238 14 10.2 13.7761 10.2 13.5V2.5Z" fill="white"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2L16 10L4 18V2Z" fill="white"/>
                </svg>
              )}
            </button>

            <div className="video-volume-container">
              <button 
                className="video-volume-button"
                onClick={toggleMute}
              >
                {isMuted || volume === 0 ? (
                  <svg width="16" height="16" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.24388 1.56074C8.43549 1.4229 8.70256 1.46649 8.8404 1.6581C9.4967 2.57043 9.88334 3.69037 9.88334 4.89934C9.88334 6.10832 9.4967 7.22826 8.8404 8.14059C8.70256 8.33219 8.43549 8.37579 8.24388 8.23795C8.05227 8.10011 8.00868 7.83304 8.14652 7.64143C8.7017 6.86968 9.02858 5.92332 9.02858 4.89934C9.02858 3.87537 8.7017 2.92901 8.14652 2.15725C8.00868 1.96565 8.05227 1.69858 8.24388 1.56074Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.53832 2.83929C6.73191 2.70425 6.99832 2.75172 7.13336 2.94532C7.51977 3.49929 7.74644 4.17349 7.74644 4.89934C7.74644 5.6252 7.51977 6.2994 7.13336 6.85337C6.99832 7.04696 6.73191 7.09443 6.53832 6.9594C6.34473 6.82436 6.29726 6.55796 6.43229 6.36436C6.72189 5.94918 6.89167 5.44473 6.89167 4.89934C6.89167 4.35396 6.72189 3.84951 6.43229 3.43432C6.29726 3.24073 6.34473 2.97432 6.53832 2.83929Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.49078 0.929714C4.69536 0.913613 4.89528 0.996424 5.02855 1.15247C5.14789 1.2922 5.16685 1.46027 5.17408 1.54185C5.18219 1.6333 5.18217 1.74688 5.18215 1.86243C5.18215 1.86773 5.18215 1.87304 5.18215 1.87835L5.18215 7.93626C5.18217 8.05181 5.18219 8.16539 5.17408 8.25684C5.16685 8.33842 5.14789 8.50649 5.02855 8.64622C4.89528 8.80226 4.69536 8.88507 4.49078 8.86897C4.30759 8.85456 4.17534 8.74912 4.11254 8.69654C4.04215 8.63761 3.96184 8.55728 3.88014 8.47556L2.51594 7.11135C2.47635 7.07177 2.45652 7.05208 2.44152 7.03838L2.44038 7.03735L2.43885 7.03728C2.41855 7.03635 2.39061 7.03625 2.33462 7.03625L1.57852 7.03625C1.47066 7.03626 1.36561 7.03627 1.27664 7.02901C1.17895 7.02102 1.06367 7.00219 0.947667 6.94308C0.786834 6.86114 0.656072 6.73037 0.574123 6.56954C0.515017 6.45354 0.496183 6.33826 0.488201 6.24056C0.480933 6.1516 0.480945 6.04655 0.480958 5.93869L0.480959 3.87363C0.480959 3.86908 0.480959 3.86454 0.480958 3.86C0.480945 3.75213 0.480933 3.64709 0.488201 3.55812C0.496183 3.46043 0.515017 3.34515 0.574123 3.22915C0.656072 3.06831 0.786834 2.93755 0.947667 2.8556C1.06367 2.7965 1.17895 2.77766 1.27664 2.76968C1.36561 2.76241 1.47065 2.76242 1.57852 2.76244C1.58306 2.76244 1.5876 2.76244 1.59215 2.76244H2.33462C2.39061 2.76244 2.41855 2.76234 2.43885 2.76141L2.44038 2.76134L2.44152 2.7603C2.45652 2.74661 2.47635 2.72692 2.51594 2.68733L3.8689 1.33438C3.87265 1.33063 3.8764 1.32687 3.88015 1.32312C3.96185 1.2414 4.04215 1.16108 4.11254 1.10215C4.17534 1.04957 4.30759 0.944132 4.49078 0.929714Z" fill="white"/>
                    <path d="M1 1L9 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.24388 1.56074C8.43549 1.4229 8.70256 1.46649 8.8404 1.6581C9.4967 2.57043 9.88334 3.69037 9.88334 4.89934C9.88334 6.10832 9.4967 7.22826 8.8404 8.14059C8.70256 8.33219 8.43549 8.37579 8.24388 8.23795C8.05227 8.10011 8.00868 7.83304 8.14652 7.64143C8.7017 6.86968 9.02858 5.92332 9.02858 4.89934C9.02858 3.87537 8.7017 2.92901 8.14652 2.15725C8.00868 1.96565 8.05227 1.69858 8.24388 1.56074Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.53832 2.83929C6.73191 2.70425 6.99832 2.75172 7.13336 2.94532C7.51977 3.49929 7.74644 4.17349 7.74644 4.89934C7.74644 5.6252 7.51977 6.2994 7.13336 6.85337C6.99832 7.04696 6.73191 7.09443 6.53832 6.9594C6.34473 6.82436 6.29726 6.55796 6.43229 6.36436C6.72189 5.94918 6.89167 5.44473 6.89167 4.89934C6.89167 4.35396 6.72189 3.84951 6.43229 3.43432C6.29726 3.24073 6.34473 2.97432 6.53832 2.83929Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.49078 0.929714C4.69536 0.913613 4.89528 0.996424 5.02855 1.15247C5.14789 1.2922 5.16685 1.46027 5.17408 1.54185C5.18219 1.6333 5.18217 1.74688 5.18215 1.86243C5.18215 1.86773 5.18215 1.87304 5.18215 1.87835L5.18215 7.93626C5.18217 8.05181 5.18219 8.16539 5.17408 8.25684C5.16685 8.33842 5.14789 8.50649 5.02855 8.64622C4.89528 8.80226 4.69536 8.88507 4.49078 8.86897C4.30759 8.85456 4.17534 8.74912 4.11254 8.69654C4.04215 8.63761 3.96184 8.55728 3.88014 8.47556L2.51594 7.11135C2.47635 7.07177 2.45652 7.05208 2.44152 7.03838L2.44038 7.03735L2.43885 7.03728C2.41855 7.03635 2.39061 7.03625 2.33462 7.03625L1.57852 7.03625C1.47066 7.03626 1.36561 7.03627 1.27664 7.02901C1.17895 7.02102 1.06367 7.00219 0.947667 6.94308C0.786834 6.86114 0.656072 6.73037 0.574123 6.56954C0.515017 6.45354 0.496183 6.33826 0.488201 6.24056C0.480933 6.1516 0.480945 6.04655 0.480958 5.93869L0.480959 3.87363C0.480959 3.86908 0.480959 3.86454 0.480958 3.86C0.480945 3.75213 0.480933 3.64709 0.488201 3.55812C0.496183 3.46043 0.515017 3.34515 0.574123 3.22915C0.656072 3.06831 0.786834 2.93755 0.947667 2.8556C1.06367 2.7965 1.17895 2.77766 1.27664 2.76968C1.36561 2.76241 1.47065 2.76242 1.57852 2.76244C1.58306 2.76244 1.5876 2.76244 1.59215 2.76244H2.33462C2.39061 2.76244 2.41855 2.76234 2.43885 2.76141L2.44038 2.76134L2.44152 2.7603C2.45652 2.74661 2.47635 2.72692 2.51594 2.68733L3.8689 1.33438C3.87265 1.33063 3.8764 1.32687 3.88015 1.32312C3.96185 1.2414 4.04215 1.16108 4.11254 1.10215C4.17534 1.04957 4.30759 0.944132 4.49078 0.929714Z" fill="white"/>
                  </svg>
                )}
              </button>
              
            </div>



            <div className="video-time-current">
              {formatTime(currentTime)}
            </div>

            <div 
              className="video-progress-container"
              onClick={handleProgressClick}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className="video-progress-track">
                <div 
                  className="video-progress-buffered"
                  style={{ width: `${duration ? (buffered / duration) * 100 : 0}%` }}
                />
                <div 
                  className="video-progress-played"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div className="video-time-remaining">
              {formatTime(duration - currentTime)}
            </div>
          </div>

          <div className="video-controls-right">
            <button 
              className="video-fullscreen-button"
              onClick={toggleFullscreen}
            >
              <svg width="20" height="20" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.46915 2.05433C6.46915 1.8183 6.66049 1.62695 6.89653 1.62695H9.46081C9.69685 1.62695 9.8882 1.8183 9.8882 2.05433V4.61862C9.8882 4.85466 9.69685 5.046 9.46081 5.046C9.22478 5.046 9.03343 4.85466 9.03343 4.61862V3.08612L6.77135 5.34821C6.60445 5.51511 6.33385 5.51511 6.16694 5.34821C6.00004 5.1813 6.00004 4.9107 6.16694 4.7438L8.42903 2.48172H6.89653C6.66049 2.48172 6.46915 2.29037 6.46915 2.05433Z" fill="white"/>
                <path d="M2.79975 9.31981L5.06183 7.05773C5.22873 6.89083 5.22873 6.62022 5.06183 6.45332C4.89493 6.28642 4.62432 6.28642 4.45742 6.45332L2.19534 8.7154L2.19534 7.18291C2.19534 6.94687 2.00399 6.75552 1.76796 6.75552C1.53192 6.75552 1.34058 6.94687 1.34058 7.18291V9.74719C1.34058 9.98323 1.53192 10.1746 1.76796 10.1746H4.33224C4.56828 10.1746 4.75962 9.98323 4.75962 9.74719C4.75962 9.51116 4.56828 9.31981 4.33224 9.31981H2.79975Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
