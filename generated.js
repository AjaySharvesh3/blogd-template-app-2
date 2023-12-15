import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Art = () => {
  return (
    <>
      <div
        className={`bg-white text-black h-screen ${inter.className} flex flex-col overflow-auto`}
      >
        <Navbar />
        <Footer />
      </div>
    </>
  )
}

export default Art;