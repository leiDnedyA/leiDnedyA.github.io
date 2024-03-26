import { useCallback, useEffect, useState } from 'react';
import './styles/BackgroundSpotlight.css'

function BackgroundSpotlight() {
  const [position, setPosition] = useState([window.innerWidth / 2, 0]);
  const [opacity, setOpacity] = useState(.3);

  const mouseMoveCallback = useCallback((event: MouseEvent) => {
      setPosition([event.pageX, event.pageY]);
      const blurHeight = window.innerHeight - 200;
      if (event.pageY >= blurHeight) {
        setOpacity(0);
      } else{
        setOpacity(Math.pow((blurHeight - event.pageY) / blurHeight, 1));
      }
    }, []);

  useEffect(() => {
      document.addEventListener('mousemove', mouseMoveCallback);
      return () => {
        document.removeEventListener('mousemove', mouseMoveCallback);
      }
    });

  return <>
    {window.innerWidth > 900 ?
      <>
        <div className="blob" style={{
          left: position[0],
          top: position[1],
          opacity: opacity
        }}></div>
        <div className="blur"></div>
      </> :
      <></>
    }
  </>;
}

export default BackgroundSpotlight;
