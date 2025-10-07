/**
 * Configuración centralizada de rutas de imágenes
 * VIMASS Clinic - Sistema de gestión de assets
 */

export const ImagePaths = {
  // Logo y branding
  logo: {
    main: '/images/logo/Vimass Logo Color.webp',
    white: '/images/logo/Logo VIMASS Clinic.webp',
    horizontal: '/images/logo/vimass-logo-horizontal.svg',
    favicon: '/images/logo/vimass-favicon.ico',
    small: '/images/logo/cropped-LOGO-32x32.png'
  },

  // Imágenes hero para diferentes secciones
  hero: {
    home: '/images/hero/hero-main.jpg',
    tratamientos: '/images/hero/hero-tratamientos.jpg',
    equipo: '/images/hero/hero-equipo.jpg',
    contacto: '/images/hero/hero-contacto.jpg',
    resultados: '/images/hero/hero-resultados.jpg',
    // Videos para el hero animado
    videos: {
      slide1: '/images/hero/hero-video-1.mp4',
      slide2: '/images/hero/hero-video-2.mp4',
      slide3: '/images/hero/hero-video-3.mp4',
      slide4: '/images/hero/hero-video-4.mp4',
      slide5: '/images/hero/hero-video-5.mp4'
    }
  },

  // Imágenes del equipo médico
  equipo: {
    draCelina: '/images/equipo/doctora-celina.jpeg',
    draCelinaPose: '/images/equipo/doctora-celina-pose.jpeg',
    draCelinaJeringa: '/images/equipo/doctora-celina-jeringa.jpeg',
    doctora: '/images/equipo/doctora.jpg'
  },

  // Imágenes de la clínica
  clinica: {
    interior: {
      camilla: '/images/clinica/interior/camilla.JPG',
      camilla2: '/images/clinica/interior/camilla2.JPG',
      mostrador: '/images/clinica/interior/mostrador.JPG'
    },
    exterior: {
      // Preparado para cuando agregues fotos del exterior
    },
    equipos: {
      // Preparado para cuando agregues fotos de equipos
    }
  },

  // Imágenes de tratamientos
  tratamientos: {
    toxina: {
      hero: '/images/tratamientos/toxina/hero.jpg',
      before: '/images/tratamientos/toxina/before.jpg',
      after: '/images/tratamientos/toxina/after.jpg'
    },
    labios: {
      hero: '/images/tratamientos/labios/hero.jpg',
      before: '/images/tratamientos/labios/before.jpg',
      after: '/images/tratamientos/labios/after.jpg'
    },
    acido: {
      hero: '/images/tratamientos/acido/hero.jpg',
      before: '/images/tratamientos/acido/before.jpg',
      after: '/images/tratamientos/acido/after.jpg'
    },
    antiaging: {
      hero: '/images/tratamientos/antiaging/hero.jpg',
      before: '/images/tratamientos/antiaging/before.jpg',
      after: '/images/tratamientos/antiaging/after.jpg'
    },
    medicinaFuncional: {
      hero: '/images/tratamientos/medicina-funcional/hero.jpg',
      before: '/images/tratamientos/medicina-funcional/before.jpg',
      after: '/images/tratamientos/medicina-funcional/after.jpg'
    },
    medicinaIntegrativa: {
      hero: '/images/tratamientos/medicina-integrativa/hero.jpg',
      before: '/images/tratamientos/medicina-integrativa/before.jpg',
      after: '/images/tratamientos/medicina-integrativa/after.jpg'
    }
  },

  // Galería de resultados
  resultados: [
    '/images/resultados/result1.jpeg',
    '/images/resultados/result2.jpeg',
    '/images/resultados/result3.jpeg',
    '/images/resultados/result4.jpeg',
    '/images/resultados/result5.jpeg',
    '/images/resultados/result6.jpeg',
    '/images/resultados/result7.jpeg',
    '/images/resultados/result8.jpeg',
    '/images/resultados/result9.jpeg',
    '/images/resultados/result10.jpeg',
    '/images/resultados/result11.jpeg',
    '/images/resultados/result12.jpeg',
    '/images/resultados/result13.jpeg',
    '/images/resultados/result14.jpeg',
    '/images/resultados/result15.jpeg',
    '/images/resultados/result16.jpeg',
    '/images/resultados/result17.jpeg',
    '/images/resultados/result18.jpeg'
  ],

  // Certificaciones y acreditaciones
  certificaciones: {
    diplomaMedicina: '/images/certificaciones/diploma-medicina.jpg',
    certificadoPreventiva: '/images/certificaciones/certificado-medicina-preventiva.jpg',
    masterRegenerativa: '/images/certificaciones/master-medicina-regenerativa.jpg',
    acreditaciones: '/images/certificaciones/acreditaciones-profesionales.jpg'
  },

  // Fondos e imágenes decorativas
  backgrounds: {
    medicalPattern: '/images/backgrounds/medical-pattern.jpg',
    cleanMedical: '/images/backgrounds/clean-medical-bg.jpg',
    barcelonaBlur: '/images/backgrounds/barcelona-blur.jpg'
  }
} as const

/**
 * Helper para obtener arrays de resultados fácilmente
 */
export const getResultadosArray = () => ImagePaths.resultados

/**
 * Helper para obtener galería de la clínica
 */
export const getClinicaGallery = () => [
  ...Object.values(ImagePaths.clinica.exterior),
  ...Object.values(ImagePaths.clinica.interior),
  ...Object.values(ImagePaths.clinica.equipos)
]

/**
 * Tipos TypeScript para autocompletado
 */
export type ImagePathsType = typeof ImagePaths
export type LogoType = keyof typeof ImagePaths.logo
export type HeroType = keyof typeof ImagePaths.hero
export type EquipoType = keyof typeof ImagePaths.equipo
export type TratamientosType = keyof typeof ImagePaths.tratamientos