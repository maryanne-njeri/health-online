import React, { useState } from 'react'

function MiniComponent({image, subTitle, title, symptomOne, symptomTwo, symptomThree}) {

    const [thumbsUp, setThumbsUp] = useState(true);
    const [thumbsDown, setThumbsDown] = useState(true);


    function handleLike() {
        setThumbsUp(!thumbsUp);
    }
    
    function handleDisLike() {
        setThumbsDown(!thumbsDown);
    }

    

    return (
        <div>
            <div className='pb-6'>
                <div className='mt-12 border'>
                    <div className=''>
                        <img src={image} alt="Hero" className='rounded'/>
                    </div>
                    <div className='space-y-2 p-4 h-60'>
                        <h1 className='text-xl text-gray-800'>{title}</h1>
                        <h3 className='text-gray-700'>{subTitle}</h3>
                        <ul className='text-gray-600 text-sm'>
                            <li>{symptomOne}</li>
                            <li>{symptomTwo}</li>
                            <li>{symptomThree}</li>
                        </ul>
                        <div className="flex justify-between space-x-6 text-gray-800">
                            <div className='flex space-x-2'>
                                <div>
                                    <span onClick={handleLike} className='cursor-pointer'>
                                        👍
                                    </span>
                                    <span className={!thumbsUp ? "block" : "hidden"}>1</span>
                                </div>

                                <div>
                                    <span onClick={handleDisLike} className='cursor-pointer'>
                                        👎
                                    </span>
                                    <span className={!thumbsDown ? "block" : "hidden"}>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniComponent