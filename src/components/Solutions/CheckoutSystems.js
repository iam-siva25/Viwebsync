import React from 'react';
import img1 from "../../assets/CheckoutSystem.png"; // Replace with actual image path
import "../../styles/Solutions.css"; // Same CSS for consistent styling

const CheckoutSystemPage = () => {
  return (
    <div className="solution-page-container">
      <div className="solution-header">
        <h2 className="solution-title">
          <span className="highlight">Checkout</span> Systems
        </h2>
        <img src={img1} alt="Checkout Systems" className="solution-image" />
      </div>
      <div className="solution-content">
        <p className="solution-intro">
          <strong>Checkout Systems</strong> are advanced, automated solutions designed to streamline the process of scanning, processing, and completing retail transactions. Widely used in the <strong>retail and commerce</strong> industries, these systems integrate hardware and software to enhance efficiency, reduce errors, and improve customer experience at point-of-sale (POS) terminals.
        </p>

        <div className="section-divider"></div>

        <h3>Key Features and Functionalities</h3>
        <ul className="solution-features">
          <li>
            <strong>Automated Scanning:</strong> Utilizes barcode scanners, RFID readers, or computer vision to quickly identify products and retrieve pricing data.
          </li>
          <li>
            <strong>Payment Integration:</strong> Supports multiple payment methods, including contactless cards, mobile payments, and digital wallets, ensuring seamless transactions.
          </li>
          <li>
            <strong>Real-Time Inventory Tracking:</strong> Syncs with inventory management systems to update stock levels instantly, reducing overselling and stockouts.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Features intuitive touchscreens and software optimized for speed, minimizing training time for staff and enhancing customer interaction.
          </li>
        </ul>

        <div className="section-divider"></div>

        <h3>Applications and Benefits</h3>
        <ul className="solution-benefits">
          <li>
            <strong>Increased Efficiency:</strong> Speeds up transaction times, reducing customer wait times and improving throughput at checkout counters.
          </li>
          <li>
            <strong>Error Reduction:</strong> Automates price calculations and inventory updates, minimizing human errors in pricing or stock management.
          </li>
          <li>
            <strong>Enhanced Customer Experience:</strong> Offers fast, reliable, and flexible payment options, boosting customer satisfaction and loyalty.
          </li>
          <li>
            <strong>Scalable Deployment:</strong> Suitable for small retail stores to large supermarket chains, with modular designs for easy upgrades and integration.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutSystemPage;