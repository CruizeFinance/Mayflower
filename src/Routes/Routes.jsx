import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";
import { Buy, Confirm, Created, Manage, Protect } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} element={<Navigate to={"/protect"} />} />
        <Route path={"/protect"} element={<Protect />} />
        <Route path={"/buy"} element={<Buy />} />
        <Route path={"/manage"} element={<Manage />} />
        <Route path={"/confirm"} element={<Confirm />} />
        <Route path={"/created"} element={<Created />} />
      </Switch>
    </Router>
  );
};

export default Routes;
