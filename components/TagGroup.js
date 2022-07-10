import Link from 'next/link';

import { FaTags } from "react-icons/fa";

export function TagGroup({ items }) {
  return (
    <div className='tags'>
      <FaTags />
      {items.map((item) => {
        return (
          <div key={item} className="tag">
            <Link href={'#'}>
              <a>{item}</a>
            </Link>
          </div>
        );
      })}
      <style jsx>
      {`
        .tag {
          display: inline-block;
          margin-left: 0.25em;
        }        
      `}
    </style>
    </div>

  );
}
