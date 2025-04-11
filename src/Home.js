import { ReactTyped } from "react-typed";
import ProductPage from "./Products";
import './Home.css'

const Home = () => {
    return(
        <>
        <div className='Text-Typed'>
          Shop{" "}<ReactTyped strings={["Here At PikinHop"]} typeSpeed={100} loop />
        </div>

        <ProductPage />
        </>
    );
}

export default Home;