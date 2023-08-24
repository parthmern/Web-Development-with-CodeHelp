import React from "react";
import Card from "./Card";

const Cards = ({courses}) => 
{
    let allCourses =[];

    // returns you a list of all courses received from API response
    const getCourses = () =>{
        console.log("printing course");
        console.log(courses);
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })

        return allCourses;
        
    }
    
    return (
    <div>
        {!courses ? (
            <div><p>NO data found</p></div>
        ) : (
            getCourses().map((course)=>{
                <Card key={course.id} course={course} />
            })
        )}

        {
            
        }
        
    </div>
    );
}

export default Cards ;