import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="https://logo.com/image-cdn/images/kts928pd/production/28563b4f836c667b30238865f796aeb03ae702db-358x357.png?w=1080&q=72"
        alt="logo-not-loaded"
        width={width}
      />
    </div>
  );
}

export default Logo;
