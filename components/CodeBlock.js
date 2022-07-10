import React from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/inline-color/prism-inline-color.min';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegClone } from "react-icons/fa";

export function CodeBlock({children, language}) {
  
  const [isCopied, setIsCopied] = React.useState(false);

  const onCopyClicked = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };
  
  const ref = React.useRef(null);
  
  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);
  
  return (
    <div className="code" aria-live="polite">
      <CopyToClipboard text={children}>
        <button onClick={onCopyClicked} className="copy-button">
          <span>{isCopied ? "copied!" : <FaRegClone />}</span>
        </button>
      </CopyToClipboard>    
      <pre
        ref={ref}
        className={`language-${language}`}
      >
        {children}
      </pre>
      <style jsx>
        {`
          .copy-button {
            position: absolute;
            right: 0px;
            border: 0px;
            background: transparent;
            color: #f2f2f2;
            padding: 12px;
            font-size: 1em;
            cursor: pointer;
          }
          
          .code {
            position: relative;
            margin: 4px;
          }

          /* Override Prism styles */
          .code :global(pre[class*='language-']) {
            text-shadow: none;
            border-radius: 4px;
          }
          
        `}
      </style>
    </div>
  );
}
