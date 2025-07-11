import React, { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const playlist = [
  {
    id: 'KMjSuj_LRh0',
    title: 'Mess It Up'
  },
  {
    id: 'kWq14TtprVw',
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

function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (window.YT) {
        initializePlayer();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.body.appendChild(script);

      window.onYouTubeIframeAPIReady = initializePlayer;
    };

    const initializePlayer = () => {
      const ytPlayer = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: playlist[currentTrack].id,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              playNextTrack();
            }
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            }
            if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          }
        }
      });
    };

    loadYouTubeAPI();

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (player) {
      player.loadVideoById(playlist[currentTrack].id);
    }
  }, [currentTrack, player]);

  const playNextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const togglePlayPause = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <div className="music-player">
      <div id="youtube-player" style={{ display: 'none' }}></div>
      <div className="music-controls">
        <button
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlayPause}
          disabled={!player}
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
        <div className="track-info">
          <div className="track-title">{playlist[currentTrack].title}</div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
