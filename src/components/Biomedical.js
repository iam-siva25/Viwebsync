

import BiomedicalAbout from './BimedicalReusable/BiomedicalAbout';
import BiomedicalSpecifications from './BimedicalReusable/BiomedicalSpecifications';
import BiomedicalKeyFeatures from './BimedicalReusable/BiomedicalKeyFeatures';
import BiomedicalKeyApplications from './BimedicalReusable/BiomedicalKeyApplications';

const Biomedical = () => {

  return (
    <div className="biomedical-page-container"  style={{ marginTop: '80px' }}>
      <BiomedicalAbout />
      <BiomedicalSpecifications />
     
      <BiomedicalKeyApplications />
       <BiomedicalKeyFeatures />
    </div>
  );
};
export default Biomedical;