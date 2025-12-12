import React from 'react'
import Card from './Card'

const Projects = () => {
    return ( 
        <div className='container' id='projects'>
            <h2 className='text-center mb-5'><span className='sub-heading primary-text-color'>Projects</span></h2>
            <div className="row d-flex gap-md-0 gap-5 p-2">
                <div className="col-md-6">
                    <Card
                        classname="bg-gradient-1"
                        liveLink="https://taktusteam.onrender.com"
                        gitLink="https://github.com/sharonbrayan/Team-Task-Manager.git"
                        title="Taktus: Team Task Manager"
                        description="A full-stack MERN application enabling teams to collaborate through Kanban-style task workflows, secure access, and real-time workspace management."
                        features={["Kanban workflow (To-Do → In-Progress → Done)", "JWT + httpOnly cookie authentication with secure protected routes", "Team workspaces with invitations, member roles, and task assignments", "Priority levels, due dates, and admin-only actions (e.g., team deletion)", "Fully responsive Bootstrap UI (landing, auth pages, dashboard & team workspace)", "Automatic session persistence for improved UX"]}
                        techStack={["React.js", "Node.js", "MongoDB", "Bootstrap", "Express.js"]}
                    />
                </div>
                <div className="col-md-6 ">
                    <Card
                        classname="bg-gradient-2"
                        liveLink="https://habit-decay-tracker-1.onrender.com"
                        gitLink="https://github.com/sharonbrayan/habit-decay-tracker.git"
                        title="HabitHorizon – Habit Decay Tracker"
                        description="A MERN habit tracking application that visualizes consistency using decay-score analytics and interactive Recharts graphs."
                        features={[
                            "Daily habit tracking with completion history timelines",
                            "Secure JWT-based authentication with protected REST APIs",
                            "Backend decay-score engine computing consistency automatically",
                            "Interactive Recharts visualizations for habit performance",
                            "Mobile-friendly responsive Bootstrap dashboard UI",
                            "Users can create habits, log completions, and review trend insights"
                        ]}
                        techStack={["React.js", "Node.js", "MongoDB", "Bootstrap", "Express.js", "Recharts"]}
                    />
                </div>
                <div className="col-md-6 ">
                    <Card
                        classname="bg-gradient-3"
                        liveLink=""
                        gitLink=""
                        title="Kisan Mitra – Farmer Management System"
                        description="A full-stack farming platform enabling authenticated product browsing, cart management, chatbot-based assistance, and secure order processing."
                        features={[
                            "Role-based login with separate Admin and User access",
                            "Authenticated product browsing, cart, and order management",
                            "Chatbot integrated for common agricultural questions",
                            "Full CRUD operations for users, products, and orders",
                            "Admin dashboard for managing listings and viewing users"
                        ]}
                        techStack={["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "XAMPP"]}
                    />

                </div>
                <div className="col-md-6 ">
                    <Card
                        classname="bg-gradient-4"
                        liveLink=""
                        gitLink=""
                        title="Music Streaming Website"
                        description="A responsive music streaming interface with custom JavaScript audio controls and smooth playback interactions."
                        features={[
                            "Interactive front-end music player",
                            "Play, pause, and track-switching functionality",
                            "Responsive UI built with HTML5 and CSS",
                            "JavaScript-powered audio control system"
                        ]}
                        techStack={["HTML", "CSS", "JavaScript"]}
                    />

                </div>
            </div>
        </div>
    )
}

export default Projects