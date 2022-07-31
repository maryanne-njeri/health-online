// import Navbar from "./Navbar";

function Home() {
    return(
        <div>
            <nav className="lg:flex justify-between items-center w-full mt-12 lg:mt-28 px-4 lg:px-12 py-12 lg:py-12">
                <div className="flex justify-center mb-8 lg:mb-0 lg:block w-full lg:w-1/2">
                    <img src="images/malaria.jpg" alt="Hero"/>
                </div>
                <div className="w-full lg:w-1/2 text-gray-700">
                    <h2 className="text-2xl lg:text-4xl">Malaria statistics</h2>
                    <p className="text-sm lg:text-base leading-relaxed mt-3 lg:mt-6">
                        According to the 2021 World Malaria Report: Nearly half the world's population lives in areas 
                        at risk of malaria transmission in 87 countries and territories. In 2020, 
                        malaria caused an estimated 241 million clinical episodes, and 627,000 deaths. 
                        An estimated 95% of deaths in 2020 were in the WHO African Region.
                    </p>
                    <div className="mt-6 text-gray-700">
                        <a href="/conditions" className="bg-blue-300 rounded border px-4 py-2 hover:text-white hover:bg-blue-400">Read more</a>
                    </div>
                </div>
            </nav>
            <footer className="px-4 lg:px-0 text-center lg:flex justify-center mt-20">
                <p>Made with <span className="text-red-500">&hearts;</span> by Rosemary Njeri, Moringa school student, 2022.</p>
            </footer>
        </div>
    )
} 

export default Home;