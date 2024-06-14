import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Define the animation variants
  const variantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const variantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  // Control the animation
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  // Start the animation when the element comes into view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </h1>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" ref={ref}>
            <motion.div
              className="my-4"
              initial="hidden"
              animate={controls}
              variants={variantsLeft}
              transition={{ delay: 0 * 0.2 }}
            >
              <h2 className="text-2xl">Name</h2>
              <p className="text-lg">Damian Milczarek</p>
            </motion.div>
            <motion.div
              className="my-4"
              initial="hidden"
              animate={controls}
              variants={variantsLeft}
              transition={{ delay: 1 * 0.2 }}
            >
              <h2 className="text-2xl">Country</h2>
              <p className="text-lg">Sweden</p>
            </motion.div>
            <motion.div
              className="my-4"
              initial="hidden"
              animate={controls}
              variants={variantsLeft}
              transition={{ delay: 2 * 0.2 }}
            >
              <h2 className="text-2xl">Languages</h2>
              <p className="text-lg">Swedish, English, Polish</p>
            </motion.div>
            <motion.div
              className="my-4"
              initial="hidden"
              animate={controls}
              variants={variantsRight}
              transition={{ delay: 0 * 0.2 }}
            >
              <h2 className="text-2xl">Age</h2>
              <p className="text-lg">24</p>
            </motion.div>
            <motion.div
              className="my-4"
              initial="hidden"
              animate={controls}
              variants={variantsRight}
              transition={{ delay: 1 * 0.2 }}
            >
              <h2 className="text-2xl">Phone</h2>
              <p className="text-lg">+46704169092</p>
            </motion.div>
            <motion.div
              className="my-4"
              initial="hidden"
              animate={controls}
              variants={variantsRight}
              transition={{ delay: 2 * 0.2 }}
            >
              <h2 className="text-2xl">Email</h2>
              <p className="text-lg">damian.milczarek2000@gmail.com</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
