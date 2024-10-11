import React from "react";
import "../styles/Courses-Cards.css";

const courses = [
    {
        title: 'JavaScript Essentials',
        description: 'Learn the basics of JavaScript, the language of the web.',
    },
    {
        title: 'React for Beginners',
        description: 'Get started with React, a popular library for building user interfaces.',
    },
    {
        title: 'Mastering HTML & CSS',
        description: 'Dive deep into HTML and CSS to build responsive websites.',
    },
    {
        title: 'Introduction to DBMS',
        description: 'Learn the fundamentals of Database Management Systems (DBMS).',
    },
    {
        title: 'Advanced Java Programming',
        description: 'Enhance your Java skills with advanced concepts and techniques.',
    },
];

const CoursesCards = () => {
    return (
        <div className="courses-container">
            {courses.map((course, index) => (
                <div key={index} className="course-card">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
            ))}
        </div>
    );
};

export default CoursesCards ;