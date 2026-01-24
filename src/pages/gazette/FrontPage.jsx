import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import PageShell from "../../components/PageShell";

export default function FrontPage() {
  return (
    <>
      <Navbar />
      <PageShell nextPath="/gazette/about" pageLabel="Front Page">
        <Hero />
      </PageShell>
    </>
  );
}
