import About from "../About/About";
import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import Featured from "../Featured/Featured";
import Services from "../Services/Services";
import Team from "./Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contract></Contract>
            <Team></Team>
            <Featured></Featured>
           
        </div>
    );
};

export default Home;