import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import React from "react";
import HomePage from "./page/home/Home.tsx";
import AboutUs from "./page/AboutUs/AboutUs.tsx";
import Ecosystem from "./page/Ecosystem/Ecosystem.tsx";
import News from "./page/News/News.tsx";
import NewsDetail from "./page/NewsDetail/NewsDetail.tsx";
import Recruitment from "./page/Recruitment/Recruitment.tsx";
import Contact from "./page/Contact/Contact.tsx";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility of the arrow button when scrolling
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll the page to the top when arrow is clicked
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <div>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/ve-chung-toi",
          element: <AboutUs />,
        },
        {
          path: "/he-sinh-thai",
          element: <Ecosystem />,
        },
        {
          path: "/tin-tuc",
          element: <News />,
        },
        {
          path: "/tin-tuc-chi-tiet",
          element: <NewsDetail />,
        },
        {
          path: "/tuyen-dung",
          element: <Recruitment />,
        },
        {
          path: "/lien-he",
          element: <Contact />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
