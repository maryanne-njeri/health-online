// import Navbar from "./Navbar";
import hero from './assets/img/hero.jpeg'
function Home() {
    return(
        <div>
            <nav class="main" className=" ">
                <div>
                    <h1>Home</h1>
                    <img src={hero} alt="hero" />
                </div>
                <div>
                    <p>
                        lorem ipsum
                    </p>
                </div>
            </nav>
        </div>
    )
} 

export default Home;