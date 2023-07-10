import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        height="18"
        viewBox="0 0 596 257"
        fill="#373737"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50.312 0H40.9436L0 10.6262V252.948H50.312V183.552L105.135 252.948H170.367L100.624 167.591L164.815 86.7448H100.624L50.312 151.63V0Z" />
        <path d="M330.701 180.082C331.742 173.49 332.436 166.897 332.436 155.1C332.436 119.708 314.046 82.2341 258.876 82.2341C203.36 82.2341 175.948 123.872 175.948 170.02C175.948 229.353 206.482 257.112 262.346 257.112C281.777 257.112 303.637 253.642 326.19 246.702V203.677C311.27 209.228 291.492 214.086 275.531 214.086C247.426 214.086 230.771 208.534 230.077 180.082H330.701ZM258.876 120.402C274.143 120.402 281.083 131.852 281.083 146.425C281.083 147.119 281.083 148.16 281.083 148.854H230.424C232.506 131.505 241.18 120.402 258.876 120.402Z" />
        <path d="M510.29 180.082C511.331 173.49 512.025 166.897 512.025 155.1C512.025 119.708 493.635 82.2341 438.465 82.2341C382.949 82.2341 355.537 123.872 355.537 170.02C355.537 229.353 386.071 257.112 441.935 257.112C461.366 257.112 483.226 253.642 505.779 246.702V203.677C490.859 209.228 471.081 214.086 455.12 214.086C427.015 214.086 410.36 208.534 409.666 180.082H510.29ZM438.465 120.402C453.732 120.402 460.672 131.852 460.672 146.425C460.672 147.119 460.672 148.16 460.672 148.854H410.013C412.095 131.505 420.769 120.402 438.465 120.402Z" />
        <path d="M545.882 10.6262V252.948H596.194V0H586.479L545.882 10.6262Z" />
      </svg>
    </>
  ),
  project: {},
  footer: {
    text: <span>© Planko Ltd {new Date().getFullYear()}</span>,
  },
  editLink: {
    component: () => null,
  },
  feedback: {
    useLink: () => `mailto:help@keel.so`,
  },
  sidebar: {
    // Makes collapsible menus collapsed by default
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Keel",
        description:
          frontMatter.description ||
          "Keel solves the backend puzzle so you can focus on customers.",
      };
    }
  },
  head: null,
};

export default config;
