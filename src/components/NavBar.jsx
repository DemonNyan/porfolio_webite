import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function PortfolioNavbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Navbar
      fluid
      className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md px-4 py-3"
    >
      <NavbarBrand href="#home" onClick={() => setActiveTab("Home")}>
        <span className="self-center whitespace-nowrap text-2xl font-black tracking-tight text-white">
          NYAN<span className="text-blue-600">.</span>
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <NavbarToggle />
      </div>

      <NavbarCollapse className="md:ml-auto">
        {navLinks.map((link) => (
          <NavbarLink
            key={link.name}
            href={link.href}
            // ၂။ အခုရောက်နေတဲ့ tab ဖြစ်ရင် active={true} ဖြစ်မယ်
            active={activeTab === link.name}
            onClick={() => setActiveTab(link.name)}
            className={`text-base font-bold py-3 md:py-0 transition-all duration-300 
              ${
                activeTab === link.name
                  ? "text-blue-600 md:border-b-2 md:border-blue-600"
                  : "text-gray-600 hover:text-blue-400"
              }`}
          >
            {link.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
