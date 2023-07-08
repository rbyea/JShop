import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/page/main";
import Header from "./components/common/Header/Header";

import LoaderDate from "./components/ui/hoc/loaderDate";
import Catalog from "./components/page/catalog";
import Card from "./components/page/card";
import Footer from "./components/common/Footer/Footer";
import Basket from "./components/page/basket";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import useMockData from "./utils/mockData";

function App() {
  // const { initialData } = useMockData();
  // React.useEffect(() => {
  //   initialData();
  // }, []);

  return (
    <LoaderDate>
      <Header />
      <Switch>
        <Route path="/catalog" component={Catalog} />
        <Route path="/basket" component={Basket} />
        <Route path="/card/:gameId" component={Card} />
        <Route exact path="/" component={Main} />
      </Switch>
      <ToastContainer />
      <Footer />
    </LoaderDate>
  );
}

export default App;
