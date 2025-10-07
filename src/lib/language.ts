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
      reservar: 'Reservar Cita',
      menu: 'Menú de navegación'
    },
    
    // Página de inicio
    home: {
      headline: 'Medicina preventiva y regenerativa para tu mejor versión',
      description: 'Descubre el equilibrio perfecto entre bienestar y belleza con protocolos personalizados que van más allá de la estética.',
      ctaReservar: 'Reservar valoración',
      ctaInfo: 'Más información',
      
      // Hero slides
      hero: {
        slide1: 'Resultados sutiles, visibles para ti',
        slide2: 'Medicina estética de precisión',
        slide3: 'Natural es mejor',
        slide4: 'Tu bienestar es nuestra prioridad',
        slide5: 'Tecnología avanzada, toque humano'
      },
      
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
        medicinaIntegrativa: 'Medicina Integrativa',
        acidoHialuronico: 'Ácido Hialurónico',
        bioimpedancia: 'Bioimpedancia',
        ultrasonido: 'Ultrasonido',
        radiofrecuencia: 'Radiofrecuencia',
        mesoterapia: 'Mesoterapia',
        microneedling: 'Microneedling',
        bioestimuladores: 'Bioestimuladores',
        exosomos: 'Exosomos',
        polinucleotidos: 'Polinucleótidos',
        vitaminasNctf: 'Vitaminas (NCTF)',
        hilosTensores: 'Hilos Tensores',
        hilosPdo: 'Hilos PDO',
        neuromodulador: 'Neuromodulador',
        prp: 'PRP',
        harmonyLaser: 'Harmony Láser',
        higieneFacial: 'Higiene Facial',
        hidratacionProfunda: 'Hidratación Profunda',
        terapiaLed: 'Terapia LED',
        presoterapia: 'Presoterapia',
        ondasChoque: 'Ondas de choque',
        carboxiterapia: 'Carboxiterapia',
        escleroterapia: 'Escleroterapia',
        labios: 'Aumento de Labios',
        toxinaBotulinica: 'Toxina Botulínica'
      },

      // Grupos de tratamientos
      treatmentGroups: {
        inyectables: 'Inyectables',
        aparatologia: 'Aparatología',
        facialDermo: 'Facial / Dermo',
        vascularMetabolico: 'Vascular / Metabólico',
        integrativa: 'Integrativa'
      },

      // Objetivos de tratamiento
      objectives: {
        melasmaDiscromias: {
          title: 'Melasma y Discromías (manchas)',
          description: 'Tratamientos para las manchas con tecnología láser y activos regeneradores y despigmentantes que unifican el tono y devuelven la luminosidad a tu piel y la oxigenación del tejido.'
        },
        estrias: {
          title: 'Estrías',
          description: 'Tratamientos para mejorar la calidad de las estrías activando la oxigenación local, estimulando la producción de colágeno y elastina y regeneración profunda de la piel desde el interior.'
        },
        varices: {
          title: 'Várices',
          description: 'Tratamientos para aliviar y mejorar el aspecto de las varices, revitalizando tus piernas con tratamientos no invasivos que estimulan la circulación y reducen la pigmentación y también método mínimamente invasivo.'
        },
        remodelacionCorporal: {
          title: 'Remodelación corporal (celulitis, flacidez, grasa localizada)',
          description: 'Tratamientos para redefinir tu silueta, mejorando la firmeza, textura y tonicidad de la piel de forma natural, estimulando el tejido desde el interior.'
        },
        lineasExpresion: {
          title: 'Líneas de expresión',
          description: 'Tratamientos para atenuar las arrugas, con técnicas que suavizan la expresión sin alterar tu naturalidad. Resultados visibles, elegantes y progresivos.'
        },
        armoniaFacial: {
          title: 'Armonía facial natural',
          description: 'Tratamientos para realzar la armonía facial respetando tu esencia, equilibrando volúmenes y resaltando tus rasgos con elegancia y naturalidad.'
        },
        rejuvenecimientoPiel: {
          title: 'Rejuvenecimiento de la piel (flacidez, arrugas, manchas)',
          description: 'Tratamientos para rejuvenecer tu piel con tecnologías y activos que restauran la firmeza, el brillo, el viso, la luminosidad, la textura y la calidad de la piel.'
        },
        acne: {
          title: 'Acné',
          description: 'Tratamientos para el acné desde la raíz, con un enfoque integral que equilibra la piel y reduce marcas y brotes, para una apariencia uniforme y saludable, elevando la autoestima.'
        },
        rosaceaCuperosis: {
          title: 'Rosácea y Cuperosis',
          description: 'Tratamientos para calmar la piel sensible y reducir la inflamación y la rojez con tratamientos específicos que mejoran la barrera cutánea.'
        },
        saludCapilar: {
          title: 'Salud capilar (alopecia, caída, brillo)',
          description: 'Tratamientos para fortalecer el cabello desde la raíz, mejorando su oxigenación, microcirculación sanguínea, densidad, brillo y resistencia con terapias regenerativas.'
        },
        controlPeso: {
          title: 'Control de peso',
          description: 'Programa desarrollado para ayudar a alcanzar tu peso ideal de forma saludable, con acompañamiento profesional y tratamientos corporales que estimulan el metabolismo a la quema de grasa localizada, mejoría de la silueta corporal, calidad de la piel.'
        }
      },

      // Contenido detallado de tratamientos
      treatmentContent: {
        acidohialuronico: {
          title: 'Ácido Hialurónico',
          excerpt: 'Relleno de arrugas y volumen facial.',
          bullets: ['Hidratación profunda', 'Resultados inmediatos', 'Producto reabsorbible'],
          faq: [
            { q: '¿Es seguro?', a: 'Totalmente biocompatible y reabsorbible.' },
            { q: '¿Cuánto dura?', a: 'Entre 8-15 meses según la zona tratada.' }
          ]
        },
        antiaging: {
          title: 'Protocolos Antiaging',
          excerpt: 'Programas integrales para retrasar el envejecimiento y optimizar la salud.',
          bullets: ['Enfoque integral', 'Medicina personalizada', 'Prevención activa'],
          faq: [
            { q: '¿Qué incluye un protocolo antiaging?', a: 'Evaluación completa, suplementación, tratamientos y seguimiento.' },
            { q: '¿A qué edad se recomienda?', a: 'Ideal a partir de los 30 años como prevención.' }
          ]
        },
        bioestimuladores: {
          title: 'Bioestimuladores',
          excerpt: 'Estimulación de colágeno propio para rejuvenecimiento natural y duradero.',
          bullets: ['Estimula colágeno propio', 'Resultados naturales', 'Efecto progresivo'],
          faq: [
            { q: '¿Qué son los bioestimuladores?', a: 'Sustancias que estimulan la producción natural de colágeno.' },
            { q: '¿Cuánto duran los efectos?', a: 'Los resultados pueden durar hasta 2 años.' }
          ]
        },
        bioimpedancia: {
          title: 'Bioimpedancia',
          excerpt: 'Análisis de composición corporal para evaluación metabólica completa.',
          bullets: ['Medición precisa', 'Análisis detallado', 'Seguimiento objetivo'],
          faq: [
            { q: '¿Qué mide la bioimpedancia?', a: 'Masa muscular, grasa corporal, agua y metabolismo basal.' },
            { q: '¿Es doloroso?', a: 'No, es completamente indoloro y no invasivo.' }
          ]
        },
        carboxiterapia: {
          title: 'Carboxiterapia',
          excerpt: 'Terapia con CO2 médico para mejorar circulación y oxigenación.',
          bullets: ['Mejora circulación', 'Efecto lifting', 'Reduce celulitis'],
          faq: [
            { q: '¿Cómo funciona?', a: 'El CO2 mejora la oxigenación y estimula la microcirculación.' },
            { q: '¿Cuántas sesiones necesito?', a: 'Entre 6-10 sesiones según el objetivo.' }
          ]
        },
        escleroterapia: {
          title: 'Escleroterapia',
          excerpt: 'Tratamiento para varices y capilares mediante inyección esclerosante.',
          bullets: ['Elimina varices', 'Mínimamente invasivo', 'Recuperación rápida'],
          faq: [
            { q: '¿Es efectivo?', a: 'Muy efectivo para varices pequeñas y medianas.' },
            { q: '¿Hay efectos secundarios?', a: 'Mínimos, puede haber ligera inflamación temporal.' }
          ]
        },
        exosomos: {
          title: 'Exosomos',
          excerpt: 'Terapia regenerativa avanzada con exosomos para rejuvenecimiento celular.',
          bullets: ['Medicina regenerativa', 'Rejuvenecimiento celular', 'Tecnología avanzada'],
          faq: [
            { q: '¿Qué son los exosomos?', a: 'Vesículas extracelulares que contienen factores de crecimiento.' },
            { q: '¿Es un tratamiento seguro?', a: 'Completamente seguro, de origen natural.' }
          ]
        },
        harmonylaser: {
          title: 'Plataforma Harmony Láser (DYE, 570, Pixel, Clearlift, Erbium puro y fraccionado, Depilación)',
          excerpt: 'Plataforma láser multifuncional para diversos tratamientos estéticos.',
          bullets: ['Múltiples aplicaciones', 'Tecnología avanzada', 'Tratamientos personalizados'],
          faq: [
            { q: '¿Qué tratamientos incluye?', a: 'Manchas, arrugas, cicatrices, depilación y rejuvenecimiento.' },
            { q: '¿Es doloroso?', a: 'Mínimas molestias, se usa anestesia tópica si es necesario.' }
          ]
        },
        hidratacionprofunda: {
          title: 'Hidratación Profunda',
          excerpt: 'Tratamientos intensivos para restaurar la hidratación y luminosidad de la piel.',
          bullets: ['Hidratación intensa', 'Restaura luminosidad', 'Efecto inmediato'],
          faq: [
            { q: '¿Cuánto dura el efecto?', a: 'Los resultados se mantienen entre 4-6 meses.' },
            { q: '¿Para qué tipo de piel?', a: 'Ideal para piel deshidratada y apagada.' }
          ]
        },
        higienefacial: {
          title: 'Higiene Facial',
          excerpt: 'Limpieza profunda y purificación para una piel saludable y radiante.',
          bullets: ['Limpieza profunda', 'Purifica poros', 'Piel radiante'],
          faq: [
            { q: '¿Con qué frecuencia?', a: 'Recomendado cada 4-6 semanas.' },
            { q: '¿Es para todo tipo de piel?', a: 'Sí, adaptamos el tratamiento según el tipo de piel.' }
          ]
        },
        hilospdo: {
          title: 'Hilos PDO',
          excerpt: 'Hilos reabsorbibles para lifting facial y estimulación de colágeno.',
          bullets: ['Lifting inmediato', 'Estimula colágeno', 'Reabsorbibles'],
          faq: [
            { q: '¿Cuánto dura el efecto?', a: 'Entre 12-18 meses, con efecto progresivo.' },
            { q: '¿Es doloroso?', a: 'Molestia mínima con anestesia local.' }
          ]
        },
        hilostensores: {
          title: 'Hilos Tensores',
          excerpt: 'Lifting facial no quirúrgico con hilos de última generación.',
          bullets: ['Lifting sin cirugía', 'Resultados inmediatos', 'Recuperación rápida'],
          faq: [
            { q: '¿Qué zonas se pueden tratar?', a: 'Rostro, cuello y escote principalmente.' },
            { q: '¿Cuándo se ven los resultados?', a: 'Inmediatos, mejorando progresivamente.' }
          ]
        },
        labios: {
          title: 'Aumento de Labios',
          excerpt: 'Realce y definición de labios para un resultado natural y armonioso.',
          bullets: ['Resultado natural', 'Efecto inmediato', 'Totalmente reversible'],
          faq: [
            { q: '¿Se ve natural?', a: 'Sí, buscamos siempre un resultado armónico y natural.' },
            { q: '¿Cuánto dura?', a: 'Entre 6-12 meses según el producto utilizado.' }
          ]
        },
        medicinafuncional: {
          title: 'Medicina Funcional',
          excerpt: 'Enfoque integral para optimizar la salud y prevenir enfermedades.',
          bullets: ['Enfoque preventivo', 'Medicina personalizada', 'Análisis completo'],
          faq: [
            { q: '¿Qué incluye?', a: 'Análisis completos, plan nutricional y suplementación.' },
            { q: '¿Para quién?', a: 'Ideal para personas que buscan optimizar su salud.' }
          ]
        },
        medicinaintegrativa: {
          title: 'Medicina Integrativa',
          excerpt: 'Combinación de medicina convencional y terapias complementarias.',
          bullets: ['Enfoque holístico', 'Medicina personalizada', 'Tratamiento integral'],
          faq: [
            { q: '¿Qué combina?', a: 'Medicina convencional con terapias naturales y preventivas.' },
            { q: '¿Es seguro?', a: 'Completamente seguro, basado en evidencia científica.' }
          ]
        },
        mesoterapia: {
          title: 'Mesoterapia',
          excerpt: 'Microinyecciones de principios activos para rejuvenecimiento y reparación.',
          bullets: ['Principios activos directos', 'Rejuvenecimiento', 'Mínimamente invasivo'],
          faq: [
            { q: '¿Qué productos se usan?', a: 'Vitaminas, minerales, aminoácidos y péptidos.' },
            { q: '¿Cuántas sesiones?', a: 'Entre 3-6 sesiones según el objetivo.' }
          ]
        },
        microneedling: {
          title: 'Microneedling',
          excerpt: 'Estimulación de colágeno mediante microperforaciones controladas.',
          bullets: ['Estimula colágeno', 'Mejora textura', 'Mínimo downtime'],
          faq: [
            { q: '¿Para qué sirve?', a: 'Mejora textura, cicatrices, poros y firmeza.' },
            { q: '¿Es doloroso?', a: 'Molestia mínima, se aplica anestesia tópica.' }
          ]
        },
        neuromodulador: {
          title: 'Neuromodulador',
          excerpt: 'Relajación muscular para prevenir y tratar arrugas de expresión.',
          bullets: ['Previene arrugas', 'Efecto natural', 'Mínimamente invasivo'],
          faq: [
            { q: '¿Duele la aplicación?', a: 'Molestia mínima, no requiere anestesia.' },
            { q: '¿Cuándo se ven los resultados?', a: 'Entre 3-7 días tras la aplicación.' }
          ]
        },
        ondaschoque: {
          title: 'Ondas de Choque',
          excerpt: 'Tecnología de ondas para celulitis, flacidez y remodelación corporal.',
          bullets: ['Reduce celulitis', 'Reafirma tejidos', 'No invasivo'],
          faq: [
            { q: '¿Cómo funciona?', a: 'Las ondas estimulan la circulación y el drenaje linfático.' },
            { q: '¿Cuántas sesiones?', a: 'Entre 6-12 sesiones según el objetivo.' }
          ]
        },
        peeling: {
          title: 'Peeling Químico',
          excerpt: 'Exfoliación controlada para renovación celular y mejora de la textura.',
          bullets: ['Renovación celular', 'Mejora textura', 'Unifica tono'],
          faq: [
            { q: '¿Qué tipos hay?', a: 'Superficial, medio y profundo según necesidades.' },
            { q: '¿Hay descamación?', a: 'Puede haber descamación leve los primeros días.' }
          ]
        },
        polinucleotidos: {
          title: 'Polinucleótidos',
          excerpt: 'Terapia regenerativa para reparación y rejuvenecimiento de tejidos.',
          bullets: ['Reparación celular', 'Hidratación profunda', 'Mejora elasticidad'],
          faq: [
            { q: '¿Cómo actúan los polinucleótidos?', a: 'Estimulan la reparación y regeneración del ADN celular.' },
            { q: '¿Para qué zonas es efectivo?', a: 'Especialmente efectivo en contorno de ojos y cuello.' }
          ]
        },
        presoterapia: {
          title: 'Presoterapia',
          excerpt: 'Drenaje linfático mediante presión controlada para eliminar toxinas.',
          bullets: ['Drenaje linfático', 'Elimina toxinas', 'Mejora circulación'],
          faq: [
            { q: '¿Para qué sirve?', a: 'Retención de líquidos, celulitis y mejora circulatoria.' },
            { q: '¿Es relajante?', a: 'Muy relajante, muchos pacientes se duermen.' }
          ]
        },
        prp: {
          title: 'PRP',
          excerpt: 'Plasma Rico en Plaquetas para regeneración natural con sangre propia.',
          bullets: ['100% natural', 'Estimula regeneración', 'Sin efectos adversos'],
          faq: [
            { q: '¿Cómo se obtiene el PRP?', a: 'Se extrae de tu propia sangre mediante centrifugado.' },
            { q: '¿Para qué sirve?', a: 'Rejuvenecimiento facial, capilar y regeneración de tejidos.' }
          ]
        },
        radiofrecuencia: {
          title: 'Radiofrecuencia',
          excerpt: 'Tecnología para reafirmación y estimulación de colágeno mediante calor.',
          bullets: ['Reafirma tejidos', 'Estimula colágeno', 'Sin downtime'],
          faq: [
            { q: '¿Se siente calor?', a: 'Sí, una sensación de calor agradable y controlada.' },
            { q: '¿Cuántas sesiones?', a: 'Entre 4-8 sesiones según el área a tratar.' }
          ]
        },
        terapialed: {
          title: 'Terapia LED',
          excerpt: 'Fototerapia con luz LED para rejuvenecimiento y reparación celular.',
          bullets: ['Estimula células', 'Anti-inflamatorio', 'Sin efectos secundarios'],
          faq: [
            { q: '¿Cómo funciona?', a: 'La luz LED estimula la actividad celular y la producción de colágeno.' },
            { q: '¿Es seguro?', a: 'Completamente seguro, sin contraindicaciones.' }
          ]
        },
        toxinabotulinica: {
          title: 'Toxina Botulínica',
          excerpt: 'Tratamiento para arrugas dinámicas y exceso de sudoración.',
          bullets: ['Elimina arrugas dinámicas', 'Efecto natural', 'Resultados duraderos'],
          faq: [
            { q: '¿Cuánto dura el efecto?', a: 'Entre 4-6 meses según la zona tratada.' },
            { q: '¿Se ve natural?', a: 'Sí, permite expresiones naturales.' }
          ]
        },
        ultrasonido: {
          title: 'Ultrasonido',
          excerpt: 'Tecnología ultrasónica para reafirmación profunda y lifting no invasivo.',
          bullets: ['Lifting profundo', 'No invasivo', 'Resultados duraderos'],
          faq: [
            { q: '¿Cómo funciona?', a: 'El ultrasonido focalizado estimula las capas profundas de la piel.' },
            { q: '¿Cuándo se ven resultados?', a: 'Gradualmente durante 2-3 meses.' }
          ]
        },
        vitaminasnctf: {
          title: 'Vitaminas (NCTF)',
          excerpt: 'Cóctel de vitaminas y nutrientes para revitalización facial profunda.',
          bullets: ['53 ingredientes activos', 'Hidratación intensa', 'Luminosidad inmediata'],
          faq: [
            { q: '¿Qué contiene NCTF?', a: 'Vitaminas, aminoácidos, minerales y ácido hialurónico.' },
            { q: '¿Cuándo se ven los resultados?', a: 'Luminosidad inmediata, mejora progresiva en semanas.' }
          ]
        }
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
      beforeAfterLabel: 'Antes y Después',
      
      // Reseñas
      reviewsTitle: 'Lo que dicen nuestros pacientes',
      reviews: [
        {
          name: 'Dr. Joan Venceslao',
          text: 'Tuve la suerte de conocer a la Dra. Celina Suárez en un momento crítico en la fase muy inicial del COVID a principios del 2020. Sin conocernos y por contacto telefónico me atendió y siguió durante mis dos meses de confinamiento y convalecencia. Su profesionalidad y sobretodo su empatía y factor humano me ayudaron mucho. Posteriormente, volvió a demostrarlo en una situación preocupante con mi hijo, que afortunadamente no pasó a más, pero que la Dra. nos volvió a ayudar. Un placer y un honor poder seguir contando con ella si por cualquier motivo la debamos necesitar.',
          role: 'Médico Colega'
        },
        {
          name: 'Claudia Valsells',
          text: 'La Dra Celina Suárez es una gran profesional que hace dos años que es mi médico de medicina interna y ha sido de gran ayuda en todos los aspectos. Encantada de poder contar con su atención médica.',
          role: 'Paciente'
        },
        {
          name: 'Elodia Kurt Van',
          text: 'En cuanto a la Doctora Celina solo puedo decirle que ojalá hubiese más profesionales como ella. Ayudó a mi marido y nadie sabía lo que le ocurría. Ella encontró el problema y la solución. Educada y tan amable siempre. Bellísima persona y excepcional profesional.',
          role: 'Paciente'
        },
        {
          name: 'Claudia Contel',
          text: 'Celina aparte de ser compañera la considero amiga y trabajar con ella es siempre un placer. Es una gran profesional que se implica con sus pacientes y siempre busca la excelencia. Sin duda una gran doctora que tiene toda mi confianza.',
          role: 'Médico Colega'
        }
      ],
      
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
        address: 'Dirección',
        schedule: 'Horarios'
      },
      
      // Mapa
      map: {
        title: 'Visítanos',
        description: 'Encuentra nuestra clínica fácilmente. Estamos ubicados en el corazón de Barcelona con excelente acceso.'
      }
    },

    // Tratamientos
    treatments: {
      viewAll: 'Ver todos'
    },
    
    // Estadísticas
    stats: {
      title: 'Resultados que hablan por sí solos',
      subtitle: 'Nuestra experiencia y dedicación se reflejan en cada número. Miles de pacientes han transformado su confianza con nosotros.',
      patients: 'Pacientes satisfechos',
      patientsDescription: 'En programas personalizados',
      experience: 'Años de experiencia',
      experienceDescription: 'En medicina integrativa',
      treatments: 'Tratamientos realizados',
      treatmentsDescription: 'Procedimientos exitosos',
      satisfaction: 'Satisfacción del cliente',
      satisfactionDescription: 'Recomendarían nuestra clínica'
    },
    
    // Footer
    footer: {
      description: 'Medicina preventiva y regenerativa para tu mejor versión. Descubre el equilibrio perfecto entre bienestar y belleza.',
      legal: 'Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      contact: 'Contacto'
    },
    
            // CTA flotante
    cta: {
      reserve: 'Reservar valoración'
    },
    
    // Diálogo de reserva
    dialog: {
      quickReserve: 'Reserva rápida',
      namePlaceholder: 'Nombre completo',
      phonePlaceholder: 'Teléfono/WhatsApp',
      messagePlaceholder: 'Mensaje (opcional)',
      submit: 'Enviar'
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
        clinicGalleryTitle: 'Nuestras Instalaciones',
        clinicGalleryDescription: 'Espacios diseñados para tu comodidad y bienestar durante tu visita',
        scheduleText: 'Lunes a Viernes: 9:00 - 19:00\nSábado: 9:00 - 14:00',
        facilityReception: 'Recepción',
        facilityTreatmentRoom: 'Sala de Tratamientos',
        facilityConsultingRoom: 'Consultorio'
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
        resultLabel: 'Resultado',
        beforeAfterLabel: 'Antes y Después',
        beforeAfterTitle: 'Antes y Después por Tratamiento',
        galleryTitle: 'Galería de Resultados',
        description: 'Cada resultado refleja nuestro compromiso con la excelencia y la estética natural. Nuestros pacientes experimentan mejoras significativas manteniendo su esencia única.',
        resultInfo: 'Todos los resultados mostrados son reales y han sido logrados con los tratamientos que ofrecemos en nuestra clínica.'
      },
      
      // Página de tratamientos
      tratamientos: {
        title: 'Tratamientos',
        subtitle: 'Descubre nuestra amplia gama de tratamientos de medicina preventiva y regenerativa',
        description: 'Cada tratamiento está diseñado para ofrecer resultados naturales y duraderos, respetando siempre tu esencia única.',
        tabs: {
          byType: 'Por Tipo de Tratamiento',
          byProblem: 'Por Problema Específico',
          problemsSubtitle: 'Encuentra la solución perfecta para tus necesidades específicas',
          recommendedTreatments: 'Tratamientos recomendados:',
          personalizedConsult: 'Consulta personalizada'
        },
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
      success: 'Éxito',
      beforeAfter: 'Antes y después',
      faq: 'Preguntas frecuentes'
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
      reservar: 'Book Appointment',
      menu: 'Navigation menu'
    },
    
    // Home page
    home: {
      headline: 'Preventive and regenerative medicine for your best version',
      description: 'Discover the perfect balance between wellness and beauty with personalized protocols that go beyond aesthetics.',
      ctaReservar: 'Book consultation',
      ctaInfo: 'More information',
      
      // Hero slides
      hero: {
        slide1: 'Subtle results, visible to you',
        slide2: 'Precision aesthetic medicine',
        slide3: 'Natural is better',
        slide4: 'Your wellness is our priority',
        slide5: 'Advanced technology, human touch'
      },
      
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
        medicinaIntegrativa: 'Integrative Medicine',
        acidoHialuronico: 'Hyaluronic Acid',
        bioimpedancia: 'Bioimpedance',
        ultrasonido: 'Ultrasound',
        radiofrecuencia: 'Radiofrequency',
        mesoterapia: 'Mesotherapy',
        microneedling: 'Microneedling',
        bioestimuladores: 'Biostimulators',
        exosomos: 'Exosomes',
        polinucleotidos: 'Polynucleotides',
        vitaminasNctf: 'Vitamins (NCTF)',
        hilosTensores: 'Thread Lifts',
        hilosPdo: 'PDO Threads',
        neuromodulador: 'Neuromodulator',
        prp: 'PRP',
        harmonyLaser: 'Harmony Laser',
        higieneFacial: 'Deep Facial Cleansing',
        hidratacionProfunda: 'Deep Hydration',
        terapiaLed: 'LED Therapy',
        presoterapia: 'Pressotherapy',
        ondasChoque: 'Shock Waves',
        carboxiterapia: 'Carboxytherapy',
        escleroterapia: 'Sclerotherapy',
        labios: 'Lip Enhancement',
        toxinaBotulinica: 'Botulinum Toxin'
      },

      // Treatment groups
      treatmentGroups: {
        inyectables: 'Injectables',
        aparatologia: 'Technology',
        facialDermo: 'Facial / Dermo',
        vascularMetabolico: 'Vascular / Metabolic',
        integrativa: 'Integrative'
      },

      // Treatment objectives
      objectives: {
        melasmaDiscromias: {
          title: 'Melasma and Dyschromia (dark spots)',
          description: 'Treatments for dark spots with laser technology and regenerative and depigmenting actives that unify tone and restore luminosity to your skin and tissue oxygenation.'
        },
        estrias: {
          title: 'Stretch Marks',
          description: 'Treatments to improve stretch mark quality by activating local oxygenation, stimulating collagen and elastin production and deep skin regeneration from within.'
        },
        varices: {
          title: 'Varicose Veins',
          description: 'Treatments to relieve and improve the appearance of varicose veins, revitalizing your legs with non-invasive treatments that stimulate circulation and reduce pigmentation and also minimally invasive methods.'
        },
        remodelacionCorporal: {
          title: 'Body Remodeling (cellulite, sagging, localized fat)',
          description: 'Treatments to redefine your silhouette, improving firmness, texture and skin tone naturally, stimulating tissue from within.'
        },
        lineasExpresion: {
          title: 'Expression Lines',
          description: 'Treatments to soften wrinkles, with techniques that smooth expression without altering your naturalness. Visible, elegant and progressive results.'
        },
        armoniaFacial: {
          title: 'Natural Facial Harmony',
          description: 'Treatments to enhance facial harmony respecting your essence, balancing volumes and highlighting your features with elegance and naturalness.'
        },
        rejuvenecimientoPiel: {
          title: 'Skin Rejuvenation (sagging, wrinkles, spots)',
          description: 'Treatments to rejuvenate your skin with technologies and actives that restore firmness, brightness, glow, luminosity, texture and skin quality.'
        },
        acne: {
          title: 'Acne',
          description: 'Acne treatments from the root, with a comprehensive approach that balances the skin and reduces marks and breakouts, for a uniform and healthy appearance, boosting self-esteem.'
        },
        rosaceaCuperosis: {
          title: 'Rosacea and Couperose',
          description: 'Treatments to calm sensitive skin and reduce inflammation and redness with specific treatments that improve the skin barrier.'
        },
        saludCapilar: {
          title: 'Hair Health (alopecia, hair loss, shine)',
          description: 'Treatments to strengthen hair from the root, improving oxygenation, blood microcirculation, density, shine and resistance with regenerative therapies.'
        },
        controlPeso: {
          title: 'Weight Control',
          description: 'Program developed to help achieve your ideal weight in a healthy way, with professional accompaniment and body treatments that stimulate metabolism for localized fat burning, body silhouette improvement, skin quality.'
        }
      },

      // Treatment detailed content
      treatmentContent: {
        acidohialuronico: {
          title: 'Hyaluronic Acid',
          excerpt: 'Wrinkle filling and facial volume enhancement.',
          bullets: ['Deep hydration', 'Immediate results', 'Reabsorbable product'],
          faq: [
            { q: 'Is it safe?', a: 'Completely biocompatible and reabsorbable.' },
            { q: 'How long does it last?', a: 'Between 8-15 months depending on the treated area.' }
          ]
        },
        antiaging: {
          title: 'Anti-aging Protocols',
          excerpt: 'Comprehensive programs to delay aging and optimize health.',
          bullets: ['Comprehensive approach', 'Personalized medicine', 'Active prevention'],
          faq: [
            { q: 'What does an anti-aging protocol include?', a: 'Complete evaluation, supplementation, treatments and follow-up.' },
            { q: 'At what age is it recommended?', a: 'Ideal from age 30 as prevention.' }
          ]
        },
        bioestimuladores: {
          title: 'Biostimulators',
          excerpt: 'Own collagen stimulation for natural and long-lasting rejuvenation.',
          bullets: ['Stimulates own collagen', 'Natural results', 'Progressive effect'],
          faq: [
            { q: 'What are biostimulators?', a: 'Substances that stimulate natural collagen production.' },
            { q: 'How long do the effects last?', a: 'Results can last up to 2 years.' }
          ]
        },
        bioimpedancia: {
          title: 'Bioimpedance',
          excerpt: 'Body composition analysis for complete metabolic evaluation.',
          bullets: ['Precise measurement', 'Detailed analysis', 'Objective monitoring'],
          faq: [
            { q: 'What does bioimpedance measure?', a: 'Muscle mass, body fat, water and basal metabolism.' },
            { q: 'Is it painful?', a: 'No, it is completely painless and non-invasive.' }
          ]
        },
        carboxiterapia: {
          title: 'Carboxytherapy',
          excerpt: 'Medical CO2 therapy to improve circulation and oxygenation.',
          bullets: ['Improves circulation', 'Lifting effect', 'Reduces cellulite'],
          faq: [
            { q: 'How does it work?', a: 'CO2 improves oxygenation and stimulates microcirculation.' },
            { q: 'How many sessions do I need?', a: 'Between 6-10 sessions depending on the objective.' }
          ]
        },
        escleroterapia: {
          title: 'Sclerotherapy',
          excerpt: 'Treatment for varicose veins and capillaries through sclerosing injection.',
          bullets: ['Eliminates varicose veins', 'Minimally invasive', 'Quick recovery'],
          faq: [
            { q: 'Is it effective?', a: 'Very effective for small and medium varicose veins.' },
            { q: 'Are there side effects?', a: 'Minimal, there may be slight temporary inflammation.' }
          ]
        },
        exosomos: {
          title: 'Exosomes',
          excerpt: 'Advanced regenerative therapy with exosomes for cellular rejuvenation.',
          bullets: ['Regenerative medicine', 'Cellular rejuvenation', 'Advanced technology'],
          faq: [
            { q: 'What are exosomes?', a: 'Extracellular vesicles containing growth factors.' },
            { q: 'Is it a safe treatment?', a: 'Completely safe, of natural origin.' }
          ]
        },
        harmonylaser: {
          title: 'Harmony Laser Platform (DYE, 570, Pixel, Clearlift, pure and fractional Erbium, Hair Removal)',
          excerpt: 'Multifunctional laser platform for various aesthetic treatments.',
          bullets: ['Multiple applications', 'Advanced technology', 'Personalized treatments'],
          faq: [
            { q: 'What treatments does it include?', a: 'Spots, wrinkles, scars, hair removal and rejuvenation.' },
            { q: 'Is it painful?', a: 'Minimal discomfort, topical anesthesia used if necessary.' }
          ]
        },
        hidratacionprofunda: {
          title: 'Deep Hydration',
          excerpt: 'Intensive treatments to restore skin hydration and luminosity.',
          bullets: ['Intense hydration', 'Restores luminosity', 'Immediate effect'],
          faq: [
            { q: 'How long does the effect last?', a: 'Results are maintained between 4-6 months.' },
            { q: 'For what type of skin?', a: 'Ideal for dehydrated and dull skin.' }
          ]
        },
        higienefacial: {
          title: 'Deep Facial Cleansing',
          excerpt: 'Deep cleansing and purification for healthy and radiant skin.',
          bullets: ['Deep cleansing', 'Purifies pores', 'Radiant skin'],
          faq: [
            { q: 'How often?', a: 'Recommended every 4-6 weeks.' },
            { q: 'Is it for all skin types?', a: 'Yes, we adapt the treatment according to skin type.' }
          ]
        },
        hilospdo: {
          title: 'PDO Threads',
          excerpt: 'Reabsorbable threads for facial lifting and collagen stimulation.',
          bullets: ['Immediate lifting', 'Stimulates collagen', 'Reabsorbable'],
          faq: [
            { q: 'How long does the effect last?', a: 'Between 12-18 months, with progressive effect.' },
            { q: 'Is it painful?', a: 'Minimal discomfort with local anesthesia.' }
          ]
        },
        hilostensores: {
          title: 'Thread Lifts',
          excerpt: 'Non-surgical facial lifting with latest generation threads.',
          bullets: ['Lifting without surgery', 'Immediate results', 'Quick recovery'],
          faq: [
            { q: 'What areas can be treated?', a: 'Face, neck and décolletage mainly.' },
            { q: 'When are results visible?', a: 'Immediate, improving progressively.' }
          ]
        },
        labios: {
          title: 'Lip Enhancement',
          excerpt: 'Lip enhancement and definition for a natural and harmonious result.',
          bullets: ['Natural result', 'Immediate effect', 'Fully reversible'],
          faq: [
            { q: 'Does it look natural?', a: 'Yes, we always seek a harmonious and natural result.' },
            { q: 'How long does it last?', a: 'Between 6-12 months depending on the product used.' }
          ]
        },
        medicinafuncional: {
          title: 'Functional Medicine',
          excerpt: 'Comprehensive approach to optimize health and prevent diseases.',
          bullets: ['Preventive approach', 'Personalized medicine', 'Complete analysis'],
          faq: [
            { q: 'What does it include?', a: 'Complete analysis, nutritional plan and supplementation.' },
            { q: 'For whom?', a: 'Ideal for people seeking to optimize their health.' }
          ]
        },
        medicinaintegrativa: {
          title: 'Integrative Medicine',
          excerpt: 'Combination of conventional medicine and complementary therapies.',
          bullets: ['Holistic approach', 'Personalized medicine', 'Comprehensive treatment'],
          faq: [
            { q: 'What does it combine?', a: 'Conventional medicine with natural and preventive therapies.' },
            { q: 'Is it safe?', a: 'Completely safe, based on scientific evidence.' }
          ]
        },
        mesoterapia: {
          title: 'Mesotherapy',
          excerpt: 'Microinjections of active ingredients for rejuvenation and repair.',
          bullets: ['Direct active ingredients', 'Rejuvenation', 'Minimally invasive'],
          faq: [
            { q: 'What products are used?', a: 'Vitamins, minerals, amino acids and peptides.' },
            { q: 'How many sessions?', a: 'Between 3-6 sessions depending on the objective.' }
          ]
        },
        microneedling: {
          title: 'Microneedling',
          excerpt: 'Collagen stimulation through controlled microperforations.',
          bullets: ['Stimulates collagen', 'Improves texture', 'Minimal downtime'],
          faq: [
            { q: 'What is it for?', a: 'Improves texture, scars, pores and firmness.' },
            { q: 'Is it painful?', a: 'Minimal discomfort, topical anesthesia is applied.' }
          ]
        },
        neuromodulador: {
          title: 'Neuromodulator',
          excerpt: 'Muscle relaxation to prevent and treat expression wrinkles.',
          bullets: ['Prevents wrinkles', 'Natural effect', 'Minimally invasive'],
          faq: [
            { q: 'Does the application hurt?', a: 'Minimal discomfort, no anesthesia required.' },
            { q: 'When are results visible?', a: 'Between 3-7 days after application.' }
          ]
        },
        ondaschoque: {
          title: 'Shock Waves',
          excerpt: 'Wave technology for cellulite, sagging and body remodeling.',
          bullets: ['Reduces cellulite', 'Firms tissues', 'Non-invasive'],
          faq: [
            { q: 'How does it work?', a: 'Waves stimulate circulation and lymphatic drainage.' },
            { q: 'How many sessions?', a: 'Between 6-12 sessions depending on the objective.' }
          ]
        },
        peeling: {
          title: 'Chemical Peel',
          excerpt: 'Controlled exfoliation for cellular renewal and texture improvement.',
          bullets: ['Cellular renewal', 'Improves texture', 'Unifies tone'],
          faq: [
            { q: 'What types are there?', a: 'Superficial, medium and deep according to needs.' },
            { q: 'Is there peeling?', a: 'There may be slight peeling in the first days.' }
          ]
        },
        polinucleotidos: {
          title: 'Polynucleotides',
          excerpt: 'Regenerative therapy for tissue repair and rejuvenation.',
          bullets: ['Cellular repair', 'Deep hydration', 'Improves elasticity'],
          faq: [
            { q: 'How do polynucleotides work?', a: 'They stimulate cellular DNA repair and regeneration.' },
            { q: 'For which areas is it effective?', a: 'Especially effective around eyes and neck.' }
          ]
        },
        presoterapia: {
          title: 'Pressotherapy',
          excerpt: 'Lymphatic drainage through controlled pressure to eliminate toxins.',
          bullets: ['Lymphatic drainage', 'Eliminates toxins', 'Improves circulation'],
          faq: [
            { q: 'What is it for?', a: 'Fluid retention, cellulite and circulatory improvement.' },
            { q: 'Is it relaxing?', a: 'Very relaxing, many patients fall asleep.' }
          ]
        },
        prp: {
          title: 'PRP',
          excerpt: 'Platelet Rich Plasma for natural regeneration with your own blood.',
          bullets: ['100% natural', 'Stimulates regeneration', 'No adverse effects'],
          faq: [
            { q: 'How is PRP obtained?', a: 'Extracted from your own blood through centrifugation.' },
            { q: 'What is it used for?', a: 'Facial, hair rejuvenation and tissue regeneration.' }
          ]
        },
        radiofrecuencia: {
          title: 'Radiofrequency',
          excerpt: 'Technology for firming and collagen stimulation through heat.',
          bullets: ['Firms tissues', 'Stimulates collagen', 'No downtime'],
          faq: [
            { q: 'Do you feel heat?', a: 'Yes, a pleasant and controlled heat sensation.' },
            { q: 'How many sessions?', a: 'Between 4-8 sessions depending on the area to treat.' }
          ]
        },
        terapialed: {
          title: 'LED Therapy',
          excerpt: 'LED light phototherapy for rejuvenation and cellular repair.',
          bullets: ['Stimulates cells', 'Anti-inflammatory', 'No side effects'],
          faq: [
            { q: 'How does it work?', a: 'LED light stimulates cellular activity and collagen production.' },
            { q: 'Is it safe?', a: 'Completely safe, no contraindications.' }
          ]
        },
        toxinabotulinica: {
          title: 'Botulinum Toxin',
          excerpt: 'Treatment for dynamic wrinkles and excessive sweating.',
          bullets: ['Eliminates dynamic wrinkles', 'Natural effect', 'Long-lasting results'],
          faq: [
            { q: 'How long does the effect last?', a: 'Between 4-6 months depending on the treated area.' },
            { q: 'Does it look natural?', a: 'Yes, it allows natural expressions.' }
          ]
        },
        ultrasonido: {
          title: 'Ultrasound',
          excerpt: 'Ultrasonic technology for deep firming and non-invasive lifting.',
          bullets: ['Deep lifting', 'Non-invasive', 'Long-lasting results'],
          faq: [
            { q: 'How does it work?', a: 'Focused ultrasound stimulates deep skin layers.' },
            { q: 'When are results visible?', a: 'Gradually over 2-3 months.' }
          ]
        },
        vitaminasnctf: {
          title: 'Vitamins (NCTF)',
          excerpt: 'Cocktail of vitamins and nutrients for deep facial revitalization.',
          bullets: ['53 active ingredients', 'Intense hydration', 'Immediate luminosity'],
          faq: [
            { q: 'What does NCTF contain?', a: 'Vitamins, amino acids, minerals and hyaluronic acid.' },
            { q: 'When are results visible?', a: 'Immediate luminosity, progressive improvement over weeks.' }
          ]
        }
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
      beforeAfterLabel: 'Before and After',
      
      // Reviews
      reviewsTitle: 'What our patients say',
      reviews: [
        {
          name: 'Dr. Joan Venceslao',
          text: 'I was fortunate to meet Dr. Celina Suárez at a critical moment in the very early phase of COVID in early 2020. Without knowing each other and by telephone contact, she attended to me and followed me during my two months of confinement and convalescence. Her professionalism and especially her empathy and human factor helped me a lot. Later, she demonstrated it again in a worrying situation with my son, which fortunately did not go further, but Dr. Celina helped us again. A pleasure and an honor to continue counting on her if for any reason we should need her.',
          role: 'Medical Colleague'
        },
        {
          name: 'Claudia Valsells',
          text: 'Dr. Celina Suárez is a great professional who has been my internal medicine doctor for two years and has been of great help in all aspects. Delighted to be able to count on her medical attention.',
          role: 'Patient'
        },
        {
          name: 'Elodia Kurt Van',
          text: 'Regarding Dr. Celina, I can only say that I wish there were more professionals like her. She helped my husband and no one knew what was wrong with him. She found the problem and the solution. Polite and so kind always. Beautiful person and exceptional professional.',
          role: 'Patient'
        },
        {
          name: 'Claudia Contel',
          text: 'Celina, apart from being a colleague, I consider her a friend and working with her is always a pleasure. She is a great professional who gets involved with her patients and always seeks excellence. Without a doubt, a great doctor who has all my confidence.',
          role: 'Medical Colleague'
        }
      ],
      
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
        whatsappText: 'Write to us!',
        whatsappAction: 'Contact via WhatsApp',
        email: 'Email',
        address: 'Address',
        schedule: 'Schedule'
      },
      
      // Map
      map: {
        title: 'Visit Us',
        description: 'Find our clinic easily. We are located in the heart of Barcelona with excellent access.'
      }
    },

    // Treatments
    treatments: {
      viewAll: 'View all'
    },
    
    // Statistics  
    stats: {
      title: 'Results that speak for themselves',
      subtitle: 'Our experience and dedication are reflected in every number. Thousands of patients have transformed their confidence with us.',
      patients: 'Satisfied patients',
      patientsDescription: 'In personalized programs',
      experience: 'Years of experience',
      experienceDescription: 'In integrative medicine',
      treatments: 'Treatments performed',
      treatmentsDescription: 'Successful procedures',
      satisfaction: 'Customer satisfaction',
      satisfactionDescription: 'Would recommend our clinic'
    },
    
    // Footer
    footer: {
      description: 'Preventive and regenerative medicine for your best version. Discover the perfect balance between wellness and beauty.',
      legal: 'Legal',
      privacy: 'Privacy',
      cookies: 'Cookies',
      contact: 'Contact'
    },
    
    // Floating CTA
    cta: {
      reserve: 'Book consultation'
    },
    
    // Reserve dialog
    dialog: {
      quickReserve: 'Quick booking',
      namePlaceholder: 'Full name',
      phonePlaceholder: 'Phone/WhatsApp',
      messagePlaceholder: 'Message (optional)',
      submit: 'Send'
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
        clinicGalleryTitle: 'Our Facilities',
        clinicGalleryDescription: 'Spaces designed for your comfort and well-being during your visit',
        scheduleText: 'Monday to Friday: 9:00 - 19:00\nSaturday: 9:00 - 14:00',
        facilityReception: 'Reception',
        facilityTreatmentRoom: 'Treatment Room',
        facilityConsultingRoom: 'Consulting Room'
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
        resultLabel: 'Result',
        beforeAfterLabel: 'Before and After',
        beforeAfterTitle: 'Before and After by Treatment',
        galleryTitle: 'Results Gallery',
        description: 'Each result reflects our commitment to excellence and natural aesthetics. Our patients experience significant improvements while maintaining their unique essence.',
        resultInfo: 'All results shown are real and have been achieved with the treatments we offer at our clinic.'
      },
      
      // Treatments page
      tratamientos: {
        title: 'Treatments',
        subtitle: 'Discover our comprehensive range of preventive and regenerative medicine treatments',
        description: 'Each treatment is designed to offer natural and long-lasting results, always respecting your unique essence.',
        tabs: {
          byType: 'By Treatment Type',
          byProblem: 'By Specific Problem',
          problemsSubtitle: 'Find the perfect solution for your specific needs',
          recommendedTreatments: 'Recommended treatments:',
          personalizedConsult: 'Personalized consultation'
        },
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
      success: 'Success',
      beforeAfter: 'Before and After',
      faq: 'Frequently Asked Questions'
    }
  }
}

export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[language]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // Fallback to Spanish if key not found
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value = translations.es as any
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