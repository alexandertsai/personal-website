import { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerInstanceRef = useRef(null);

  const playlist = [
    {
      id: 'KMjSuj_LRh0',
      title: 'Mess It Up'
    },
    {
      id: 'kWq14TtprVw', // Lofi hip hop mix
      title: 'Felt Good About You'
    },
    {
      id: 'ntbUAHXXC_Q',
      title: 'Full Machine'
    },
    {
      id: 'CeKzGqMHGDU',
      title: 'The Blue'
    }
  ];

  useEffect(() => {
    // Initialize YouTube player when API is ready
    const initializePlayer = () => {
      if (window.YT && window.YT.Player) {
        playerInstanceRef.current = new window.YT.Player('youtube-player', {
          height: '0',
          width: '0',
          videoId: playlist[0].id,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            cc_load_policy: 0,
            playsinline: 1,
            origin: window.location.origin
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
            onError: onPlayerError
          }
        });
      }
    };

    if (window.YT) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = () => {
    setIsPlayerReady(true);
    setCurrentTrack(playlist[0]);
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
    } else if (event.data === window.YT.PlayerState.ENDED) {
      // Auto-play next track
      playNextTrack();
    }
  };

  const onPlayerError = (event) => {
    console.error('YouTube Player Error:', event.data);
    // Try next track on error
    playNextTrack();
  };

  const togglePlayPause = () => {
    if (!isPlayerReady || !playerInstanceRef.current) return;

    if (isPlaying) {
      playerInstanceRef.current.pauseVideo();
    } else {
      playerInstanceRef.current.playVideo();
    }
  };

  const playNextTrack = () => {
    if (!currentTrack || !isPlayerReady) return;

    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    const nextTrack = playlist[nextIndex];

    setCurrentTrack(nextTrack);
    playerInstanceRef.current.loadVideoById(nextTrack.id);
  };

  return (
    <div className="music-player">
      <div id="youtube-player" style={{ display: 'none' }}></div>
      
      <div className="music-controls">
        <button 
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlayPause}
          disabled={!isPlayerReady}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        
        {currentTrack && (
          <div className="track-info">
            <span className="track-title">{currentTrack.title}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;