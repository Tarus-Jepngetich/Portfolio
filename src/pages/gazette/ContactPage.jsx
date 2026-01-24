import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import PageShell from "../../components/PageShell";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageShell prevPath="/gazette/extras" nextPath="/gazette" pageLabel="Page 4">
        <Contact />
      </PageShell>
    </>
  );
}
