import { useCallback, useEffect, useState } from 'react';
import './styles/BackgroundSpotlight.css'

function BackgroundSpotlight() {
  const [position, setPosition] = useState([0, 0]);
  const [opacity, setOpacity] = useState(100);

  const mouseMoveCallback = useCallback((event: MouseEvent) => {
      setPosition([event.pageX, event.pageY]);
      const blurHeight = window.innerHeight - 200;
      if (event.pageY >= blurHeight) {
        setOpacity(0);
      } else{
        setOpacity((blurHeight - event.pageY) / blurHeight);
      }
    }, []);

  useEffect(() => {
      document.addEventListener('mousemove', mouseMoveCallback);
      return () => {
        document.removeEventListener('mousemove', mouseMoveCallback);
      }
    });

  return <>
    <div className="blob" style={{
      left: position[0],
      top: position[1],
      opacity: opacity
    }}></div>
    <div className="blur"></div>
  </>;
}

export default BackgroundSpotlight;
