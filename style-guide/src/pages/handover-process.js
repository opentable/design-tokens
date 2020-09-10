import React, {useEffect, useState} from 'react';
import Layout from '../components/layout/layout';
import styles from '../styles/handover.module.scss';
import SectionHeader from '../components/section-header';
import copy from '../../static/handover-process';
import banner from '../assets/handoverBanner.png';
import amazeDesigners from '../assets/amazeDesigners.png';
import PhaseOne from "../components/handover-process/PhaseOne";
import PhaseTwo from "../components/handover-process/PhaseTwo";
import PhaseThree from "../components/handover-process/PhaseThree";
import PhaseFour from "../components/handover-process/PhaseFour";
import PhaseFive from "../components/handover-process/PhaseFive";
import PhaseBox from "../components/handover-process/PhaseBox";
import _ from 'lodash';
import { images } from "../../static/constants";

const navItems = ['phase1', 'phase2', 'phase3', 'phase4', 'phase5'];
const offsetTop = 200;

export default () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', debouncedScroll);
    const phaseNumber = window.location.hash.replace("#", '');
    setSelectedPhase(phaseNumber);
    scrollTo(phaseNumber);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    }
  }, []);

  const debouncedScroll = _.debounce(handleScroll, 150);

  function handleScroll() {
    navItems.forEach((item) => {
      const el = document.getElementById(item);
      if (el && el.getBoundingClientRect().top >=0 && el.getBoundingClientRect().top <= offsetTop) {
        setSelectedPhase(item);
      }
    });
  }

  function scrollTo(phaseNumber) {
    if (phaseNumber) {
      const elem = document.getElementById(phaseNumber);
      if (!elem) return;

      elem.scrollIntoView({behavior: 'smooth', block: 'center', inline: "nearest"})
    }
  }

  function addHashRoute(phaseNumber) {
    if (window.history.pushState) {
      window.history.pushState(null, null, `#${phaseNumber}`);
    } else {
      window.location.hash = `#${phaseNumber}`;
    }

    setSelectedPhase(phaseNumber);
    scrollTo(phaseNumber);
  }

  return (
    <Layout className={styles.noPadding}>
      <div className={styles.mainContainer}>
        <SectionHeader text={copy["header"]} className={styles.alignCenter}/>
        <p className={styles.alignCenter}>
          {copy['description']}
        </p>
      </div>
      <img src={banner} alt="banner" className={styles.banner}/>
      <div className={styles.mainContainer}>
        <div className={styles.title}>{copy["title"]}</div>
        <div className={styles.subtext}>{copy['subtext1']}</div>
        <p className={styles.subtext}>{copy['subtext2']}</p>
      </div>

      <div className={styles.boxContainer}>
        {
          navItems.map((item, index) => {
            return <PhaseBox
              key={index}
              addHashRoute={() => addHashRoute(item)}
              title={copy[item]}
              illustration={images[item]}
              description={copy[`${item}.header`]}

            />
          })
        }
      </div>

      <div className={styles.phaseNav}>
        {
          navItems.map((item, key) => (
            <div
              key={key}
              onClick={() => addHashRoute(item)}
              className={`${styles.navItem} ${selectedPhase === item && styles.active}`}>{copy[`nav.${item}`]}</div>
          ))
        }
      </div>

      <PhaseOne addHashRoute={addHashRoute} />

      <PhaseTwo addHashRoute={addHashRoute} />

      <img className={styles.illustration} src={amazeDesigners} alt="amazeDesigners"/>

      <PhaseThree addHashRoute={addHashRoute} />

      <PhaseFour addHashRoute={addHashRoute} />

      <PhaseFive addHashRoute={addHashRoute} />
    </Layout>
  );
};
