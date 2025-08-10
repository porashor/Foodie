import { motion } from 'framer-motion';

const RunningAnimation = () => {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: "-100vw" }}
      transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      style={{ fontSize: '4rem', position: 'absolute' }}
    >
      🏃‍♂️
    </motion.div>
  );
};

export default RunningAnimation;