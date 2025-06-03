import "./styles.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

function SocialMedia() {
  return (
    <>
      <div class="social-media">
        <a
          class="btn-b btn-icon btn-dark"
          data-tooltip="LinkedIn"
          href="https://linkedin.com/in/nabeel-s-ali"
        >
          <Icon icon="mdi:linkedin" />
        </a>
        {/* <a
                  class="btn-b btn-icon btn-dark"
                  data-tooltip="Pinterest"
                  href="https://www.pinterest.co.uk/L99B4N/"
                >
                  <iconify-icon
                    
                    icon="jam:pinterest"
                  ></iconify-icon>
                </a> */}
        <a
          class="btn-b btn-icon btn-dark"
          data-tooltip="GitHub"
          href="https://github.com/nabzali"
        >
          <Icon icon="mdi:github" />
        </a>
        <a
          class="btn-b btn-icon btn-dark"
          data-tooltip="Leetcode"
          href="https://leetcode.com/nabz99/"
        >
          <Icon icon="simple-icons:leetcode" />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
