//import React from 'react'
import logoDH from "../../../public/images/DH.png";
import fb from "../../../public/images/5282541_fb_social media_facebook_facebook logo_social network_icon.svg";
import tiktok from "../../../public/images/7024783_tiktok_social media_icon.svg";
import ig from "../../../public/images/8679433_instagram_fill_icon.svg";
import whatsapp from "../../../public/images/8679332_whatsapp_icon.svg";

import "./footer.css";
import { useContextGlobal } from "../../Context/global.context";

const Footer = () => {
  const { theme } = useContextGlobal();
  return (
    <footer className={`footer-${theme}`}>
      <img src={logoDH} alt="DH-logo" className="logo-dh" />
      <div className="div-logos-rs">
        <img src={fb} alt="facebook" className="logo-fb-rs" />
        <img src={tiktok} alt="tiktok" className="logo-tiktok-rs" />
        <img src={ig} alt="instagram" className="logo-ig-rs" />
        <img src={whatsapp} alt="whatsapp" className="logo-wpp-rs" />
      </div>
    </footer>
  );
};

export default Footer;
