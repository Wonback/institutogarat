# Instituto Médico Quirúrgico Garat - Website

Este repositorio contiene el código fuente para el sitio web del Instituto Médico Quirúrgico Garat. Es una aplicación web moderna construida con Angular, diseñada para ofrecer información sobre los servicios médicos, especialidades y staff profesional del instituto.

## 🛠️ Tecnologías Utilizadas

El proyecto utiliza un stack tecnológico moderno enfocado en el rendimiento, la mantenibilidad y la experiencia de usuario:

- **Angular:** Framework principal para la construcción de la aplicación (SPA).
- **Tailwind CSS:** Framework de utilidades para el diseño y estilizado rápido y responsivo.
- **DaisyUI:** Componentes de interfaz de usuario para Tailwind CSS.
- **Lucide Angular:** Biblioteca de iconos ligera y flexible.
- **Motion (Motion One):** Biblioteca de animaciones para interacciones fluidas y efectos visuales.

## 📂 Estructura del Proyecto

El código fuente se encuentra organizado de manera modular en `src/app`:

### `src/app/core`
Contiene los componentes fundamentales y estructurales de la aplicación:
- **Navbar:** Barra de navegación responsiva con menú móvil.
- **Footer:** Pie de página con información legal y de contacto.
- **Landing:** Página de inicio principal con secciones de presentación, especialidades y accesos rápidos.

### `src/app/pages`
Contiene los módulos específicos para cada especialidad médica, donde se detalla la información del servicio y el equipo profesional:
- `cirugia`
- `clinica`
- `gastro`
- `guardia`
- `hemodinamia`
- `neonatologia`
- `nutricion`
- `terapia`
- `traumatologia`
- `urologia`

## 🚀 Instalación y Ejecución

Para correr el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    ```

2.  **Instalar dependencias:**
    Navegar a la carpeta del frontend e instalar los paquetes necesarios:
    ```bash
    cd frontend
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    ng serve
    ```
    La aplicación estará disponible en `http://localhost:4200/`.

## ✨ Características Principales

- **Diseño Responsivo:** Adaptado para móviles, tablets y escritorio.
- **Navegación Fluida:** Transiciones suaves entre secciones y páginas.
- **Integraciones:** Enlaces directos a WhatsApp para turnos y Google Maps para ubicación.
- **Animaciones:** Efectos visuales en la carga de elementos y hover para mejorar la interactividad.
