import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/page/main/main";
import Header from "./components/common/header/header";

import LoaderDate from "./components/ui/hoc/loaderDate";
import Catalog from "./components/page/catalog/catalog";
import Card from "./components/page/card/card";
import Footer from "./components/common/footer/footer";
import Basket from "./components/page/basket/basket";
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

      <Footer />
    </LoaderDate>
  );
}

export default App;
