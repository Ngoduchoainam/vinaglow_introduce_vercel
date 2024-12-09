import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import React from "react";
import HomePage from "./page/home/Home.tsx";
import AboutUs from "./page/AboutUs/AboutUs.tsx";
import Ecosystem from "./page/Ecosystem/Ecosystem.tsx";
import News from "./page/News/News.tsx";
import NewsDetail from "./page/NewsDetail/NewsDetail.tsx";
import Recruitment from "./page/Recruitment/Recruitment.tsx";
import Contact from "./page/Contact/Contact.tsx";
import RecruimentDetail from "./page/RecruimentDetail/RecruimentDetail.tsx";
import ApiProtocol from "./api/ApiProtocol.ts";
import ApiUrl from "./api/ApiUrl.ts";
import { ConfigObject } from "./Entities/ConfigObject.ts";
import { ConfigObjectContext } from "./ConfigObjectContext.tsx";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {

    const [obj, setObj] = useState(new ConfigObject());

    const GetConfig = async () => {
      try {
        let res = await ApiProtocol.callAPI(ApiUrl.GetConfig, undefined, "GET");

        if (res) {
          let result = await res?.json();
          let obj = result.data;

          setObj(obj);

        }
      } catch (error) {

      }
    }

    useEffect(() => {
      GetConfig()
    }, []);


    return (
      <div>
        <QueryClientProvider client={queryClient}>
          <ConfigObjectContext.Provider value={obj}>
            <Outlet />
          </ConfigObjectContext.Provider>
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
          path: "/tin-tuc-chi-tiet/:url",
          element: <NewsDetail />,
        },
        {
          path: "/tuyen-dung",
          element: <Recruitment />,
        },
        {
          path: "/lien-he",
          element: <Contact />,
        },
        {
          path: "/chi-tiet-tuyen-dung/:url",
          element: <RecruimentDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
