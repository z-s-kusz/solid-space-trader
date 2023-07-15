import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const Main = lazy(() => import("./pages/Main"));
const Startup = lazy(() => import("./pages/Startup"));

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" component={Main} />
        <Route path="/startup" component={Startup} />
      </Routes>
  );
}
