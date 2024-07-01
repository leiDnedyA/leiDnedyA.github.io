import { useCallback, useEffect, useState } from 'react';
import './styles/BackgroundSpotlight.css'

// Diagonal length of spotlight rectangle to avoid putting it below page end
const DIAGONAL_LENGTH = Math.sqrt(Math.pow(200, 2) + Math.pow(200, 2));

function BackgroundSpotlight() {
  const [position, setPosition] = useState([window.innerWidth / 2, 0]);
  const [blurHeight, setBlurHeight] = useState(window.innerWidth);

  const mouseMoveCallback = useCallback((event: MouseEvent) => {
      if (event.pageY + DIAGONAL_LENGTH < document.body.scrollHeight) {
        setPosition([event.pageX, event.pageY]);
      } else{
        setPosition([event.pageX, document.body.scrollHeight - DIAGONAL_LENGTH]);
      }
    }, []);

  const windowLoadCallback = useCallback(() => {
      setBlurHeight(document.body.scrollHeight);
    }, []);

  useEffect(() => {
      document.addEventListener('mousemove', mouseMoveCallback);
      window.addEventListener('load', windowLoadCallback);
      window.addEventListener('resize', windowLoadCallback);
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
