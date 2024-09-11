import React from "react";
import './skill.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
    return (
        <section id="skills" className="container">
            <h2 className="text-center skill-heading my-4">Skills</h2>
            <div className="row g-3">
                {/* HTML Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">HTML</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=EAUyKy3IwmqM&format=png&color=000000" className="skills-logo" alt="html"/>
                        </div>
                    </div>
                </div>

                {/* CSS Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">CSS</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" className="skills-logo" alt="css"/>
                        </div>
                    </div>
                </div>

                {/* Bootstrap Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">Bootstrap</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" className="skills-logo" alt="bootstrap"/>
                        </div>
                    </div>
                </div>

                {/* JavaScript Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">JavaScript</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" className="skills-logo" alt="javascript"/>
                        </div>
                    </div>
                </div>

                {/* Python Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">Python</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" className="skills-logo" alt="python"/>
                        </div>
                    </div>
                </div>

                {/* SQL Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">SQL</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" className="skills-logo" alt="sql"/>
                        </div>
                    </div>
                </div>

                {/* React Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">React</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" className="skills-logo" alt="reactjs"/>
                        </div>
                    </div>
                </div>

                {/* Node.js Card */}
                <div className="col-6 col-md-3 mb-4">
                    <div className="card ">
                        <div className="card-header text-center">Node.js</div>
                        <div className="card-body text-center">
                            <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" className="skills-logo" alt="nodejs"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
