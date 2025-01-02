import { School } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Branding Section */}
          <div>
            <div className="flex justify-center items-center gap-3 text-teal-300 sm:justify-start">
            <School size={"30"} />
              <h2 className="text-3xl font-semibold">Learnify</h2>
            </div>
            <p className="max-w-md mx-auto mt-6  leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
              Learnify is your go-to platform for creating, managing, and
              accessing online courses. It simplifies the learning process for
              students and streamlines course management for educators.
            </p>
            {/* Social Media Links */}
            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
              {[
                { platform: "Facebook", href: "/" },
                { platform: "Instagram", href: "/" },
                { platform: "Twitter", href: "/" },
                { platform: "GitHub", href: "/" },
                { platform: "Dribbble", href: "/" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <span className="sr-only">{social.platform}</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            {[
              {
                title: "About Us",
                links: [
                  { name: "Company History", href: "/" },
                  { name: "Meet the Team", href: "/" },
                  { name: "Employee Handbook", href: "/" },
                  { name: "Careers", href: "/" },
                ],
              },
              {
                title: "Our Services",
                links: [
                  { name: "Web Development", href: "/" },
                  { name: "Web Design", href: "/" },
                  { name: "Marketing", href: "/" },
                  { name: "Google Ads", href: "/" },
                ],
              },
              {
                title: "Helpful Links",
                links: [
                  { name: "FAQs", href: "/" },
                  { name: "Support", href: "/" },
                  { name: "Live Chat", href: "/" },
                ],
              },
              {
                title: "Contact Us",
                links: [
                  { name: "Email", href: "/", icon: "M3 8l7.89 5.26..." },
                  { name: "Phone", href: "/", icon: "M5` re " },
                  ,
                ],
              },
              //   {
              //     title: "Contact Us",
              //     links: [
              //       { name: "Email", href: "/", icon: "M3 8l7.89 5.26..." },
              //       { name: "Phone", href: "/", icon: "M13.94 3.33..." },
              //       { name: "Address", href: "/", icon: "M3 8.5v7.75..." },
              //     ],
              //   },
            ].map((section, index) => (
              <div key={index}>
                <p className="font-medium text-white">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-gray-300 transition hover:opacity-75 flex items-center"
                      >
                        {link.icon && (
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d={link.icon} />
                          </svg>
                        )}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              &copy; 2024 Your Company Name. All rights reserved.
            </p>
            <div className="flex justify-center mt-4 space-x-4 sm:mt-0 sm:justify-end">
              <a href="/" className="text-gray-400 transition hover:opacity-75">
                Terms & Conditions
              </a>
              <a href="/" className="text-gray-400 transition hover:opacity-75">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
