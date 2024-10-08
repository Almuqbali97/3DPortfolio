import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// const SectionWrapper = (Component, idName) => function HOC() {
//     return (
//         <motion.section
//             variants={staggerContainer()}
//             initial="hidden"
//             whileInView='show'
//             viewport={{ once: true, amount: 0.25 }}
//             className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//         >
//             <span className='hash-span' id={idName}></span>
//             <Component />
//         </motion.section>
//     )

// }
const SectionWrapper = ({ children, sectionIdName }) => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView='show'
            viewport={{ once: true, amount: 0.12 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0 scroll-section`}
        >
            <span className='hash-span' id={sectionIdName}>
                &nbsp;
            </span>
            {children}
        </motion.section>
    )

}

export default SectionWrapper;
