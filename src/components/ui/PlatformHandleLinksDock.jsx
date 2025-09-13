import React from "react";
import { FloatingDock } from "./FloatingDock.jsx";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandTelegram,
  IconMailFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function HomeSectionProjects() {
  const links = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "https://github.com/imharry18",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white" />,
      href: "https://x.com/imharrry_18",
    },
    {
      title: "Gmail",
      icon: <IconMailFilled className="h-full w-full text-white" />,
      href: "mailto:iharish0018@gmail.com",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-white" />,
      href: "https://instagram.com/harish_1.8",
    },
    {
      title: "WhatsApp",
      icon: <IconBrandWhatsapp className="h-full w-full text-white" />,
      href: "https://wa.me/917780988037",
    },
    {
      title: "Telegram",
      icon: <IconBrandTelegram className="h-full w-full text-white" />,
      href: "https://t.me/imharry18",
    },
      {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-white" />,
    href: "https://www.linkedin.com/in/imharry18/",
  }
  ];

  return (
    <div className="flex  items-center justify-center w-full p-2">
      <FloatingDock
        mobileClassName="translate-y-10"
        items={links.map((item) => ({
          ...item,
          icon: (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              {item.icon}
            </a>
          ),
        }))}
        // New prop for mobile horizontal expansion
        mobileExpandHorizontal
      />
    </div>
  );
}

export default HomeSectionProjects;
