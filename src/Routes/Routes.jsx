import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";
import { Confirm, Created, Protect, Withdraw } from "../pages";
import { Error } from "../components";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} element={<Navigate to={"/protect"} />} />
        <Route path={"/protect"} element={<Protect />} />
        <Route path={"/withdraw"} element={<Withdraw />} />
        <Route path={"/confirm"} element={<Confirm />} />
        <Route path={"/created"} element={<Created />} />
        <Route
          path={"*"}
          element={<Error message={"Page Not Found!"} action={"home"} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
