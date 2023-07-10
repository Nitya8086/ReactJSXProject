
import {  Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Store from "./components/Pages/Store";
import Layout from "./components/Layout/Layout";
import ContactUs from "./components/Pages/ContactUs";

function App() {
  return (
    <>
      <Layout>
       <Switch>
      <Route path='/'exact>
      <Redirect to ='/home'/>
      </Route>
          <Route path= '/home'>
           <Home/>
          </Route>
          <Route path = '/store' exact>
            <Store/>
          </Route>
          <Route path = '/about'>
            <About/>
          </Route>
          <Route path = '/contactUs'>
            <ContactUs/>
          </Route>
        </Switch>
       </Layout>
     </>
  );
}

export default App;
