import { Routes, Route } from "react-router-dom";

// Gazette pages
import FrontPage from "./pages/gazette/FrontPage";
import AboutPage from "./pages/gazette/AboutPage";
import ExtrasPage from "./pages/gazette/ExtrasPage";
import ContactPage from "./pages/gazette/ContactPage";

// Cursor (global)
import InkCursor from "./components/InkCursor";

// Journal routes
import JournalLayout from "./Journal/JournalLayout";
import GalleryHome from "./Journal/components/GalleryHome";
import CategoryPage from "./Journal/components/CategoryPage";

// Mobile scroll version (optional to keep)
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        {/* Mobile scroll version */}
        <Route path="/" element={<FrontPage />} />

        {/* Gazette pages */}
        <Route path="/gazette" element={<FrontPage />} />
        <Route path="/gazette/about" element={<AboutPage />} />
        <Route path="/gazette/extras" element={<ExtrasPage />} />
        <Route path="/gazette/contact" element={<ContactPage />} />

        {/* Journal */}
        <Route path="/journal" element={<JournalLayout />}>
          <Route index element={<GalleryHome />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
        </Route>
      </Routes>

      {/* ✅ Mount once globally (don’t put inside a page) */}
      <InkCursor />
    </>
  );
}
