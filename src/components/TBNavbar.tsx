'use client';

import Image from 'next/image';

const TBNavbar = () => (
  <nav className="tb-navbar">
    <a className="tb-brand" href="#">
      <Image src="/tacobell-logo.png" alt="Taco Bell" height={42} width={120} style={{ objectFit: 'contain' }} />
    </a>
    <ul className="tb-nav-links">
      <li><a href="#">Menu</a></li>
      <li><a href="#">Delivery</a></li>
      <li><a href="#">Rewards</a></li>
      <li><a href="#">Gift Cards</a></li>
      <li className="tb-dropdown">
        <a href="#">
          Purpose{' '}
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ marginLeft: '3px' }}>
            <path d="M1 1L5 5L9 1" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </a>
        <div className="tb-dropdown-menu">
          <a href="#">Sustainability</a>
          <a href="#">Giving Back</a>
          <a href="#">Our Story</a>
        </div>
      </li>
    </ul>
    <div className="tb-nav-right">
      <div className="tb-pickup">
        ORDERING PICKUP?
        <span>We&apos;ll need your location</span>
      </div>
      <a href="#" className="tb-btn-order">START YOUR ORDER</a>
      <div className="tb-icon-divider"></div>
      <div className="tb-icon-group">
        <a href="#" title="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </a>
        <a href="#" title="Account">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </a>
        <span style={{ width: '1px', height: '22px', background: '#ccc', display: 'inline-block' }}></span>
        <a href="#" title="Rewards" style={{ color: '#702082' }}>
          <svg width="18" height="20" viewBox="0 0 24 28" fill="currentColor">
            <path d="M12 2C12 2 6 8 6 14a6 6 0 0012 0c0-3-1.5-5.5-3-7 0 2-1 3.5-2 4.5C13 9.5 12 6 12 2z" />
          </svg>
        </a>
        <a href="#" title="Bag">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
);

export default TBNavbar;