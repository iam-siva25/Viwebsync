

import OilGasAbout from './OilgasReusable/OilGasAbout';
import OilGasSpecifications from './OilgasReusable/OilGasSpecifications';
import OilGasKeyFeatures from './OilgasReusable/OilGasKeyFeatures';
import OilGasKeyApplications from './OilgasReusable/OilGasKeyApplications';

const OilGas = () => {
  
    // Animation logic remains the same for all pages
    

  return (
    <div className="oil-gas-page-container">
      <OilGasAbout />
      <OilGasSpecifications />
      
      <OilGasKeyApplications />
      <OilGasKeyFeatures />
    </div>
  );
};
export default OilGas;