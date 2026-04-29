import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      colorClasses: "bg-blue-50 border-blue-200",
      titleClasses: "text-blue-700",
      skillClasses: "bg-blue-100 border-blue-200 text-blue-800",
      description: "Construcción de interfaces y experiencias web interactivas.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "React",
        "Bootstrap 5",
        "Responsive Design"
      ]
    },
    {
      title: "Lógica",
      colorClasses: "bg-purple-50 border-purple-200",
      titleClasses: "text-purple-700",
      skillClasses: "bg-purple-100 border-purple-200 text-purple-800",
      description: "Resolución de problemas y estructura de funcionalidades.",
      skills: [
        "Manipulación del DOM",
        "Eventos y validación de formularios",
        "Arrays y objetos",
        "LocalStorage",
        "Lógica de negocio",
        "Consumo e integración de APIs REST"
      ]
    },
    {
      title: "Herramientas",
      colorClasses: "bg-emerald-50 border-emerald-200",
      titleClasses: "text-emerald-700",
      skillClasses: "bg-emerald-100 border-emerald-200 text-emerald-800",
      description: "Flujo de trabajo y despliegue de proyectos.",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Vite",
        "Netlify",
        "Vercel"
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-bg-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Skills y Tecnologías
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Conocimientos organizados por áreas para mostrar cómo construyo soluciones web de forma estructurada
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`card p-6 border-2 ${category.colorClasses}`}
            >
              <h3 className={`text-2xl font-bold mb-6 text-center ${category.titleClasses}`}>
                {category.title}
              </h3>
              <p className="text-text-secondary text-sm text-center mb-6">
                {category.description}
              </p>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className={`px-3 py-2 rounded-lg border font-medium ${category.skillClasses}`}
                  >
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de certificaciones/aprendizaje continuo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Aprendizaje Continuo
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Constantemente expandiendo mis conocimientos en nuevas tecnologías y mejores prácticas. 
              Actualmente enfocado en profundizar en React, Node.js y arquitecturas escalables.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Docker
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                AWS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
