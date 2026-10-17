// Datos de prueba independientes de src/data/portfolio.js,
// para que los tests no dependan de la información real.
export const profile = {
  name: 'Ada Lovelace',
  title: 'Desarrolladora',
  photo: '',
  description: 'Desarrolladora apasionada por crear interfaces claras.',
  skills: ['React', 'JavaScript'],
}

export const socialLinks = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ada' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/ada' },
]

export const experiences = [
  { id: 1, company: 'Empresa Uno', role: 'Desarrolladora Front-End', startDate: 'Mar 2024', endDate: 'Actualidad' },
  { id: 2, company: 'Empresa Dos', role: 'Desarrolladora Junior', startDate: 'Ene 2023', endDate: 'Feb 2024' },
]

export const education = [
  { id: 1, institution: 'Universidad Uno', degree: 'Ingeniería en Informática', year: '2023' },
  { id: 2, institution: 'Curso Online', degree: 'React Avanzado', year: '2024' },
]

export const projects = [
  { id: 1, title: 'Aplicación de Tareas', description: 'Gestor de tareas.', image: 'https://example.com/1.png', repoUrl: 'https://github.com/ada/tareas', tags: ['React', 'Ant Design'] },
  { id: 2, title: 'Landing Page', description: 'Sitio de presentación.', image: 'https://example.com/2.png', repoUrl: 'https://github.com/ada/landing', tags: ['HTML', 'CSS'] },
  { id: 3, title: 'Sin Etiquetas', description: 'Proyecto sin tags.', image: 'https://example.com/3.png', repoUrl: 'https://github.com/ada/sin-tags' },
]
