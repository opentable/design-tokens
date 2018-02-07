import React from "react";
import styles from "otkit-desktop-typography/token.common";

export default () => (
  <div>
    Hello token! <pre>{JSON.stringify(styles, null, 2)}</pre>
  </div>
);
