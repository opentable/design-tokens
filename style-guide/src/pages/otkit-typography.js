import React from 'react';
import _ from 'lodash';

import SectionHeader from '../components/section-header';
import token from 'otkit-typography/token.common';
import TypographyDesktop from './otkit-desktop-typography.js';

// process & group typography tokens
var tokens = _.toPairsIn(token);
var tokenGroups = [];

var typographyTokens = {
  fontSize: [],
  lineHeight: [],
  fontWeight: []
};

for (var key in typographyTokens) {
  for (var i = 0; i < tokens.length; i++) {
    var tokenName = tokens[i][0];
    if (tokenName.startsWith(key)) {
      typographyTokens[key].push(tokens[i]);
    }
  }
  // name of the token group
  tokenGroups.push(
    <div style={{ marginTop: '10px', fontWeight: '500' }}>
      {_.kebabCase(key)}
    </div>
  );
  // tokens within the token group
  tokenGroups.push(
    typographyTokens[key].map((token, index) => {
      return (
        <div key={index}>
          {_.kebabCase(token[0])}: {token[1]}
        </div>
      );
    })
  );
}

const Typography = () => {
  return (
    <div>
      <section>
        <SectionHeader text="Typography" />
        {tokenGroups}
      </section>
      <TypographyDesktop />
    </div>
  );
};

export default Typography;
