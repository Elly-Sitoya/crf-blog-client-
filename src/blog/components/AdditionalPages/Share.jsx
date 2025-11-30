import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

function Share({ link }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <FacebookShareButton url={link}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={link}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={link}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={link}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}

export default Share;
