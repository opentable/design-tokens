import React from 'react';
import _ from 'lodash';

import SectionHeader from '../components/section-header';
import token from 'otkit-shadows/token.common';

const Shadows = () => {
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
      <SectionHeader text="Shadows" />
      {tokens}
    </section>
  );
};

export default Shadows;
