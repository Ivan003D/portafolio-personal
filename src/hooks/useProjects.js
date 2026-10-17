import { useEffect, useState } from 'react'

const LOAD_DELAY_MS = 400

// Simula la carga de proyectos (ej. desde una API) y permite filtrar por tecnología.
const useProjects = (allProjects) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState('Todos')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setProjects(allProjects)
      setLoading(false)
    }, LOAD_DELAY_MS)
    return () => clearTimeout(timerId)
  }, [allProjects])

  const tags = ['Todos', ...new Set(projects.flatMap((project) => project.tags ?? []))]
  const visibleProjects =
    activeTag === 'Todos'
      ? projects
        : projects.filter((project) => (project.tags ?? []).includes(activeTag))

  return { projects: visibleProjects, tags, activeTag, setActiveTag, loading }
}

export default useProjects
