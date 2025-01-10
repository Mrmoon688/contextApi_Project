import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BlogArticlesPage from "./Pages/BlogArticlesPage";
import CommunityPage from "./Pages/CommunityPage";
import EducationalResourcesPage from "./Pages/EducationalResourcesPage";
import NewsAndEventsPage from "./Pages/NewsAndEventsPage";
import TeachingsBeliefPage from "./Pages/TeachingsBeliefPage";
import WorshipPracticsPage from "./Pages/WorshipPracticsPage";
import NotFoundPage from "./Pages/NotFoundPage";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs" element={<BlogArticlesPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/education" element={<EducationalResourcesPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<NewsAndEventsPage />} />
      <Route path="/teaching" element={<TeachingsBeliefPage />} />
      <Route path="/worship" element={<WorshipPracticsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
