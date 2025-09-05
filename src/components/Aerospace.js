import React from 'react';
import AerospaceDefenseAbout from './AerospaceService/Aboutaero';
import Specification from './AerospaceService/Specification';
import KeyFeatures from './AerospaceService/AeroKerfeatures';
import KeyApplications from './AerospaceService/KeyApplication';
const AerospacePage = () => {
  return (
    <main className="aerospace-page" style={{marginTop:'80px'}}>
      <AerospaceDefenseAbout />

      <Specification />

      <KeyApplications />

      <KeyFeatures />
      
  
    </main>
  );
};

export default AerospacePage;