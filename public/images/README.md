# Estructura de Imágenes - VIMASS Clinic

## 📁 Organización de Carpetas

### `/logo/`
- **Propósito**: Logotipos de la clínica en diferentes formatos
- **Archivos sugeridos**:
  - `vimass-logo.svg` - Logo principal en vectorial
  - `vimass-logo-white.svg` - Logo en blanco para fondos oscuros
  - `vimass-logo.png` - Logo en PNG (alta resolución)
  - `vimass-favicon.ico` - Favicon del sitio
  - `vimass-logo-horizontal.svg` - Versión horizontal del logo

### `/hero/`
- **Propósito**: Imágenes principales para secciones hero
- **Archivos sugeridos**:
  - `hero-main.jpg` - Imagen principal del sitio
  - `hero-tratamientos.jpg` - Imagen hero para página de tratamientos
  - `hero-equipo.jpg` - Imagen hero para página de equipo
  - `hero-contacto.jpg` - Imagen hero para página de contacto

### `/clinica/`
- **Propósito**: Fotos de las instalaciones de la clínica

#### `/clinica/exterior/`
- `fachada-principal.jpg` - Fachada del edificio
- `entrada-clinica.jpg` - Entrada principal
- `ubicacion-passeig-gracia.jpg` - Contexto de la ubicación

#### `/clinica/interior/`
- `recepcion.jpg` - Área de recepción
- `sala-espera.jpg` - Sala de espera
- `consulta-1.jpg` - Consulta médica principal
- `consulta-2.jpg` - Consulta secundaria
- `sala-tratamientos.jpg` - Sala de tratamientos

#### `/clinica/equipos/`
- `equipo-laser.jpg` - Equipos láser
- `tecnologia-avanzada.jpg` - Tecnología médica
- `instrumental-medico.jpg` - Instrumental especializado

### `/equipo/`
- **Propósito**: Fotos del equipo médico
- **Archivos existentes**:
  - `doctora.jpg` - Foto de la Dra. Celina Suárez
- **Archivos sugeridos**:
  - `dra-celina-consulta.jpg` - En consulta
  - `equipo-completo.jpg` - Foto del equipo completo
  - `personal-enfermeria.jpg` - Personal de enfermería

### `/tratamientos/`
- **Propósito**: Imágenes de los diferentes tratamientos
- **Archivos sugeridos**:
  - `botox-proceso.jpg`
  - `rellenos-dermicos.jpg`
  - `hilos-tensores.jpg`
  - `laser-tratamiento.jpg`
  - `peeling-quimico.jpg`
  - `plasma-rico-plaquetas.jpg`
  - `medicina-funcional.jpg`

### `/resultados/`
- **Propósito**: Fotos antes y después de tratamientos
- **Archivos existentes**:
  - `1-before.jpg`, `1-after.jpg`
  - `2-before.jpg`, `2-after.jpg`
- **Convención de nombres**:
  - `[numero]-before.jpg` - Foto antes del tratamiento
  - `[numero]-after.jpg` - Foto después del tratamiento
  - `[tratamiento]-before-[numero].jpg` - Específico por tratamiento
  - `[tratamiento]-after-[numero].jpg`

### `/certificaciones/`
- **Propósito**: Certificados, diplomas y acreditaciones
- **Archivos sugeridos**:
  - `diploma-medicina.jpg`
  - `certificado-medicina-preventiva.jpg`
  - `master-medicina-regenerativa.jpg`
  - `acreditaciones-profesionales.jpg`

### `/backgrounds/`
- **Propósito**: Imágenes de fondo para secciones
- **Archivos sugeridos**:
  - `medical-pattern.jpg` - Patrón médico sutil
  - `clean-medical-bg.jpg` - Fondo médico limpio
  - `barcelona-blur.jpg` - Barcelona difuminada

## 📝 Convenciones de Nombres

### Formato de Archivos
- **Preferir**: `.jpg` para fotografías, `.svg` para logos/iconos
- **Resolución**: Mínimo 1920x1080 para hero images
- **Calidad**: Alta calidad pero optimizada para web

### Nomenclatura
- **Usar**: kebab-case (palabras separadas por guiones)
- **Idioma**: Español para nombres descriptivos
- **Ejemplos**:
  - ✅ `dra-celina-consulta.jpg`
  - ✅ `sala-tratamientos-principal.jpg`
  - ❌ `Dra Celina Consulta.jpg`
  - ❌ `sala_tratamientos.jpg`

## 🎨 Especificaciones Técnicas

### Tamaños Recomendados
- **Logo principal**: 200x60px (SVG preferible)
- **Hero images**: 1920x1080px
- **Fotos equipo**: 400x500px (aspect ratio 4:5)
- **Resultados**: 600x600px (cuadrado)
- **Galería clínica**: 800x600px

### Optimización
- Comprimir imágenes antes de subir
- Usar formatos modernos cuando sea posible (.webp)
- Mantener tamaños de archivo razonables (< 500KB por imagen)

## 📊 Referencias en el Código

### Rutas de Imágenes Actuales
```typescript
// Logo principal
/images/logo/vimass-logo.svg

// Equipo
/images/equipo/doctora.jpg

// Resultados
/images/resultados/1-before.jpg
/images/resultados/1-after.jpg

// Hero sections
/images/hero/hero-main.jpg

// Clínica
/images/clinica/interior/recepcion.jpg
/images/clinica/exterior/fachada-principal.jpg
```

---
*Última actualización: Octubre 2025*