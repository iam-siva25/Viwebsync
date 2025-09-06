
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './Preloader';
import Header from './components/Header';

import Home from './components/Home';
import ContactForm from './components/ContactForm';

import Biomedical from './components/Biomedical';
 // Fixed case
import Blog from './components/Blog';
import Startnow from './components/Startnow';
import Automotive from './components/Automotive'; // Fixed typo (Automative to Automotive)
import AerospaceDefense from './components/Aerospace';
import Semiconductor from './components/Semiconductor';
import DeepLearning from './components/DeepLearning';
import ChemicalServices from './components/Oilgas';
import Company from './components/Company';
import RadarEchoSimulatorPage from './components/Solutions/RadarEchoSimulator'; // Import the new component
import TelemetrySystem from './components/Solutions/TelemetrySystem'; // Import the new component
import CheckoutSystemPage from './components/Solutions/CheckoutSystems';
import HardwareDesignPage from './components/Solutions/HardwareDesign';
import EmbeddedSystemAndValidationPage from './components/Solutions/EmbeddedSystem';
import DeepLearningImageProcessingPage from './components/Solutions/DeeplearningSolution';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
               
              </>
            }
          />
          <Route
            path="/connect"
            element={
              <>
                <ContactForm />
              
              </>
            }
          />
         
         
          
          <Route
            path="/preloader"
            element={
              <>
                <Preloader />
               
              </>
            }
          />
          
          <Route
            path="/automotive"
            element={
              <>
                <Automotive />
                
              </>
            }
          />
           <Route
            path="/Biomedical-and-Pharma"
            element={
              <>
                <Biomedical />
                
              </>
            }
          />
          

          
          <Route
            path="/labview/deep-learning"
            element={
              <>
                <DeepLearning />
                
              </>
            }
          />
          <Route
            path="/aerospace-defense"
            element={
              <>
                <AerospaceDefense />
                
              </>
            }
          />
          <Route
            path="/semiconductor"
            element={
              <>
                <Semiconductor />
                
              </>
            }
          />
          <Route
            path="/oil-gas-chemical-power"
            element={
              <>
                <ChemicalServices />
                
              </>
            }
          />

          <Route
          path="/radarecho"
          element={
            <>
              <RadarEchoSimulatorPage />
              
            </>
          }
          />

           <Route
          path="/telemetry"
          element={
            <>
              <TelemetrySystem />
              
            </>
          }
          />

          <Route
          path="/checkoutsystems"
          element={
            <>
              <CheckoutSystemPage />
              
            </>
          }
          />    

          <Route
          path="/hardwaredesign"
          element={
            <>
              <HardwareDesignPage />    
            </>
          }
          />

          <Route
          path="/embeddedsystem"
          element={
            <>
              <EmbeddedSystemAndValidationPage />    
            </>
          }
          />

          <Route
          path="/deeplearning"
          element={
            <>
              <DeepLearningImageProcessingPage />    
            </>
          }
          />

      
          <Route
            path="/company"
            element={
              <>
                <Company />

              </>
            }
          />
          <Route
            path="/portfolio"
            element={
              <>
                <Blog />
               
              </>
            }
          />
         
          <Route
            path="/start-now"
            element={
              <>
                <Startnow />
               
              </>
            }
          />
        </Routes>
      </main>
      
        
    </div>
  );
}

export default App;
