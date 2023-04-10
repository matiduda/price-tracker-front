import { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "../utils/paths";
import { Wraper } from "./wraper/Wraper";

const Home = lazy(() => import("./home/Home"));
const UserHome = lazy(() => import("./userHome/Products"));

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
