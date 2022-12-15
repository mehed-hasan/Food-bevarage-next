import React from "react";
import CatSection from "../components/Home/CatSection";
import HeroSection from "../components/Home/HeroSection";
import MenuItems from "../components/Home/MenuItems";
import NewsLetter from "../components/Home/NewsLetter";
import PopularSection from "../components/Home/PopularSection";
import SocialSection from "../components/Home/SocialSection";

export default function Home() {


  return (
    <>
      <HeroSection />
      <CatSection />
      <PopularSection />
      <NewsLetter />
      <MenuItems />
      <SocialSection />
    </>
  );
}
