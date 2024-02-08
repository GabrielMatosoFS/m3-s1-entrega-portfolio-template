import { projects } from "../../data/projects"
import { ProjectCard } from "./ProjectsCard"
import styles from './style.module.css'

export const ProjectList = () => {
    return (
        <div className="container">
            <h2 className="tittle-two">Projetos</h2>
            <div className={styles.ProjectContant}>
                {projects.map(projects =>(
                    <ProjectCard key={projects.id} projects={projects} />
                ))}
            </div>
        </div>
    )
}