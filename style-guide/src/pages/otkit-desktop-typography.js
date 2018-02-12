import React from 'react';
import Link from 'gatsby-link';

import token from 'otkit-desktop-typography/token.common';
import exampleStyle from '../styles/example.module.css';

export default () => {
  return (
    <div>
      <div className={exampleStyle.awesome}>
        Hello token! <pre>{JSON.stringify(token, null, 2)}</pre>
      </div>
      <Link to="/">back to index</Link>
    </div>
  );
};
