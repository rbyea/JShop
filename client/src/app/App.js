import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/layouts/main";
import Header from "./components/common/Header/Header";
import LoaderDate from "./components/ui/hoc/loaderDate";
import Catalog from "./components/layouts/catalog";
import Card from "./components/layouts/card";
import Footer from "./components/common/Footer/Footer";
import Basket from "./components/layouts/basket";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/layouts/login";
import ProtectedRoute from "./components/ui/protectedRoute";
import PersonalAccount from "./components/layouts/personalAccount";
import NotFound from "./components/layouts/NotFound";

function App() {
  return (
    <LoaderDate>
      <Header />
      <Switch>
        <Route path="/catalog" component={Catalog} />
        <Route path="/basket" component={Basket} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/card/:gameId" component={Card} />
        <ProtectedRoute
          path="/account/:userId?/:edit?"
          component={PersonalAccount}
        />
        <Route exact path="/" component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
      <ToastContainer />
      <Footer />
    </LoaderDate>
  );
}

export default App;
