import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageEventListener from "./pages/PageEventListener/PageEventListener";

import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import Footer from "./sections/Footer/Footer";
import Project from "./features/Project/Project";

import PageLoader from "./pages/PageLoader/PageLoader";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import GoogleAnalytics from "./pages/GoogleAnalytics/GoogleAnalytics";
import PageTitleListener from "./pages/PageTitleListener/PageTitleListener";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Categories = lazy(() => import("./pages/Categories/Categories"));
const Category = lazy(() => import("./features/Category/Category"));

function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics>
        <PageTitleListener>
          <PageEventListener>
            <Header />
            <Main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contacts />} />
                  <Route path="/categories" element={<Categories />}>
                    <Route index element={<Navigate replace to="all" />} />
                    <Route
                      path="/categories/:categoryType"
                      element={<Category />}
                    />
                  </Route>
                  <Route
                    path="/categories/:categoryType/:projectId"
                    element={<Project />}
                  />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </Main>
            <Footer />
          </PageEventListener>
        </PageTitleListener>
      </GoogleAnalytics>
    </BrowserRouter>
  );
}

export default App;
