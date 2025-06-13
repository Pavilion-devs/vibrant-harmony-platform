import { Router, Route, Switch } from "wouter";
import Index from "../pages/Index";
import AboutUs from "../pages/AboutUs";
import Industries from "../pages/Industries";
import ProductsServices from "../pages/ProductsServices";
import InvestorRelations from "../pages/InvestorRelations";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import VaraFoods from "../pages/industries/VaraFoods";
import LabSupplies from "../pages/industries/LabSupplies";
import VaraRealEstate from "../pages/industries/VaraRealEstate";
import VaraOilGas from "../pages/industries/VaraOilGas";
import NotFound from "../pages/NotFound";
import DevLogout from "./DevLogout";

interface MainAppProps {
  onLogout: () => void;
}

const MainApp = ({ onLogout }: MainAppProps) => {
  return (
    <>
      <DevLogout onLogout={onLogout} />
      <Router>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/about" component={AboutUs} />
          <Route path="/industries" component={Industries} />
          <Route path="/industries/foods" component={VaraFoods} />
          <Route path="/industries/lab-supplies" component={LabSupplies} />
          <Route path="/industries/real-estate" component={VaraRealEstate} />
          <Route path="/industries/oil-gas" component={VaraOilGas} />
          <Route path="/products" component={ProductsServices} />
          <Route path="/investors" component={InvestorRelations} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default MainApp; 