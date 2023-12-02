import React, { useEffect, useState } from "react";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";

export const NavBar = () => {
  //State to track the active link and scroll state
  const [activeLink, setActiveLink] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  //Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //Adjust the margin Top value as needed
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  //Function to determine the active section while scrolling
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          //Set the active link based on the section ID
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      //Call the function to determine the active section while scrolling
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    //Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="row">
          <div className="logo">Logo</div>
          <ul className="menu-bar">
            {sectionIds.map((sectionId, i) => (
              <li key={i} onClick={() => scrollToSection(sectionId)}>
                <Link
                  to="/"
                  className={activeLink === sectionId ? "active" : ""}
                >
                  {sectionId}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
