import Image from "next/image";

import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/insta.svg";
import linkedin from "../../../public/linkedin.svg";
import github from "../../../public/github.svg";
import website from "../../../public/website.svg";
import other from "../../../public/other.svg";

export function LinkIcon({ type }: { type: string }) {
  const { src, alt } = iconData(type);
  return (
    <Image src={src} alt={alt} height={32} width={32} className="rounded-lg" />
  );
}

function iconData(type: string) {
  switch (type) {
    case "FACEBOOK":
      return { src: facebook, alt: "Facebook logo" };
    case "INSTAGRAM":
      return { src: instagram, alt: "Instagram logo" };
    case "LINKEDIN":
      return { src: linkedin, alt: "LinkedIn logo" };
    case "GITHUB":
      return { src: github, alt: "Github logo" };
    case "WEBSITE":
      return { src: website, alt: "Website Icon" };
    default:
      return { src: other, alt: "Link Icon" };
  }
}
