import React, { useState, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import styles from './Banner.module.scss';
import images from '@/assets/images/banners/banner.png'
import images1 from '@/assets/images/banners/banner1.png';
import images2 from '@/assets/images/banners/banner2.png';
import { Info } from 'lucide-react';

interface Card {
  title: string;
  subtitle: string;
  buttonText: string;
  bgColor: string;
  image: string;
}

function Banner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  
  const cards: Card[] = [
    {
      title: "Exclusive Tournament",
      subtitle: "Piggy Christmas Tap: €35,000 For Your Wins",
      buttonText: "JOIN AND WIN",
      bgColor: "radial-gradient(circle at right center,#082C25 20%, #147261 80%)",
      image: images
    },
    {
      title: "CashBack",
      subtitle: "Win or Get Back up to €100",
      buttonText: "Discover More",
      bgColor: "radial-gradient(circle at right center,#0C1741 20%, #284DCE 80%)",
      image: images1
    },
    {
      title: "Sport Welcome Pack",
      subtitle: "Up to 300%",
      buttonText: "GET NOW",
      bgColor: "radial-gradient(circle at right center,#0C1741 20%, #7c3aed 80%)",
      image: images2
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isDragging) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(timer);
  }, [isDragging]);

  const getOrder = (index: number): number => {
    const difference = (index - currentIndex + cards.length) % cards.length;
    if (difference === 0) return 1;
    if (difference === 1) return 2;
    return 0;
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const threshold = 100; // Minimum drag distance to trigger slide change
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Dragged right - go to previous slide
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
      } else {
        // Dragged left - go to next slide
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
      }
    } else {
      // If not dragged far enough, animate back to original position
      controls.start({
        x: `${(getOrder(currentIndex) - 1) * 100}%`,
        transition: { duration: 0.5 }
      });
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Info clicked');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {cards.map((card, index) => {
          const order = getOrder(index);
          
          return (
            <motion.div
              key={index}
              style={{
                background: card.bgColor,
              }}
              initial="initial"
              animate="animate"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              variants={{
                initial: {
                  scale: order === 1 ? 1 : 0.8,
                  opacity: order === 1 ? 1 : 0.5,
                  x: `${(order - 1) * 100}%`,
                  zIndex: order === 1 ? 10 : 0,
                  rotateX: order === 1 ? -3 : 3
                },
                animate: {
                  scale: order === 1 ? 1 : 0.8,
                  opacity: order === 1 ? 1 : 0.5,
                  x: `${(order - 1) * 100}%`,
                  zIndex: order === 1 ? 10 : 0,
                  rotateX: order === 1 ? -3 : 3
                }
              }}
              transition={{ duration: 0.5 }}
              className={styles.card}
            >
              <button 
                className={styles.info_button}
                onClick={handleInfoClick}
                aria-label="More information"
              >
                <Info size={16} />
              </button>
              <div className={styles.left_column}>
                <div className={styles.header}>{card.title}</div>
                <div className={styles.subheader}>{card.subtitle}</div>
                <button className={styles.button}>{card.buttonText}</button>
              </div>
              <div className={styles.right_column}>
                <img src={card.image} alt={card.title}/>
              </div>
            </motion.div>
          );
        })}
        <div className={styles.dots}>
          {cards.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;