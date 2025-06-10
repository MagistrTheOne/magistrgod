import Header from '../components/landing/Header';
import Features from '../components/landing/Features';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';
import Price from '../components/landing/Price';

import { motion } from 'framer-motion';

const sectionFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Landing = () => {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <Header />
      <main className="pt-[80px] space-y-32">

        <motion.section
          id="features"
          variants={sectionFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Features />
        </motion.section>

        <motion.section
          id="price"
          variants={sectionFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Price />
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.section>

      </main>
      <Footer />
    </div>
  );
};

export default Landing;
