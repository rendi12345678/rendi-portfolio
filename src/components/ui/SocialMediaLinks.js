import React from "react";
import FacebookSvg from "./FacebookSvg";
import InstagramSvg from "./InstagramSvg";
import LinkedinSvg from "./LinkedinSvg";
import SvgWrapper from "./SvgWrapper";
import TiktokSvg from "./TiktokSvg";

const socialMediaLinks = [
  {
    type: "instagram",
    url: "https://www.instagram.com/rendi_v.s/",
    svgComponent: <InstagramSvg />,
  },
  {
    type: "facebook",
    url: "https://web.facebook.com/profile.php?id=100084697508215",
    svgComponent: <FacebookSvg />,
  },
  {
    type: "tiktok",
    url: "https://www.tiktok.com/@rendivs123?is_from_webapp=1&sender_device=pc",
    svgComponent: <TiktokSvg />,
  },
  {
    type: "linkedin",
    url: "https://linkedin.com/in/rendi-virgantara-setiawan-ab24382a9",
    svgComponent: <LinkedinSvg />,
  },
];

function SocialMediaLinks() {
  return (
    <div className="social-media-links reveal">
      {socialMediaLinks.map(({ url, svgComponent, type }, index) => (
        <SvgWrapper key={index} url={url} type={type}>
          {svgComponent}
        </SvgWrapper>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
