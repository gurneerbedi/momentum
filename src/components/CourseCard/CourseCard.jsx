import { useState } from "react";
import "./CourseCard.scss";

function CourseCard() {

    const[ selectedGrade, setSelectedGrade] = useState("All");
    // const [ filteredCourses, setFilteredCourses] = useState(null);

    const courses = [
        {

        id: 1, 
        coursecode: "MTH1W",
        grade: 9,
        title: "Mathematics",
        description: "This course builds a strong foundation in math, covering algebra, geometry, data, and financial literacy. Students develop problem-solving, reasoning, and coding skills through real-world applications.",
    },

    {

        id: 2, 
        coursecode: "MPM2D",
        grade: 10,
        title: "Principles of Mathematics",
        description: "This course focuses on developing algebraic and problem-solving skills through quadratic relations, linear systems, analytic geometry, and trigonometry. Students apply abstract reasoning and technology to solve multi-step problems and communicate their thinking effectively.",

    },
    {

        id: 3, 
        coursecode: "MFM2P",
        grade: 10,
        title: "Foundations of Mathematics",
        description: "This course focuses on linear relations, analytic geometry, and quadratic graphs while applying problem-solving skills to real-life scenarios. Students explore trigonometry, three-dimensional measurement, and mathematical reasoning through hands-on activities and technology.",

    },
    {

        id: 4, 
        coursecode: "MCR3U",
        grade: 11,
        title: "Functions",
        description: "This course introduces functions, exploring linear, quadratic, trigonometric, and exponential relationships. Students analyze functions numerically, algebraically, and graphically while solving real-world problems and developing algebraic reasoning.",

    },
    {

        id: 5,
        coursecode: "MCF3M",
        grade: 11,
        title: "Functions and Applications",
        description: "This course explores quadratic, trigonometric, and exponential functions, emphasizing real-world applications. Students analyze functions in multiple forms, simplify expressions, solve equations, and develop problem-solving skills.",

    },

    {

        id: 6,
        coursecode: "MHF4U",
        grade: 12,
        title: "Advanced Functions",
        description: "This course explores polynomial, rational, logarithmic, and trigonometric functions, emphasizing rates of change and function operations. It prepares students for senior mathematics, including calculus, and strengthens problem-solving skills for university studies.",

    },
    {

        id: 7,
        coursecode: "MCV4U",
        grade: 12,
        title: "Calculus and Vectors",
        description: "This course explores vectors, three-dimensional geometry, and derivatives of various functions, applying them to real-world modeling. It prepares students for university studies in science, engineering, economics, and business.",

    },
    {

        id: 8,
        coursecode: "MDM4U",
        grade: 12,
        title: "Mathematics of Data Management",
        description: "This course focuses on data management, probability, and statistics, teaching students to analyze large datasets and solve real-world problems. It is ideal for those pursuing university studies in business, social sciences, or humanities.",

    },
    {

        id: 9,
        coursecode: "SNC2D",
        grade: 10,
        title: "Science",
        description: "This course deepens students' understanding of biology, chemistry, earth and space science, and physics, focusing on the connections between scientific concepts and their real-world applications. Students develop investigation skills while exploring topics like cellular systems, chemical reactions, climate change, and the interaction of light and matter.",

    },
    {

        id: 10,
        coursecode: "SNC1W",
        grade: 9,
        title: "Science",
        description: "This course enhances students' understanding of biology, chemistry, physics, and earth and space science, while connecting science to technology, society, and the environment. Students develop STEM skills through research, experimentation, and engineering design, applying their knowledge to real-world issues and becoming scientifically literate global citizens.",

    },
    {

        id: 11,
        coursecode: "SCH3U",
        grade: 11,
        title: "Chemistry",
        description: "This course deepens students' understanding of chemistry, focusing on chemical properties, reactions, solutions, and atmospheric chemistry. Students enhance their analytical skills while exploring the impact of chemical reactions on society and the environment.",

    },
    {

        id: 12,
        coursecode: "SCH4U",
        grade: 12,
        title: "Chemistry",
        description: "This course deepens students' understanding of chemistry, focusing on organic chemistry, energy changes, chemical equilibrium, and electrochemistry. Students enhance problem-solving skills and investigate chemical processes, with an emphasis on chemistry's role in everyday life and its environmental impact.",

    },
    {

        id: 13,
        coursecode: "SPH3U",
        grade: 11,
        title: "Physics",
        description: "This course develops students' understanding of basic physics concepts, including kinematics, forces, energy transformations, waves, and electricity. Students enhance their investigation skills while exploring the relationship between physics, technology, and its societal and environmental impact.",

    },

    {

        id: 14,
        coursecode: "SPH4U",
        grade: 12,
        title: "Physics",
        description: "This course deepens students' understanding of physics, focusing on energy transformations, forces, and fields, as well as exploring light, quantum mechanics, and special relativity. Students enhance their investigation skills while analyzing data and considering the societal and environmental impact of technological applications of physics.",

    }
]

const filteredCourses = selectedGrade === "All"
? courses
: courses.filter(course => course.grade === selectedGrade);

return (
    <>

<div className="grade-tabs">
                {["All", 9, 10, 11, 12].map((grade) => (
                    <button 
                        key={grade} 
                        className={selectedGrade === grade ? "active" : ""} 
                        onClick={() => setSelectedGrade(grade)}
                    >
                        {grade === "All" ? "All Grades" : `Grade ${grade}`}
                    </button>
                ))}
            </div>
  
    <section className="courses" id="projects">
        {filteredCourses.map((course) => (
            <div key = {course.id} className="courses__container">
                <div className="courses__details">
                <h1 className="courses__title">{course.title}</h1>
                <p className="courses__code">{course.coursecode}</p>
                {/* <p className="courses__description">{course.description}</p> */}
                </div>
                
            </div>
        ))}
        </section>
                       
    
    </>
)
}

export default CourseCard;