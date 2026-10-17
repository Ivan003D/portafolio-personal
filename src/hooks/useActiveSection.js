import { useEffect, useState } from 'react'

// Observa qué sección está visible para resaltarla en el menú de navegación.
const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

export default useActiveSection
