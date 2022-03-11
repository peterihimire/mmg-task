import { Switch, Redirect } from "react-router-dom";
import AppRoute from "./hoc/appRoute";
// import { useSelector } from "react-redux";

// layouts
// import LandingLayout from "./layouts/landing";
import DashboardLayout from "./layouts/dashboard";
import AuthLayout from "./layouts/auth";

// pages
import { HomePage } from "./pages/home";
import { LoanPage } from "./pages/loan";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <>
      <Switch>
        <AppRoute
          exact
          path='/'
          component={HomePage}
          layout={DashboardLayout}
        />
        <AppRoute
          exact
          path='/loan'
          component={LoanPage}
          layout={DashboardLayout}
        />
        <AppRoute
          exact
          path='/login'
          component={LoginPage}
          layout={AuthLayout}
        />

        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
