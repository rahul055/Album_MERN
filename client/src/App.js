import React, { lazy, Suspense } from "react";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
