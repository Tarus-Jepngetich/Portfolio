import Navbar from "../../components/Navbar";
import ExperiencePractice from "../../components/ExperiencePractice";
import PageShell from "../../components/PageShell";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageShell
        nextPath="/gazette/Certifications"       // loop to front
        prevPath="/gazette/About"
        
      >
        <ExperiencePractice />
      </PageShell>
      <Footer />
    </>
  );
}