import React from "react";
import { Hero } from "../component/sections/hero";
import { About } from "../component/sections/about";
import { Testimonial } from "../component/sections/testimonial";
import { Contact } from "../component/sections/contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonial />
      <Contact />
    </>
  );
};
