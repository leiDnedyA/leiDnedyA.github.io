import { useState } from 'react'
import './CodeBlock.css'

const TYPING_DELAY_MILLISECONDS = 5;

function CodeBlock(props: {text: string, doScroll?: boolean}) {
  const [textEnd, setTextEnd] = useState(0);

  if (props.doScroll === true) {
    const timeout = setTimeout(() => {
      setTextEnd((curr) => {
        if (curr >= props.text.length) {
          clearTimeout(timeout);
          return curr;
        }
        return curr + 1;
        });
    }, TYPING_DELAY_MILLISECONDS);
  }

  return (
        <div className="CodeBlock">
          <code>
          {
            props.doScroll === true ?
            props.text.slice(0, textEnd) :
            props.text
          }
          </code>
        </div>
  )
}

export default CodeBlock;
