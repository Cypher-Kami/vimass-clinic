export type Language = 'es' | 'en'

export const translations = {
  es: {
    // Navegación
    nav: {
      inicio: 'Inicio',
      tratamientos: 'Tratamientos',
      equipo: 'Equipo',
      resultados: 'Resultados',
      contacto: 'Contacto',
      reservar: 'Reservar Cita'
    },
    
    // Página de inicio
    home: {
      headline: 'Medicina preventiva y regenerativa para tu mejor versión',
      description: 'Descubre el equilibrio perfecto entre bienestar y belleza con protocolos personalizados que van más allá de la estética.',
      ctaReservar: 'Reservar valoración',
      ctaInfo: 'Más información',
      
      // Secciones principales
      bestVersion: {
        title: 'Tu mejor versión',
        description: 'Realzamos tu belleza natural con técnicas avanzadas y un enfoque personalizado para cada paciente.'
      },
      starTreatment: {
        title: 'Tratamiento estrella',
        description: 'Resultados naturales y duraderos.'
      },
      draCelina: 'Dra. Celina Suárez',
      draCelinaDesc: 'Más de 20 años transformando vidas a través de la medicina preventiva y regenerativa.',
      
      // Tratamientos
      treatmentsTitle: 'Nuestros tratamientos',
      viewAllTreatments: 'Ver todos los tratamientos',
      
      // Tratamientos específicos
      treatments: {
        botox: 'Botox',
        fillers: 'Rellenos Dérmicos',
        threads: 'Hilos Tensores',
        laser: 'Tratamientos Láser',
        peeling: 'Peeling Químico',
        plasma: 'Plasma Rico en Plaquetas',
        medicinaFuncional: 'Medicina Funcional',
        antiaging: 'Protocolos Antiaging',
        medicinaIntegrativa: 'Medicina Integrativa'
      },
      
      // Equipo
      teamTitle: 'Detrás de VIMASS Clinic',
      teamSubtitle: 'CEO & Fundadora • Directora Médica',
      teamDescription1: 'Con más de dos décadas transformando vidas a través de la medicina preventiva y regenerativa. Reconocida internacionalmente como experta en longevidad saludable y medicina de precisión.',
      teamDescription2: 'Consultora senior en SHA Wellness Clinic, Centro Médico Teknon y Clínica Planas. Su enfoque integra medicina funcional, protocolos personalizados y las tecnologías más avanzadas.',
      teamDescription3: 'Más de 3,500 pacientes han confiado en su visión holística que va más allá de la estética: busca el bienestar integral y la optimización de la salud desde adentro hacia afuera.',
      teamCta: 'Conoce más sobre nuestro equipo',
      
      // Resultados
      resultsTitle: 'Nuestros resultados son impresionantes y sutiles',
      resultsDescription: 'En VIMASS Clinic, nos enorgullecemos de lograr transformaciones que parecen completamente naturales. Nuestros pacientes experimentan mejoras significativas mientras mantienen su esencia única.',
      resultsFeature1: 'Resultados naturales y armoniosos',
      resultsFeature2: 'Técnicas mínimamente invasivas',
      resultsFeature3: 'Recuperación rápida y cómoda',
      resultsFeature4: 'Seguimiento personalizado',
      resultsCta: 'Ver más resultados',
      beforeLabel: 'Antes',
      afterLabel: 'Después',
      
      // Reseñas
      reviewsTitle: 'Lo que dicen nuestros pacientes',
      
      // Ubicación
      locationTitle: '¿Dónde encontrarnos?',
      locationSubtitle: 'Nuestra ubicación',
      locationDescription: 'En el corazón de Barcelona, fácil acceso en transporte público',
      
      // Contacto
      contactTitle: 'Agenda tu cita',
      contactSubtitle: 'Comienza tu transformación',
      contactDescription: 'Complete el formulario y nos pondremos en contacto contigo para programar tu consulta personalizada.',
      
      // Formulario
      form: {
        nameLabel: 'Nombre completo',
        namePlaceholder: 'Tu nombre',
        phoneLabel: 'Teléfono/WhatsApp',
        phonePlaceholder: 'Tu teléfono',
        treatmentLabel: 'Tratamiento de interés',
        treatmentOptions: {
          functional: 'Medicina Funcional',
          antiaging: 'Protocolos Antiaging',
          integrative: 'Medicina Integrativa',
          general: 'Consulta General',
          other: 'Otro (especificar en mensaje)'
        },
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
        submitButton: 'Enviar mensaje',
        callPreference: '¿Prefieres llamarnos?',
        callDescription: 'También puedes reservar tu cita directamente por teléfono o WhatsApp'
      },
      
      // Información de contacto
      contact: {
        phone: 'Teléfono',
        whatsapp: 'WhatsApp',
        whatsappText: '¡Escríbenos!',
        whatsappAction: 'Contactar por WhatsApp',
        email: 'Email',
        schedule: 'Horarios'
      }
    },
    
    // Estadísticas
    stats: {
      title: 'Nuestros números hablan por sí solos',
      patients: 'Pacientes satisfechos',
      experience: 'Años de experiencia',
      treatments: 'Tratamientos realizados',
      satisfaction: 'Satisfacción del cliente'
    },
    
    // Footer
    footer: {
      legal: 'Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      contact: 'Contacto'
    },
    
    // CTA flotante
    cta: {
      reserve: 'Reservar valoración'
    },
    
    // Páginas
    pages: {
      // Página de contacto
      contacto: {
        title: 'Contacto',
        subtitle: 'Estamos aquí para acompañarte en tu camino hacia el bienestar integral',
        phoneTitle: 'Teléfono',
        emailTitle: 'Email',
        locationTitle: 'Ubicación',
        scheduleTitle: 'Horarios',
        whatsappTitle: 'WhatsApp',
        whatsappAction: 'Contactar por WhatsApp',
        contactFormTitle: 'Formulario de Contacto',
        contactFormDescription: 'Envíanos un mensaje y te contactaremos a la brevedad',
        nameLabel: 'Nombre completo',
        namePlaceholder: 'Tu nombre',
        phoneLabel: 'Teléfono',
        phonePlaceholder: 'Tu teléfono',
        emailLabel: 'Email',
        emailPlaceholder: 'tu.email@ejemplo.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: '¿Cómo podemos ayudarte?',
        submitButton: 'Enviar mensaje',
        scheduleText: 'Lunes a Viernes: 9:00 - 19:00\nSábado: 9:00 - 14:00'
      },
      
      // Página de equipo
      equipo: {
        title: 'Equipo',
        subtitle: 'Experiencia, innovación y dedicación al servicio de tu bienestar integral',
        draCelinaTitle: 'Dra. Celina Suárez',
        draCelinaSubtitle: 'Especialista en Medicina Preventiva y Regenerativa',
        draCelinaDescription: 'Más de 20 años de experiencia en medicina preventiva y regenerativa. Pionera en tratamientos integrales que combinan la medicina tradicional con técnicas de vanguardia.',
        draCelinaEducation: 'Formación Médica',
        draCelinaEducationList: 'Licenciatura en Medicina - Universidad de Barcelona\nEspecialidad en Medicina Preventiva\nMáster en Medicina Regenerativa\nFormación Avanzada en Medicina Funcional',
        draCelinaExperience: 'Experiencia Profesional',
        draCelinaExperienceList: 'Más de 20 años de experiencia\nMás de 3.500 pacientes satisfechos\nEspecialista en protocolos antiaging\nExperta en medicina integrativa',
        draCelinaPhilosophy: 'Filosofía Médica',
        draCelinaPhilosophyText: 'Mi enfoque va más allá de la estética. Creo en una medicina integral que trata a la persona como un todo, abordando no solo los síntomas sino también las causas raíz para lograr una salud y bienestar óptimos.',
        teamValues: 'Nuestros Valores',
        excellence: 'Excelencia',
        excellenceDesc: 'Compromiso con los más altos estándares de calidad en todos nuestros tratamientos',
        innovation: 'Innovación',
        innovationDesc: 'Utilizamos las técnicas y equipos más avanzados disponibles',
        empathy: 'Empatía',
        empathyDesc: 'Entendemos que cada paciente es único y merece atención personalizada',
        integrity: 'Integridad',
        integrityDesc: 'Transparencia y honestidad en todas nuestras interacciones y tratamientos',
        experienceLocations: {
          shaWellness: 'SHA Wellness Clinic',
          centroTeknon: 'Centro Médico Teknon', 
          clinicaPlanas: 'Clínica Planas',
          consultaPrivada: 'Consulta privada'
        }
      },
      
      // Página de resultados
      resultados: {
        title: 'Resultados',
        subtitle: 'Descubre las transformaciones que logramos con nuestros tratamientos personalizados',
        beforeLabel: 'Antes',
        afterLabel: 'Después',
        description: 'Cada resultado refleja nuestro compromiso con la excelencia y la estética natural. Nuestros pacientes experimentan mejoras significativas manteniendo su esencia única.',
        resultInfo: 'Todos los resultados mostrados son reales y han sido logrados con los tratamientos que ofrecemos en nuestra clínica.'
      },
      
      // Página de tratamientos
      tratamientos: {
        title: 'Tratamientos',
        subtitle: 'Descubre nuestra amplia gama de tratamientos de medicina preventiva y regenerativa',
        description: 'Cada tratamiento está diseñado para ofrecer resultados naturales y duraderos, respetando siempre tu esencia única.',
        categories: {
          aesthetic: 'Medicina Estética',
          functional: 'Medicina Funcional',
          antiaging: 'Antiaging',
          regenerative: 'Medicina Regenerativa'
        }
      },
      
      // Página legal
      legal: {
        title: 'Privacidad',
        privacyTitle: 'Política de Privacidad',
        cookiesTitle: 'Cookies',
        termsTitle: 'Términos y Condiciones'
      }
    },

    // Común
    common: {
      readMore: 'Leer más',
      close: 'Cerrar',
      next: 'Siguiente',
      previous: 'Anterior',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito'
    }
  },
  
  en: {
    // Navigation
    nav: {
      inicio: 'Home',
      tratamientos: 'Treatments',
      equipo: 'Team',
      resultados: 'Results',
      contacto: 'Contact',
      reservar: 'Book Appointment'
    },
    
    // Home page
    home: {
      headline: 'Preventive and regenerative medicine for your best version',
      description: 'Discover the perfect balance between wellness and beauty with personalized protocols that go beyond aesthetics.',
      ctaReservar: 'Book consultation',
      ctaInfo: 'More information',
      
      // Main sections
      bestVersion: {
        title: 'Your best version',
        description: 'We enhance your natural beauty with advanced techniques and a personalized approach for each patient.'
      },
      starTreatment: {
        title: 'Signature treatment',
        description: 'Natural and lasting results.'
      },
      draCelina: 'Dr. Celina Suárez',
      draCelinaDesc: 'Over 20 years transforming lives through preventive and regenerative medicine.',
      
      // Treatments
      treatmentsTitle: 'Our treatments',
      viewAllTreatments: 'View all treatments',
      
      // Specific treatments
      treatments: {
        botox: 'Botox',
        fillers: 'Dermal Fillers',
        threads: 'Thread Lifts',
        laser: 'Laser Treatments',
        peeling: 'Chemical Peeling',
        plasma: 'Platelet Rich Plasma',
        medicinaFuncional: 'Functional Medicine',
        antiaging: 'Anti-aging Protocols',
        medicinaIntegrativa: 'Integrative Medicine'
      },
      
      // Team
      teamTitle: 'Behind VIMASS Clinic',
      teamSubtitle: 'CEO & Founder • Medical Director',
      teamDescription1: 'With over two decades transforming lives through preventive and regenerative medicine. Internationally recognized as an expert in healthy longevity and precision medicine.',
      teamDescription2: 'Senior consultant at SHA Wellness Clinic, Centro Médico Teknon and Clínica Planas. Her approach integrates functional medicine, personalized protocols and the most advanced technologies.',
      teamDescription3: 'More than 3,500 patients have trusted her holistic vision that goes beyond aesthetics: seeking comprehensive wellness and health optimization from the inside out.',
      teamCta: 'Learn more about our team',
      
      // Results
      resultsTitle: 'Our results are impressive and subtle',
      resultsDescription: 'At VIMASS Clinic, we pride ourselves on achieving transformations that look completely natural. Our patients experience significant improvements while maintaining their unique essence.',
      resultsFeature1: 'Natural and harmonious results',
      resultsFeature2: 'Minimally invasive techniques',
      resultsFeature3: 'Quick and comfortable recovery',
      resultsFeature4: 'Personalized follow-up',
      resultsCta: 'View more results',
      beforeLabel: 'Before',
      afterLabel: 'After',
      
      // Reviews
      reviewsTitle: 'What our patients say',
      
      // Location
      locationTitle: 'Where to find us?',
      locationSubtitle: 'Our location',
      locationDescription: 'In the heart of Barcelona, easy access by public transport',
      
      // Contact
      contactTitle: 'Schedule your appointment',
      contactSubtitle: 'Begin your transformation',
      contactDescription: 'Complete the form and we will contact you to schedule your personalized consultation.',
      
      // Form
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        phoneLabel: 'Phone/WhatsApp',
        phonePlaceholder: 'Your phone',
        treatmentLabel: 'Treatment of interest',
        treatmentOptions: {
          functional: 'Functional Medicine',
          antiaging: 'Anti-aging Protocols',
          integrative: 'Integrative Medicine',
          general: 'General Consultation',
          other: 'Other (specify in message)'
        },
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us how we can help you...',
        submitButton: 'Send message',
        callPreference: 'Prefer to call us?',
        callDescription: 'You can also book your appointment directly by phone or WhatsApp'
      },
      
      // Contact info
      contact: {
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        whatsappText: 'Message us!',
        whatsappAction: 'Contact via WhatsApp',
        email: 'Email',
        schedule: 'Schedule'
      }
    },
    
    // Statistics
    stats: {
      title: 'Our numbers speak for themselves',
      patients: 'Satisfied patients',
      experience: 'Years of experience',
      treatments: 'Treatments performed',
      satisfaction: 'Customer satisfaction'
    },
    
    // Footer
    footer: {
      legal: 'Legal',
      privacy: 'Privacy',
      cookies: 'Cookies',
      contact: 'Contact'
    },
    
    // Floating CTA
    cta: {
      reserve: 'Book consultation'
    },
    
    // Pages
    pages: {
      // Contact page
      contacto: {
        title: 'Contact',
        subtitle: 'We are here to guide you on your path to comprehensive wellness',
        phoneTitle: 'Phone',
        emailTitle: 'Email',
        locationTitle: 'Location',
        scheduleTitle: 'Schedule',
        whatsappTitle: 'WhatsApp',
        whatsappAction: 'Contact via WhatsApp',
        contactFormTitle: 'Contact Form',
        contactFormDescription: 'Send us a message and we will get back to you as soon as possible',
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        phoneLabel: 'Phone',
        phonePlaceholder: 'Your phone',
        emailLabel: 'Email',
        emailPlaceholder: 'your.email@example.com',
        messageLabel: 'Message',
        messagePlaceholder: 'How can we help you?',
        submitButton: 'Send message',
        scheduleText: 'Monday to Friday: 9:00 - 19:00\nSaturday: 9:00 - 14:00'
      },
      
      // Team page
      equipo: {
        title: 'Team',
        subtitle: 'Experience, innovation and dedication at the service of your comprehensive wellness',
        draCelinaTitle: 'Dra. Celina Suárez',
        draCelinaSubtitle: 'Specialist in Preventive and Regenerative Medicine',
        draCelinaDescription: 'More than 20 years of experience in preventive and regenerative medicine. Pioneer in integrative treatments that combine traditional medicine with cutting-edge techniques.',
        draCelinaEducation: 'Medical Education',
        draCelinaEducationList: 'Medicine Degree - Universidad de Barcelona\nSpecialty in Preventive Medicine\nMaster in Regenerative Medicine\nAdvanced Training in Functional Medicine',
        draCelinaExperience: 'Professional Experience',
        draCelinaExperienceList: 'More than 20 years of experience\nOver 3,500 satisfied patients\nSpecialist in anti-aging protocols\nExpert in integrative medicine',
        draCelinaPhilosophy: 'Medical Philosophy',
        draCelinaPhilosophyText: 'My approach goes beyond aesthetics. I believe in comprehensive medicine that treats the person as a whole, addressing not only the symptoms but also the root causes to achieve optimal health and wellness.',
        teamValues: 'Our Values',
        excellence: 'Excellence',
        excellenceDesc: 'Commitment to the highest quality standards in all our treatments',
        innovation: 'Innovation',
        innovationDesc: 'We use the most advanced techniques and equipment available',
        empathy: 'Empathy',
        empathyDesc: 'We understand that each patient is unique and deserves personalized attention',
        integrity: 'Integrity',
        integrityDesc: 'Transparency and honesty in all our interactions and treatments',
        experienceLocations: {
          shaWellness: 'SHA Wellness Clinic',
          centroTeknon: 'Teknon Medical Center',
          clinicaPlanas: 'Planas Clinic', 
          consultaPrivada: 'Private practice'
        }
      },
      
      // Results page
      resultados: {
        title: 'Results',
        subtitle: 'Discover the transformations we achieve with our personalized treatments',
        beforeLabel: 'Before',
        afterLabel: 'After',
        description: 'Each result reflects our commitment to excellence and natural aesthetics. Our patients experience significant improvements while maintaining their unique essence.',
        resultInfo: 'All results shown are real and have been achieved with the treatments we offer at our clinic.'
      },
      
      // Treatments page
      tratamientos: {
        title: 'Treatments',
        subtitle: 'Discover our comprehensive range of preventive and regenerative medicine treatments',
        description: 'Each treatment is designed to offer natural and long-lasting results, always respecting your unique essence.',
        categories: {
          aesthetic: 'Aesthetic Medicine',
          functional: 'Functional Medicine',
          antiaging: 'Anti-aging',
          regenerative: 'Regenerative Medicine'
        }
      },
      
      // Legal page
      legal: {
        title: 'Privacy',
        privacyTitle: 'Privacy Policy',
        cookiesTitle: 'Cookies',
        termsTitle: 'Terms and Conditions'
      }
    },

    // Common
    common: {
      readMore: 'Read more',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    }
  }
}

export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.')
  let value: any = translations[language]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // Fallback to Spanish if key not found
      value = translations.es
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey]
        } else {
          return key // Return key if not found
        }
      }
      break
    }
  }
  
  return typeof value === 'string' ? value : key
}