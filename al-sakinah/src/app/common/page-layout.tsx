import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./button";
import HorizontalLine from "./horizontal-line";

const QUICK_DONATION_LINK =
  "https://www.paypal.com/donate/?hosted_button_id=26A2M76SX392C";
interface OwnProps {
  children: React.ReactElement;
}

interface Route {
  route: string;
  label: string;
}
const routes: Route[] = [
  {
    route: "/home",
    label: "Home",
  },
  {
    route: "/story",
    label: "About Us",
  },
  {
    route: "/events",
    label: "Events",
  },
  {
    route: "/resources",
    label: "Resources",
  },
  // {
  //   route: "/contact",
  //   label: "Contact Us",
  // },
];
const NavigationLargeScreen: React.FC<{}> = ({}) => {
  return (
    <div className="navbar hidden lg:flex">
      <div className="navbar-start">
        <Link href="/home">Al Sakinah Logo</Link>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map(({ route, label }, index) => (
            <li key={index}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex">
        <div className="w-48">
          <Button text="Quick Donate" link={QUICK_DONATION_LINK} />
        </div>
      </div>
    </div>
  );
};
const NavigationSmallScreen: React.FC<{}> = ({}) => {
  return (
    <div className="navbar flex lg:hidden justify-between">
      <div className="navbar-center">
        <Link href="/home">Al Sakinah Logo</Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {routes.map(({ route, label }, index) => (
              <li key={index}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
            <Button text="Donate" link={QUICK_DONATION_LINK} />
          </ul>
        </div>
      </div>
    </div>
  );
};

const Navigation: React.FC<{}> = ({}) => {
  return (
    <nav
      className="shadow-md"
      style={{
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <NavigationSmallScreen />
        <NavigationLargeScreen />
      </div>
    </nav>
  );
};

interface FooterLink {
  description: string;
  link: string;
}

const footerLinks: FooterLink[] = [
  {
    description: "Open Feedback Form",
    link: "",
  },
  {
    description: "Quick Donate",
    link: QUICK_DONATION_LINK,
  },
  {
    description: "Resources",
    link: "/resources",
  },
  {
    description: "Events",
    link: "/events",
  },
  {
    description: "About Us",
    link: "/story",
  },
];

const socials: (FooterLink & { imgUrl: string; dimension: number })[] = [
  {
    description: "Instagram",
    link: "https://www.instagram.com/_alsakinah_",
    imgUrl: "./instagram.svg",
    dimension: 20,
  },
  {
    description: "Email",
    link: "mailto:alsakinah.kw@gmail.com",
    imgUrl: "./envelope.svg",
    dimension: 23,
  },
];
const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className="px-1 py-2 w-full bg-white">
      <HorizontalLine />
      <div className="flex justify-center gap-4">
        {socials.map(({ description, imgUrl, link, dimension }, index) => (
          <div key={index} className="flex justify-center">
            <a
              href={link}
              className="flex justify-center rounded-full p-2 bg-[#CF9C4F] w-8 h-8"
            >
              <Image
                src={imgUrl}
                alt={description}
                width={dimension}
                height={dimension}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="text-center flex flex-wrap justify-center m-2 font-light">
        {footerLinks.map(({ description, link }, index) => (
          <div key={index}>
            <a href={link} target="blank">
              {description}
            </a>
            {index === footerLinks.length - 1 ? null : (
              <span className="mx-2">&#183;</span>
            )}
          </div>
        ))}
      </div>
      <div className="text-center font-semibold">
        Copyright © {new Date().getFullYear()} - All right reserved by
        Al-Sakinah Institute
      </div>
    </footer>
  );
};

const PageLayoutComponent: React.FC<OwnProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div
        style={{
          paddingTop: "68px",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayoutComponent;
