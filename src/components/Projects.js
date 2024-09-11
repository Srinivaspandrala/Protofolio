import React from "react";
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    const projects = [
        {
            title: "Weather App",
            link: "https://weatherappsrinivas.vercel.app/",
            images: [
                "https://res.cloudinary.com/damoxc2du/image/upload/v1726031543/e4fb9efe4454eb1172aa95b9d1e9ab59_sfmvnz.png",
            ]
        },
        {
            title: "Food Munch Website",
            link: "https://foodmunchwebsitesrinivas.vercel.app/",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidEjGy3tuiz4w88i4Ap2sQMgJ69M2GT3FTQ&s"
            ]
        },
        {
            title: "Todo App",
            link: "https://todoappsrinivas.vercel.app/",
            images: [
                "https://res.cloudinary.com/damoxc2du/image/upload/v1725982800/dribbble_shot_hd_4x_una7n4.png",
            ]
        }
    ];

    return (
        <section id="projects" className="container my-5">
            <h2 className="text-center skill-heading my-4">Projects</h2>
            <div className="row g-3">
                {projects.map((project, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card card-bg h-100">
                            <img src={project.images[0]} className="card-img-top" alt={project.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{project.title}</h5>
                                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View
                                 <span><img src="https://img.icons8.com/?size=100&id=71638&format=png&color=000000"  style={{height:"20px"}}alt="link"/></span>   
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
