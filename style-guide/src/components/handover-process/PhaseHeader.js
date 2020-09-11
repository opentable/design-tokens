import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";
import { images } from "../../../static/constants";

export default ({addHashRoute, phase}) => (
  <div className={styles.phaseContainer}>
    <div>
      <div
        id={phase}
        className={styles.phase}
        onClick={() => {
          addHashRoute('phase1');
        }}
      >
        {copy[phase]}
      </div>
      <div className={styles.phaseHeader}>{copy[`${phase}.header`]}</div>
    </div>
    <div>
      <img src={images[phase]} />
    </div>
  </div>
)
