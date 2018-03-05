import React from 'react';
import _ from 'lodash';

import SectionHeader from '../components/section-header';
import token from 'otkit-breakpoints/token.common';

const Breakpoints = () => {
  var tokens = _.toPairsIn(token);

  tokens = tokens.map((token, index) => {
    return (
      <div key={index}>
        {_.kebabCase(token[0])}: {token[1]}
      </div>
    );
  });
  return (
    <section>
      <SectionHeader text="Breakpoints" />
      {tokens}
    </section>
  );
};

export default Breakpoints;
