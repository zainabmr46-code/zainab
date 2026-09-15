import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageShell from "./components/PageShell";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageShell path="/">
              <Home />
            </PageShell>
          }
        />

        <Route
          path="/projects"
          element={
            <PageShell path="/projects">
              <Projects />
            </PageShell>
          }
        />

        <Route
          path="/articles"
          element={
            <PageShell path="/articles">
              <Articles />
            </PageShell>
          }
        />

        <Route
          path="/resume"
          element={
            <PageShell path="/resume">
              <Resume />
            </PageShell>
          }
        />

        <Route
          path="/contact"
          element={
            <PageShell path="/contact">
              <Contact />
            </PageShell>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="min-h-screen flex flex-col bg-ink text-mist font-body">
        <Nav />

        <main className="flex-1">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}