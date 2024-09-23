import Banner from "components/Banner";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

const Default = () => {
    return (
          <main>
            <Banner />
            <Outlet />
          </main>
    );
  }
  
  export default Default;