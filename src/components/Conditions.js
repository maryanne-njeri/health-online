import React, {useEffect, useState} from 'react';
import MiniComponent from './MiniComponent';
import PostForm from './PostForm';

function Conditions() {
    const [conditions, setCondition] = useState([ ]);

    useEffect( () => {
        fetch("https://rose-json-server.herokuapp.com/conditions")
        .then(resp => resp.json())
        .then(data => setCondition(data))
    },[])

    const allCondition = conditions.map(condition => {

        return (
            <MiniComponent 
                key = {condition.id}
                image = {condition.image}
                title = {condition.title}
                subTitle = {condition.subTitle}
                symptomOne = {condition.symptomOne}
                symptomTwo = {condition.symptomTwo}
                symptomThree = {condition.symptomThree}
            />
        )
    });



    return (
        <div>  
            <div className=''>
                <PostForm setCondition={setCondition}/>
            </div>
            <div className='flex justify-between gap-6 mx-12'>
                {allCondition}
            </div>
        </div>
    )
}

export default Conditions;
