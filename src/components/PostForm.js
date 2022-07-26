import React, { useState } from 'react'

function PostForm({setCondition}) {
    const [change, setChange] = useState(
            {
                title: " ", 
                symptomOne: " ", 
                symptomTwo: " ", 
                symptomThree: " "
            }
        );

    function handleChange(e) {
        setChange({...change,[e.target.name]: e.target.value})
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
            title: change.title,
            subTitle: "Symptoms",
            symptomOne: change.symptomOne,
            symptomTwo: change.symptomTwo,
            symptomThree: change.symptomThree,
            image: "https://africahealthholdings.com/images/Global_healthcare_2.jpeg",
            thumbsUp: "0",
            thumbsDown: "0"
        };
        fetch("https://rose-json-server.herokuapp.com/conditions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
            })
            .then((r) => r.json())
            .then((data) => setCondition(data));
        }


    return (
        <div className='flex items-center justify-between w-full max-w-7xl px-4 mt-24 lg:mt-28 mx-auto'>
            <div className='w-full lg:w-3/5'>
                <h2 className='mb-2 text-xl font-light max-w-lg'>Fill in the form to add Condition and the underlying symptoms.</h2>
                <form onSubmit={handleSubmit}>
                    <div className='max-w-full lg:max-w-sm'>
                        <div className='mb-4'>
                            <label for='title' className='text-gray-500 font-light text-sm'>Condition Name</label>
                            <input id='title' value={change.title} name="title" type='text' onChange={handleChange} className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'/>
                        </div>                    
                        <div className='mb-4'>
                            <label for='symptomOne' className='text-gray-500 font-light text-sm'>Symptom One</label>
                            <input id='symptomOne' placeholder='Symptom 1' value={change.symptomOne} name="symptomOne" type='text' onChange={handleChange} className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'/>
                        </div>
                        <div className='mb-4'>
                            <label for='symptomTwo' className='text-gray-500 font-light text-sm'>Symptom Two</label>
                            <input id='symptomTwo' placeholder='Symptom 2' value={change.symptomTwo} name="symptomTwo" type='text' onChange={handleChange} className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'/>
                        </div>
                        <div className='mb-4'>
                            <label for='symptomThree' className='text-gray-500 font-light text-sm'>Symptom Three</label>
                            <input id='symptomThree' placeholder='Symptom 3' value={change.symptomThree} name="symptomThree" type='text' onChange={handleChange} className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'/>
                        </div>
                        <div>
                            <input type='submit' className='bg-blue-300 rounded border px-4 py-2 hover:text-white hover:bg-blue-400 cursor-pointer uppercase'/>
                        </div>
                    </div>
                </form>
            </div>
            <div className='hidden lg:block lg:w-2/5'>
                <div className=''>
                    <img src='images/submit.gif' alt='form' className='w-full'/>
                </div>
            </div>
        </div>
    )
}

export default PostForm;