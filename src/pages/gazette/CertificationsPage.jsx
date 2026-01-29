
import Navbar from "../../components/Navbar";
import PageShell from "../../components/PageShell";
import Footer from "../../components/Footer";
import Certifications from "../../components/Certifications";

export default function CertificationsPage() {
  return (
    <>
      <Navbar />

      <PageShell
        prevPath="/gazette/extras"
        nextPath="/gazette/contact"
        pageLabel="Certifications"
      >
        <Certifications />
      </PageShell>

      <Footer />
    </>
  );
}
