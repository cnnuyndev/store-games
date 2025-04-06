import { Search, Grip } from 'lucide-react';
import styles from './GamingFlatform.module.scss';
import diamondIcon from '@/assets/images/menuIcons/diamond.png';
import vipIcon from '@/assets/images/menuIcons/vip.png';
import promotionIcon from '@/assets/images/menuIcons/promotion.png';
import hotMatchIcon from '@/assets/images/menuIcons/hotMath.png';
import p2pIcon from '@/assets/images/menuIcons/p2p.png';
import gamesIcon from '@/assets/images/menuIcons/games.png';
import providersIcon from '@/assets/images/menuIcons/providers.png';
import hotTagIcon from '@/assets/images/common/hotTag.png';
import newTagIcon from '@/assets/images/common/newTag.png';
import game1 from '@/assets/images/games/game1.png';
import game2 from '@/assets/images/games/game2.png';
import game3 from '@/assets/images/games/game3.png';
import game4 from '@/assets/images/games/game4.png';
import game5 from '@/assets/images/games/game5.png';
import game6 from '@/assets/images/games/game6.png';
import game7 from '@/assets/images/games/game7.png';
import game8 from '@/assets/images/games/game8.png';
import game9 from '@/assets/images/games/game9.png';

import evolution from '@/assets/images/providers/p_evolution.png';
import spribe from '@/assets/images/providers/p_spribe.png';
import veliplay from '@/assets/images/providers/p_veliplay.png';
import turboGames from '@/assets/images/providers/p_turbogames.png';
import smartSoft from '@/assets/images/providers/p_smartsoft.png';
import bgaming from '@/assets/images/providers/p_gaming.png';
import wazdan from '@/assets/images/providers/p_wazdan.png';
import hundredhp from '@/assets/images/providers/p_100hp.png';
interface GameCard {
  id: number;
  title: string;
  image: string;
  isHot?: boolean;
  isNew?: boolean;
  isNotDemo?: boolean;
}

interface Providers {
  id: number;
  name: string;
  gamesCount: string;
  image: string;
}

interface Platform {
  icon: string,
  label: string,
  bool: boolean,
  className?: string
}

const GamingPlatform = () => {
  const navigationItems: Platform[] = [
    { icon: diamondIcon, label: 'Diamond mine', bool: false },
    { icon: vipIcon, label: 'VIP', bool: false },
    { icon: promotionIcon, label: 'Promotion', bool: false },
    { icon: hotMatchIcon, label: 'Hot Match', bool: false },
    { icon: p2pIcon, label: 'P2P Transaction', bool: false },
    { icon: gamesIcon, label: 'Games', bool: true, className: styles.games },
    { icon: providersIcon, label: 'Providers', bool: true, className: styles.providers },
  ];

  const games: GameCard[] = [
    {
      id: 1,
      title: "100PP GAMING",
      image: game1,
      isHot: true
    },
    {
      id: 2, 
      title: "VeliPlay",
      image: game2,
      isHot: true
    },
    {
      id: 3,
      title: "Evolution",
      image: game3,
      isNew: true,
      isNotDemo: true
    },
    {
      id: 4,
      title: "VeliPlay",
      image: game4,
      isNew: true
    },
    {
      id: 5,
      title: "Onlyplay",
      image: game5,
    },
    {
      id: 6,
      title: "VeliPlay",
      image: game6,
    },
    {
      id: 7,
      title: "VeliPlay",
      image: game7,
    },
    {
      id: 8,
      title: "VeliPlay",
      image: game8,
      isHot: true
    },
    {
      id: 7,  
      title: "VeliPlay",
      image: game9,
    },
  ];

  const providers: Providers[] = [
    {
      id: 1,
      name: 'Evolution',
      gamesCount: '312 games',
      image: evolution,
    },
    {
      id: 2,
      name: 'Spribe',
      gamesCount: '12 games',
      image: spribe,
    },
    {
      id: 3,
      name: 'VeliPlay',
      gamesCount: '9 games',
      image: veliplay,
    },
    {
      id: 4,
      name: 'Turbo Games',
      gamesCount: '36 games',
      image: turboGames,
    },
    {
      id: 5,
      name: 'SmartSoft',
      gamesCount: '37 games',
      image: smartSoft,
    },
    {
      id: 6,
      name: '100HP Gaming',
      gamesCount: '7 games',
      image: hundredhp,
    },
    {
      id: 7,
      name: 'BGaming',
      gamesCount: '166 games',
      image: bgaming,
    },
    {
      id: 8,
      name: 'Wazdan',
      gamesCount: '199 games',
      image: wazdan,
    },
    // Add more providers
  ];

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <button className={`${styles.navButton} ${styles.search}`}>
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
        {navigationItems.map((item, index) => (
          <button key={index} className={`${styles.navButton} ${item.className || ""}`} style={{ backgroundColor: item.bool ? '#12294A':'initial' }}>
            <img src={item.icon} alt={item.label} className={styles.menuIcon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      {/* Exclusive Games Section */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Exclusive Games</h2>
          <button className={styles.seeAll}>SEE ALL <Grip/></button>
        </div>

        <div className={styles.wrap}>
          <div className={styles.grid}>
            {games.map((game, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.tags}>
                  {game.isHot && (
                    <img src={hotTagIcon} alt='hot' className={styles.hotTag}/>
                  )}
                  {game.isNew && (
                    <img src={newTagIcon} alt='new' className={styles.newTag}/>
                  )}
                </div>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={game.image} alt={game.image}/>
                  </div>
                  
                  <button className={styles.playButton} aria-label="Play video"></button>
                  {!game.isNotDemo && (
                    <button className={styles.demoButton}>Demo</button>
                  )}

                  <div className={styles.info}>
                    <p className={styles.title}>
                      {game.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>All Providers</h2>
          <button className={styles.seeAll}>SEE ALL <Grip/></button>
        </div>
        <div className={styles.wrap}>
          <div className={styles.providersGrid}>
            {providers.map((provider, index) => (
              <div key={index} className={styles.providerCard}>
                <div className={styles.providerLogo}>
                  <img src={provider.image} alt={provider.image} className={styles.providerImage}/>
                </div>
                <div className={styles.providerContent}>
                  <h3 className={styles.providerName}>{provider.name}</h3>
                  <p className={styles.providerGames}>{provider.gamesCount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamingPlatform;