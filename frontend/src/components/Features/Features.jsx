import React from 'react';
import './Features.css';

const Features = () => (
  <section className="features">
    <div className="feature-item">
      <img src="path/to/peak-performance.jpg" alt="Peak Performance" />
      <h3>Peak Engine Performance</h3>
      <p>Ensure your engine runs smoothly.</p>
    </div>
    <div className="feature-item">
      <img src="path/to/maximum-protection.jpg" alt="Maximum Protection" />
      <h3>Maximum Protection</h3>
      <p>Protect your engine with our oil.</p>
    </div>
    <div className="feature-item">
      <img src="path/to/heat-control.jpg" alt="Optimal Heat Control" />
      <h3>Optimal Heat Control</h3>
      <p>Maintain ideal engine temperature.</p>
    </div>
  </section>
);

export default Features;
