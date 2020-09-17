import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        Created by{" "}
        <a href="http://patrickvhessman.com/" target="_blank" rel="noopener noreferrer">
          Patrick Hessman
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/PatrickVHessman/wild-magic-surge"
          target="_blank" rel="noopener noreferrer"
        >
          View Source
        </a>{" "}
        | Stat block styling used with permission from{" "}
        <a href="https://homebrewery.naturalcrit.com/" rel="noopener noreferrer" target="_blank">
          The Homebrewery.
        </a>
      </footer>
    </div>
  );
};

export default Footer;
