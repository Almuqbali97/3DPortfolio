import { useState, useEffect } from 'react';
import { BallCanvas } from './canvas';
import SectionWrapper from '../hoc/SectionWrapper';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
// const Tech = () => {
//   return (
//     <SectionWrapper>
//       <motion.div variants={textVariant()} className='mb-20'>
//         <p className={styles.sectionSubText}>Technologies</p>
//         <h2 className={styles.sectionHeadText}>My tech stack</h2>
//       </motion.div>
//       <div className='flex flex-row flex-wrap justify-around gap-10'>
//         {technologies.map((technologie) => {
//           return <div className='w-28 h-28' key={technologie.name}>
//             <BallCanvas icon={technologie.icon} />
//           </div>
//         })}
//       </div>
//     </SectionWrapper>
//   )
// }

const Tech = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // if (!isDesktop) return null; // Only render on larger screens

  return (
    // <SectionWrapper>
    //   <motion.div variants={textVariant()} className='mb-20'>
    //     <p className={styles.sectionSubText}>Technologies</p>
    //     <h2 className={styles.sectionHeadText}>My tech stack</h2>
    //   </motion.div>
    //   <div className='flex flex-row flex-wrap justify-around gap-10'>
    //     {technologies.map((technologie) => (
    //       <div className='w-28 h-28' key={technologie.name}>
    //         <BallCanvas icon={technologie.icon} />
    //       </div>
    //     ))}
    //   </div>
    // </SectionWrapper>
    <SectionWrapper>
      <motion.div variants={textVariant()} className='motion-div mb-20'>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>My tech stack</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-around gap-10'>
        {technologies.slice(0, !isDesktop ? 5 : technologies.length).map((technologie) => (
          <div className='w-28 h-28' key={technologie.name}>
            <BallCanvas icon={technologie.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};


export default Tech