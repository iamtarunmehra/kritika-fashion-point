import ShopByCategory from "./home-page/ShopByCategory";
import Slider from "./home-page/Slider";
import TopSelling from "./home-page/TopSelling";
import WeddingShopping from "./home-page/WeddingShopping";

export default function Home() {
  return (
    <>
      {/* <Slider /> */}
            <WeddingShopping/>

      <ShopByCategory />
      <TopSelling />
    </>
  );
}
