import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import PersonalSection from './PersonalSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import { education, experiences, profile, projects, socialLinks } from '../../test/fixtures'


// Cada describe agrupa las pruebas de un organismo. Los datos vienen de fixtures.js (no de tus datos reales).

describe('PersonalSection', () => {
  it('muestra nombre, descripción y enlaces a redes', () => {
    render(<PersonalSection profile={profile} socialLinks={socialLinks} />)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(/Desarrolladora apasionada/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
      'href',
      socialLinks[0].url,
    )
    expect(screen.getByRole('link', { name: /GitHub/ })).toBeInTheDocument()
  })
})

describe('ExperienceSection', () => {
  it('lista empresa, cargo y fechas de cada experiencia', () => {
    render(<ExperienceSection experiences={experiences} />)
    experiences.forEach(({ company, role }) => {
      expect(screen.getByText(company)).toBeInTheDocument()
      expect(screen.getByText(role)).toBeInTheDocument()
    })
    expect(screen.getByText(/Mar 2024 – Actualidad/)).toBeInTheDocument()
  })
})

describe('EducationSection', () => {
  it('lista institución, título y año', () => {
    render(<EducationSection education={education} />)
    education.forEach(({ institution, degree }) => {
      expect(screen.getByText(institution)).toBeInTheDocument()
      expect(screen.getByText(degree)).toBeInTheDocument()
    })
  })
})

describe('ProjectsSection', () => {
  it('carga los proyectos y permite filtrarlos por tecnología', async () => {
    const user = userEvent.setup()
    render(<ProjectsSection projects={projects} />)

    expect(screen.getByTestId('projects-loading')).toBeInTheDocument()
    expect(await screen.findByText('Aplicación de Tareas')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Ver repositorio/ })).toHaveLength(projects.length)

    await user.click(screen.getByTitle('CSS'))
    expect(screen.getByText('Landing Page')).toBeInTheDocument()
    expect(screen.queryByText('Aplicación de Tareas')).not.toBeInTheDocument()
  })
})

describe('ContactSection', () => {
  it('renderiza el formulario y los enlaces sociales', () => {
    render(<ContactSection socialLinks={socialLinks} />)
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/ })).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('calcula el año actual dinámicamente', () => {
    render(<Footer name="Ada" email="ada@mail.com" location="Chile" />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} Ada`))).toBeInTheDocument()
    expect(screen.getByText(/ada@mail.com/)).toBeInTheDocument()
  })
})
