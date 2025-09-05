import React from 'react';
import DeepLearningAbout from './Deeplearningreusable/DeepLearningAbout';
import DeepLearningSpecifications from './Deeplearningreusable/DeepLearningSpecifications';
import DeepLearningApplications from './Deeplearningreusable/DeepLearningApplications';
import DeepLearningFeatures from './Deeplearningreusable/Deeplearningfeatures';

const DeepLearning = () => {
  return (
    <main className="automotive-page-container" style={{ marginTop: '80px' }}>
      <DeepLearningAbout />
      <DeepLearningSpecifications />
      <DeepLearningApplications />
      <DeepLearningFeatures />
    </main>
  );
};

export default DeepLearning;