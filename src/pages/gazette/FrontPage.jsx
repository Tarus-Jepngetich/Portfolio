import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import PageShell from "../../components/PageShell";
import Footer from "../../components/Footer";


export default function FrontPage() {
  return (
    <>
      <Navbar />
      <PageShell nextPath="/gazette/about" >
        <Hero />
      </PageShell>
      <Footer />
    </>
  );
}
