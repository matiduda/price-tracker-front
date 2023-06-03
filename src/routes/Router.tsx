import { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "../utils/paths";
import Products from "./userHome/Products";
import { Wraper } from "./wraper/Wraper";
import Subscription from "./subscription/Subscription";

const Home = lazy(() => import("./home/Home"));
const UserHome = lazy(() => import("./userHome/UserHome"));

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wraper />}>
          <Route
            path={paths.home}
            element={
              <Suspense fallback={null}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={paths.user}
            element={
              <Suspense fallback={null}>
                <UserHome />
              </Suspense>
            }
          />
          <Route
            path={paths.products}
            element={
              <Suspense fallback={null}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path={paths.subscription}
            element={
              <Suspense fallback={null}>
                <Subscription />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
