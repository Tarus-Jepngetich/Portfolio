import Navbar from "../../components/Navbar";
import Extras from "../../components/Extras";
import PageShell from "../../components/PageShell";
import Footer from "../../components/Footer";

export default function ExtrasPage() {
  return (
    <>
      <Navbar />
      <PageShell
        nextPath="/gazette/contact"
        prevPath="/gazette/about"
      
      >
        <Extras />
      </PageShell>
      <Footer />
    </>
  );
}
