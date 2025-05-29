import React from 'react';
import styles from './HomeSections.module.css'; // Reuse existing
import localStyles from './HowItWorksSection.module.css'; // For specific styles

// Placeholder data for steps - ideally, icons would be SVG components or images
const steps = [
  {
    id: 1,
    icon: '🔗', // Placeholder icon
    title: 'Connect Your Wallet',
    description: 'Easily connect your preferred crypto wallet to start your journey.',
  },
  {
    id: 2,
    icon: '🖼️', // Placeholder icon
    title: 'Find Your NFT',
    description: 'Browse through thousands of unique NFTs in our marketplace.',
  },
  {
    id: 3,
    icon: '🛒', // Placeholder icon
    title: 'Purchase NFT',
    description: 'Securely buy your chosen NFT with a few clicks.',
  },
  {
    id: 4,
    icon: '👤', // Placeholder icon
    title: 'View in Your Profile',
    description: 'Your new NFT will appear in your profile and wallet.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className={`${styles.section} ${localStyles.howItWorksSection}`}>
      <h2>How to Buy NFTs on Venus</h2>
      <div className={localStyles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.id} className={localStyles.stepCard}>
            <div className={localStyles.stepIcon}>{step.icon}</div>
            <h3 className={localStyles.stepTitle}>{step.title}</h3>
            <p className={localStyles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
