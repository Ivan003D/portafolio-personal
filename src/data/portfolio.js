//Aqui va a ir toda la info que quiero colocar en el portafolio
import fotoperfil from '../assets/perfil.jpg'
import nubemedica from '../assets/nubemedica.jpg'

export const profile = {
    name: 'Ivan Alejandro Gómez Castro',
    title: 'Desarrollador Aplicaciones Moviles y full stack',
    photo: fotoperfil,
    description:
        'Desarrollador apasionado por crear interfaces claras, accesibles y mantenibles. ' +
        'Fortalezas: React, JavaScript moderno, trabajo en equipo, resolución de problemas y aprendizaje continuo.' +
        'Futuro desarrollador Movil, apasionado a la materia.',
    skills: ['React', 'JavaScript', 'HTML', 'Git', 'Ant Design'],
}

export const socialLinks = [
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ivan-gomez-624b94443/' },
    { id: 'github', label: 'GitHub', url: 'https://github.com/Ivan003D' },
]

export const experiences = [
    {
        id: 1,
        company: 'Janitos Chiken Grill',
        role: 'Polifuncional',
        startDate: 'Jun 2026',
        endDate: 'Actualidad',
    },
]

export const education = [
    {
        id: 1,
        institution: 'Instituto DuocUC',
        degree: 'Analista Programador',
        year: '2025',
    },
]

export const projects = [
    {
        id: 1,
        title: 'Nube Medica',
        description: 'Página web diseñada para trabajadores del área de salud independientes.',
        image: nubemedica,
        repoUrl: 'https://github.com/Ivan003D',
        tags: ['Web', 'React'],
    },
]

export const contactInfo = {
    email: 'ivangomezcastro2004@gmail.com',
    location: 'Santiago, Chile',
}