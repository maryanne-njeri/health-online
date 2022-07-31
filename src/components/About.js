function About() {
    return(
        <div className="flex items-center mt-24 lg:mt-0 lg:h-screen px-4 lg:px-12">
            <div className="w-full flex items-center justify-between">
                <div className='w-full lg:w-1/2 space-y-4'>
                    <h2 className='text-2xl lg:text-5xl text-gray-500'>About Health Online</h2>
                    <div className='text-stone-700 text-sm'>
                        <p>
                        If you or your family member are at high risk for severe illness, wear a mask or respirator with greater protection in public indoor spaces if you are in an area with a high COVID-19 Community Level. Talk with your healthcare provider about wearing a mask in a medium
                        </p>
                    </div>
                </div>
                <div className='hidden lg:block w-1/2'>
                    <img src="images/health.gif" alt="about us" />
                </div>
            </div>
        </div>
    )
}


export default About;