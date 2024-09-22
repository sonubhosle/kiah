import React, { useState, useEffect } from 'react';
import '../../Styles/Navigation.css';
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";

const nav_items = [
  {
    icon: <SlLocationPin />,
    heading: "Location",
    text: "16/1, Ratan Mansion Building, 2nd Khetwadi Lane, Mumbai, Maharashtra - 400004"
  },
  {
    icon: <CiMobile4 />,
    heading: "CALL US",
    text: "(+91) 8850414439"
  },
  {
    icon: <MdOutlineWatchLater />,
    heading: "Hours",
    text: "Mon - Sat: 10am - 6:30pm"
  }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="navigation-container">
      {/* Top Header */}
      <div className={`top-header ${isScrolled ? 'hidden' : ''}`}>
        <div className="top-left">
          <img src="https://kiahmetallurgical.com/images/logo-final.jpg" alt="" />
        </div>
      </div>

      <div className={`bottom-header ${isScrolled ? 'sticky' : ''}`}>
        <div className={`logo ${isScrolled ? 'show-logo' : 'hide-logo'}`}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <nav className="nav-links">
          <Link>Home</Link>
          <Link>About
            <div className="menu-items">
              <Link>About Us</Link>
              <Link>Make In India</Link>
              <Link>Certificates</Link>
            </div>
          </Link>
          <Link>Services
            <div className="menu-items">
              <Link>Market Sector</Link>
              <Link>Exported Industries</Link>
              <Link>Exported Countries</Link>
            </div>
          </Link>
          <Link>Product
            <div className="menu-items aside">
              <div className="left-items">
                <Link>All Products</Link>
                <Link>Values</Link>
                <Link>Buttweld Fittings</Link>
                <Link>Bright Bar</Link>
                <Link>Fasteners</Link>
                <Link>Ferrule Instrumentation...</Link>

              </div>
              <div className="left-items">
                <Link>Forged Fittings</Link>
                <Link>Pipes Flanges</Link>
                <Link>Plates & Sheets</Link>
                <Link>Tube Fittings</Link>
                <Link>Pipes & Tubes</Link>
                <Link>Fabrication Works</Link>
              </div>
            </div>
          </Link>
          <Link>Gallery
            <div className="menu-items">
              <Link>Photos</Link>
              <Link>Videos</Link>
              <Link>Exhibitions</Link>
            </div>
          </Link>
          <Link>Blog</Link>
          <Link>Contact Us</Link>
          <Link>E catalogue</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
{/* <div className="top-right">
{nav_items.map((item, index) => (
  <div className="sect" key={index}>
    <div className="icon">{item.icon}</div>
    <div className="details">
      <h5>{item.heading}</h5>
      <p>{item.text}</p>
    </div>
  </div>
))}
</div> */}