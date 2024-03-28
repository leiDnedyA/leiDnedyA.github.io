import { useCallback, useEffect, useState } from 'react';
import './styles/BackgroundSpotlight.css'

function BackgroundSpotlight() {
  const [position, setPosition] = useState([window.innerWidth / 2, 0]);
  const [blurHeight, setBlurHeight] = useState(window.innerWidth);

  const mouseMoveCallback = useCallback((event: MouseEvent) => {
      setPosition([event.pageX, event.pageY]);
    }, []);

  const windowLoadCallback = useCallback(() => {
      setBlurHeight(document.body.scrollHeight);
    }, []);

  useEffect(() => {
      document.addEventListener('mousemove', mouseMoveCallback);
      window.addEventListener('load', windowLoadCallback);
      return () => {
        document.removeEventListener('mousemove', mouseMoveCallback);
        window.removeEventListener('load', windowLoadCallback);
      }

    });

  return <>
    {window.innerWidth > 900 ?
      <>
        <div className="blur" style={{height: blurHeight}}></div>
        <div className="blob" style={{
          left: position[0],
          top: position[1],
          opacity: 1
        }}></div>
      </> :
      <></>
    }
  </>;
}

export default BackgroundSpotlight;
