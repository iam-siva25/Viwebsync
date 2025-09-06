import React from 'react';
import AutomotiveAbout from './Automativereusalble/AutomotiveAbout';
import AutomotiveKeyApplications from './Automativereusalble/AutomotiveKeyApplications';
import AutomotiveSpecifications from './Automativereusalble/AutomotiveSpecifications';
import AutomotiveKeyFeatures from './Automativereusalble/AutomotiveKeyFeatures';

const Automotive = () => {
  return (
    <main className="automotive-page-container" style={{ marginTop: '80px' }}>
      <AutomotiveAbout />
      <AutomotiveSpecifications />
      <AutomotiveKeyApplications />
      <AutomotiveKeyFeatures />
    </main>
  );
};

export default Automotive;