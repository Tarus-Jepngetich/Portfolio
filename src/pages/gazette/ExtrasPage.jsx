import Navbar from "../../components/Navbar";
import Extras from "../../components/Extras";
import PageShell from "../../components/PageShell";

export default function ExtrasPage() {
  return (
    <>
      <Navbar />
      <PageShell prevPath="/gazette/about" nextPath="/gazette/contact" pageLabel="Page 3">
        <Extras />
      </PageShell>
    </>
  );
}
