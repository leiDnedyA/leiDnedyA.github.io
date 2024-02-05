import { useState, useEffect } from 'react'

const TYPING_DELAY_MILLISECONDS = 5;

function CodeBlock(props: {text: string, doScroll?: boolean}) {
  const [textEnd, setTextEnd] = useState(0);

  if (props.doScroll === true) {
    const timeout = setTimeout(() => {
      console.log('tick')
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
        <code>
        {
          props.doScroll === true ?
          props.text.slice(0, textEnd) :
          props.text
        }
        </code>
  )
}

export default CodeBlock;
