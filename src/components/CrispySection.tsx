'use client';

import Image from 'next/image';

const CrispySection = () => (
  <section className="container-fluid px-4 mb-4">
    <h2 className="section-title">Crispy, Golden Goodness</h2>
    <div className="row g-3 justify-content-center">
      <div className="col-12 col-md-5">
        <div className="food-card">
          <Image src="/nachos.png" alt="Loaded Nachos" width={600} height={260} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
          <div className="food-card-label">Loaded Nachos</div>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="food-card">
          <Image src="/fries.png" alt="Seasoned Fries" width={600} height={260} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
          <div className="food-card-label">Seasoned Fries</div>
        </div>
      </div>
    </div>
  </section>
);

export default CrispySection;