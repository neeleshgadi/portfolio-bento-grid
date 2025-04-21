import React from "react";
import { motion } from "framer-motion";
import IntroTile from "../tiles/IntroTile";
import AboutTile from "../tiles/AboutTile";
import SkillsTile from "../tiles/SkillsTile";
import ProjectsTile from "../tiles/ProjectsTile";
import CertificationsTile from "../tiles/CertificationsTile";
import ExperienceTile from "../tiles/ExperienceTile";
import HackathonsTile from "../tiles/HackathonsTile";
import ContactTile from "../tiles/ContactTile";
import ResumeTile from "../tiles/ResumeTile";

const BentoGrid: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="max-w-8xl mx-auto px-6 lg:px-8 py-12 mt-22"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Row 1 */}
        <div className="lg:col-span-2">
          <IntroTile />
        </div>
        <div>
          <ResumeTile />
        </div>

        {/* Row 2 */}
        {/* <div>
          <AboutTile />
        </div> */}
        <div className="md:col-span-3">
          <SkillsTile />
        </div>

        {/* Row 3 */}
        <div className="lg:col-span-3">
          <ProjectsTile />
        </div>

        {/* Row 4 */}
        <div className="md:col-span-2">
          <ExperienceTile />
        </div>
        <div>
          <CertificationsTile />
        </div>

        {/* Row 5 */}
        <div>
          <HackathonsTile />
        </div>
        <div>
          <AboutTile />
        </div>
        <div>
          <ContactTile />
        </div>
      </div>
    </motion.div>
  );
};

export default BentoGrid;
