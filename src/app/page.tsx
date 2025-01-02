import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Products from "@/components/Products";
export default function Home() {
  return (
    <main>
      <Banner />
      <Gallery/>
      <Products />
      <Blog/>
    </main>
  );
}
