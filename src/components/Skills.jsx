import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  // Puedes personalizar estas tecnologías según tu experiencia
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Avanzado" },
        { name: "JavaScript", level: "Avanzado" },
        { name: "HTML5", level: "Avanzado" },
        { name: "CSS3", level: "Avanzado" },
        { name: "Tailwind CSS", level: "Intermedio" },
        { name: "Bootstrap", level: "Intermedio" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Intermedio" },
        { name: "Express.js", level: "Intermedio" },
        { name: "PostgreSQL", level: "Intermedio" },
        { name: "MongoDB", level: "Básico" },
        { name: "API REST", level: "Intermedio" }
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", level: "Intermedio" },
        { name: "GitHub", level: "Intermedio" },
        { name: "Visual Studio", level: "Avanzado" },
        { name: "Postman", level: "Intermedio" },
        { name: "Vite", level: "Intermedio" },
        { name: "Netlify", level: "Básico" }
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Avanzado':
        return 'bg-green-500'
      case 'Intermedio':
        return 'bg-accent'
      case 'Básico':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-400'
    }
  }

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Avanzado':
        return 'w-5/6'
      case 'Intermedio':
        return 'w-4/6'
      case 'Básico':
        return 'w-2/6'
      default:
        return 'w-1/6'
    }
  }

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
            Skills & Tecnologías
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Tecnologías y herramientas que manejo para crear soluciones web completas
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
              className="card p-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-primary">{skill.name}</span>
                      <span className="text-sm text-text-secondary">{skill.level}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                      />
                    </div>
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
