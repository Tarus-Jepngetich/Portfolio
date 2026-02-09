import Navbar from "../../components/Navbar";
import About from "../../components/About";
import PageShell from "../../components/PageShell";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageShell
        nextPath="/gazette/experiencePractice"
        prevPath="/gazette"
        
      >
        <About />
      </PageShell>
      <Footer />
    </>
  );
}
