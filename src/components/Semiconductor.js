

import ElectronicsAbout from './ElectronicsReusable/ElectronicsAbout';
import ElectronicsSpecifications from './ElectronicsReusable/ElectronicsSpecifications';
import ElectronicsKeyFeatures from './ElectronicsReusable/ElectronicsKeyFeatures';
import ElectronicsKeyApplications from './ElectronicsReusable/ElectronicsKeyApplications';

const Electronics = () => {
  

  return (
    <div className="electronics-page-container" style={{ marginTop: '80px' }}>
      <ElectronicsAbout />
      <ElectronicsSpecifications />
      <ElectronicsKeyApplications />
      <ElectronicsKeyFeatures />
    </div>
  );
};
export default Electronics;