import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import PageShell from "../../components/PageShell";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageShell
        nextPath="/gazette"       // loop to front
        prevPath="/gazette/extras"
        
      >
        <Contact />
      </PageShell>
      <Footer />
    </>
  );
}
