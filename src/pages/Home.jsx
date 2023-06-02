import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/b1.jpg";
import Banner2 from "../img/banner/b2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Elevate. Excel. Succeed"
        text=" Go the Extra Mile with our Premier Selection of Sports Footwear"
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Elevate. Excel. Succeed"
        text="Top selected sports shoes for you "
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
