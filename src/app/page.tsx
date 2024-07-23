import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-10">
        <Content />
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}
