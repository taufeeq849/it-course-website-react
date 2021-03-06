import React from "react";

import Header from "../partials/Header";
import HeroBlog from "../partials/HeroBlog";
import FeaturedPosts from "../partials/FeaturedPosts";
import Instructors from "../partials/Instructors";
import Footer from "../partials/Footer";

function InstructorsSection() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroBlog />
        <FeaturedPosts />
        <Instructors />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default InstructorsSection;
