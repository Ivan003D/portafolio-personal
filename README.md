# Portafolio Personal

Este portafolio representa mi CV profesional. Está construido con **React + Vite** y utiliza las librerías de diseño de **Ant Design (antd)**.

## Tecnologías

- [React](https://react.dev/) — librería para construir interfaces de usuario
- [Vite](https://vitejs.dev/) — entorno de desarrollo rápido
- [Ant Design](https://ant.design/) — componentes de diseño (antd)

## Estructura de carpetas

```
src/
├── assets/           # Imágenes y recursos estáticos
├── components/
│   ├── atoms/        # Componentes pequeños y reutilizables
│   ├── molecules/    # Componentes combinados de átomos
│   ├── organisms/    # Secciones completas (Navbar, Footer, secciones, etc.)
│   ├── pages/        # Páginas principales (HomePage)
│   └── templates/    # Plantilla base del portafolio
├── data/             # Datos del portafolio (proyectos, experiencia, educación, etc.)
├── hooks/            # Hooks personalizados
├── App.jsx           # Componente raíz con ConfigProvider de antd
├── index.css         # Estilos globales y variables de marca
└── main.jsx          # Punto de entrada de la aplicación
```

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar pruebas
npm test
```

## Personalización

Los colores y la tipografía están definidos como variables CSS en `src/index.css` y en el tema de Ant Design en `src/App.jsx`. Puedes modificarlos fácilmente para adaptar la apariencia a tu gusto.

---

Desarrollado por **Ivan Alejandro Gómez Castro** — Desarrollador Full Stack