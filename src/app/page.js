import LuxuryGlowBanner from "./home-page/Banner";
import CategoryWiseSections from "./home-page/CategoryWiseSection";
import Faq from "./home-page/Faq";
import NewArrivals from "./home-page/NewArrivals";
import ShopByCategory from "./home-page/ShopByCategory";
import TopSelling from "./home-page/TopSelling";
import WeddingShopping from "./home-page/WeddingShopping";

export default function Home() {
  return (
    <div className="bg-black w-screen overflow-x-hidden ">
      <LuxuryGlowBanner />
      <NewArrivals />
      <ShopByCategory />
      <TopSelling />
      <CategoryWiseSections />
      <CategoryWiseSections />
      <CategoryWiseSections />
      <CategoryWiseSections />
      <CategoryWiseSections />
      <CategoryWiseSections />

      <Faq />
    </div>
  );
}
