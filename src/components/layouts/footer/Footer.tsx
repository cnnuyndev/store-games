import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import styles from './Footer.module.scss';
import facebook from '@/assets/images/socials/facebook.svg';
import telegram from '@/assets/images/socials/telegram.svg';
import twitter from '@/assets/images/socials/twitter.svg';
import instagram from '@/assets/images/socials/instagram.svg';
import apple from '@/assets/images/socials/apple.svg';
import android from '@/assets/images/socials/android.svg';

function Footer() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    if (activeDropdown === section) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(section);
    }
  };

  const footerData = {
    games: {
      title: 'Games',
      items: ['Game 1', 'Game 2', 'Game 3', 'Game 13'],
    },
    about: {
      title: 'About',
      items: [
        'About Us',
        'Promotions',
        'VIP',
        'Help Center',
        'Awards & Certificates',
        'App',
      ],
    },
    legal: {
      title: 'Legal Information',
      items: [
        'General Term & Conditions',
        'Responsible Gaming Policy',
        'Sport Betting Rules',
        'Privacy And Cookies Policy',
        'Payment Method',
        'Limits',
      ],
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Desktop View */}
        <div className={styles.desktopView}>
          <div className={styles.helpSection}>
            <h2>Help Center</h2>
            <p>If you have any question?</p>
            <button className={styles.btnAnswer}>GET ANSWERS</button>
            <div className={styles.socialIcons}>
              <a className={styles.brand}href="#">
                <img src={telegram} alt="telegram" />
              </a>
              <a className={styles.brand}href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a className={styles.brand}href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a className={styles.brand}href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>

          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className={styles.footerColumn}>
              <h3>{section.title}</h3>
              <div className={styles.linkGroup}>
                {section.items.map((item, index) => (
                  <a key={index} href="#">{item}</a>
                ))}
              </div>
            </div>
          ))}
          {/* App Download Section */}
          <div className={styles.appSection}>
            <div className={styles.macBox}>
              <img src={apple} alt="apple" />
              <span>BlueChip App for Mac OS</span>
            </div>
            <div className={styles.mobileApps}>
              <div className={styles.androidBox}>
                <img src={android} alt="android" />
                <span>Android</span>
              </div>
              <div className={styles.iosBox}>
                <img src={apple} alt="apple" />
                <span>iOS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className={styles.mobileView}>
          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className={styles.dropdownContainer}>
              <button
                onClick={() => toggleDropdown(key)}
                className={styles.dropdownButton}
              >
                {section.title}
                {activeDropdown === key ? (
                  <ChevronUpIcon className={styles.icon} />
                ) : (
                  <ChevronDownIcon className={styles.icon} />
                )}
              </button>
              {activeDropdown === key && (
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownLinks}>
                    {section.items.map((item, index) => (
                      <a key={index} href="#">{item}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className={styles.mobileFollowSection}>
            <h4>Follows Us</h4>
            <div className={styles.mobileSocialIcons}>
              {/* Social Icons */}
              <a className={styles.brand}href="#">
                <img src={telegram} alt="telegram" />
              </a>
              <a className={styles.brand}href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a className={styles.brand}href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a className={styles.brand}href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>

          <div className={styles.mobileHelpSection}>
            <div className={styles.helpContent}>
              <h5>Help Center</h5>
              <p>If you have any question?</p>
            </div>
            <button className={styles.btnAnswer}>GET ANSWERS</button>
          </div>

          {/* App Download Section */}
          <div className={styles.AppSection}>
            <div className={styles.mobileApps}>
              <div className={styles.androidBox}>
                <img src={android} alt="android" />
                <div className={styles.mobileContent}>
                  <h4 className={styles.contentApp}>BlueChip App</h4>
                  <span>for Android</span>
                </div>
              </div>
              <div className={styles.iosBox}>
                <img src={apple} alt="apple" />
                <div className={styles.mobileContent}>
                  <h4 className={styles.contentApp}>BlueChip App</h4>
                  <span>for iOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;