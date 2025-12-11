import React from 'react';
import './skills.css'
const Skills = () => {
    return (
        
       <div className="container">
        <h2 className='text-center my-5'><span className='sub-heading primary-text-color'>My Skills</span></h2>
         <div className="card-container split-theme justify-content-md-center justify-content-around">



            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                </div>
                <p>React</p>
                <span className="category">Framework</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                </div>
                <p>HTML5</p>
                <span className="category">Markup</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                </div>
                <p>CSS3</p>
                <span className="category">Styling</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" />
                </div>
                <p>Tailwind</p>
                <span className="category">CSS Framework</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                </div>
                <p>Bootstrap</p>
                <span className="category">CSS Framework</span>
            </div>



            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>
                <p>JavaScript</p>
                <span className="category">Language</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>
                <p>Node.js</p>
                <span className="category">Runtime</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="invert" />
                </div>
                <p>Express</p>
                <span className="category">Backend FW</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <p>Python</p>
                <span className="category">Language</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                </div>
                <p>PHP</p>
                <span className="category">Language</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>
                <p>Java</p>
                <span className="category">Language</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="http://img.icons8.com/?size=256&id=40670&format=png" alt="C" />
                </div>
                <p>C</p>
                <span className="category">Language</span>
            </div>



            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                </div>
                <p>MongoDB</p>
                <span className="category">NoSQL</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                </div>
                <p>MySQL</p>
                <span className="category">SQL</span>
            </div>
            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                </div>
                <p>Git</p>
                <span className="category">VCS</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="invert" />
                </div>
                <p>GitHub</p>
                <span className="category">Hosting</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="Vercel" className="invert" />
                </div>
                <p>Vercel</p>
                <span className="category">Deployment</span>
            </div>

            <div className="tech-card">
                <div className="icon-section">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" />
                </div>
                <p>NPM</p>
                <span className="category">Package Mgr</span>
            </div>

        </div>
       </div>
    );
};

export default Skills