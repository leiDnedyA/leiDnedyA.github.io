import { useCallback, useEffect, useState } from 'react';
import './styles/BackgroundSpotlight.css'

function BackgroundSpotlight() {
  const [position, setPosition] = useState([0, 0]);

  const mouseMoveCallback = useCallback((event: MouseEvent) => {
      setPosition([event.x, event.y])
    }, []);

  useEffect(() => {
      document.addEventListener('mousemove', mouseMoveCallback);
      return () => {
        document.removeEventListener('mousemove', mouseMoveCallback);
      }
    });

  return <div className="BackgroundSpotlight" style={{
    left: position[0],
    top: position[1]
  }}></div>;
}

export default BackgroundSpotlight;
