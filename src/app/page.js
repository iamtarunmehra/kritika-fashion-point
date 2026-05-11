import LuxuryGlowBanner from "./home-page/Banner";
import NewArrivals from "./home-page/NewArrivals";
import ShopByCategory from "./home-page/ShopByCategory";
import TopSelling from "./home-page/TopSelling";
import WeddingShopping from "./home-page/WeddingShopping";

export default function Home() {
  return (
    <>
      {/* <Slider /> */}
      <LuxuryGlowBanner />
      <NewArrivals />
      {/* <WeddingShopping /> */}
      <ShopByCategory />
      <TopSelling />
    </>
  );
}
