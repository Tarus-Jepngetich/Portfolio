import Navbar from "../../components/Navbar";
import About from "../../components/About";
import PageShell from "../../components/PageShell";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageShell prevPath="/gazette" nextPath="/gazette/extras" pageLabel="Page 2">
        <About />
      </PageShell>
    </>
  );
}
