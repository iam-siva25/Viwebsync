import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/Preloader.css';

const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reset loading state on route change
    setIsLoading(true);

    // Function to check if all images are loaded
    const checkImagesLoaded = () => {
      const images = document.getElementsByTagName('img');
      const totalImages = images.length;
      let loadedImages = 0;

      if (totalImages === 0) {
        setIsLoading(false);
        return;
      }

      Array.from(images).forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              setIsLoading(false);
            }
          });
          img.addEventListener('error', () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              setIsLoading(false);
            }
          });
        }
      });

      if (loadedImages === totalImages) {
        setIsLoading(false);
      }
    };

    // Handle initial load and route changes
    const handleLoad = () => {
      checkImagesLoaded();
    };

    window.addEventListener('load', handleLoad);

    // Check images after a short delay to account for DOM updates
    const timer = setTimeout(() => {
      checkImagesLoaded();
    }, 500);

    // Fallback: Show content after 10 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <div className="preloader-spinner"></div>
          <p className="preloader-text">Loading VIWEBSYNC...</p>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Preloader;