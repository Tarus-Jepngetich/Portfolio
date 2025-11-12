import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Journal routes
import JournalLayout from "./Journal/JournalLayout";
import GalleryHome from "./Journal/components/GalleryHome";
import CategoryPage from "./Journal/components/CategoryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/journal" element={<JournalLayout />}>
        <Route index element={<GalleryHome />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}
