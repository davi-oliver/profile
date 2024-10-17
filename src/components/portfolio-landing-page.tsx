'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'

export function PortfolioLandingPageComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Bancos de Dados', icon: <FaDatabase /> },
  ]

  const careerTimeline = [
    { year: '2019', title: 'Conclusão Ensino Técnico', description: "Ensino técnico Informática para internet - CEP" },
    { year: '2020', title: 'Estágiario', description: "Desenvolvedor Front-end com Flutter&Dart" },
    { year: '2021', title: 'Front-end Junior', description: "Desenvolvedor Front-end com Flutter&Dart e React" },
    { year: '2022', title: 'Front-end Junior', description: "Desenvolvedor Front-end com Node.js, NestJS, React, Next.js, Flutter&Dart" },
    { year: '2023', title: 'Front-end Pleno', description: "Desenvolvedor Front-end com Node.js, NestJS, React, Next.js, Flutter&Dart" },
    { year: '2024', title: 'Software Engineer', description: "Desenvolvedor Front-end com Node.js, NestJS, React, Next.js, Flutter&Dart, Firebase, Google Analytics, Teste A/B, Git, GitHub, Slack, ClickUp, PostgresSql, MongoDB, TypeScript, JavaScript." },
  ]

  const projects = [
    {

      name: 'Fale Procon Uberlândia',
      url: 'https://faleprocon.uberlandia.mg.gov.br/',
      description: 'Fale Procon Uberlândia: A System for receiving consumer complaints aimed at handling complaints about services provided, using technologies such as TypeScript, Node.js, JavaScript, Next.js and Nest.js. The system was designed to serve consumers, suppliers and Procon employees, offering an efficient and scalable interface, capable of supporting simultaneous access and multiple accounts. TypeScript and Node.js were used to build a secure and optimized API, ensuring high performance and fast response even during peak access. Next.js provided a dynamic and easy-to-use user interface, both for consumers to register their complaints and for suppliers to monitor the process and respond to demands. Nest.js allowed for a robust and modular structure, facilitating the maintenance and scalability of the system. During campaigns to encourage trade, the system offers continuous support, collecting and analyzing a large volume of complaints and feedback. By analyzing the data generated, Procon managers can identify problem patterns, assess the quality of services provided and provide reports in real time, helping to mediate conflicts between consumers and suppliers efficiently.',
    },
    {
      name: 'QVIM',
      url: 'https://www.linkedin.com/in/davi-oliveira-teixeira/',
      description: "QVIM (Qualidade de Vida Municipal): Satisfaction survey program aimed at assessing citizens opinions on public works in the areas of leisure, health and education. The system was developed using technologies such as TypeScript, Node.js, JavaScript, Next.js and Nest.js, providing a robust and scalable platform for data collection and analysis. The program allowed citizens to respond to digital questionnaires, and the information collected was used to generate detailed statistics on population satisfaction. With this data, it was possible to identify areas that needed improvement, in addition to evaluating the real impact of the works on communities. TypeScript and Node.js were essential for building a secure and efficient API, while Next.js and Nest.js facilitated the creation of a responsive interface, ensuring an excellent user experience. Satisfaction statistics were presented in interactive dashboards, allowing public managers to make decisions based on real and updated data.By analyzing the data, it was possible to identify trends in satisfaction and dissatisfaction in real time, allowing for rapid adjustments to public projects and closer alignment with the population's needs.",
    },
    {
      name: 'Sistema de Triagem de Vacinação COVID-19',
      url: 'https://www.linkedin.com/in/davi-oliveira-teixeira/',
      description: 'Sistema de triagem de vacinação COVID-19 usando Flutter e Firebase, que registrava informações sobre os pacientes a serem vacinados. Esta solução otimizou o processo de identificação dos cidadãos, utilizando QR Codes para facilitar o acesso e a validação dos dados. Aproveitei o banco de dados em tempo real do Firebase e sua segurança para garantir que o processo fosse eficiente e que as informações sensíveis permanecessem protegidas. Utilizei o Google Analytics para monitorar a eficácia do sistema de triagem, analisando as interações dos usuários e o desempenho do sistema. Essa abordagem orientada por dados ajudou a refinar a solução ao longo do tempo, melhorando a eficiência operacional e garantindo que o processo de vacinação fosse ágil e seguro. Com Dart, desenvolvi um sistema responsivo e confiável que se integrou perfeitamente à infraestrutura existente da empresa. A eficiência do Dart permitiu um rápido processamento de dados e melhorou a experiência do usuário, essencial para manter altos padrões operacionais durante a campanha de vacinação e no uso de Tablets (utilizados pelos profissionais).',
    },
    {
      name: 'Health Surveillance Kombate',
      url: 'https://www.linkedin.com/in/davi-oliveira-teixeira/',
      description: 'Desenvolvi um sistema de vigilância sanitária usando Flutter e Firebase, focado em levantamentos estatísticos de propriedades da cidade e na unificação e identificação de locais com focos do mosquito Aedes aegypti. O sistema otimizou o processo de identificação de áreas críticas, utilizando QR Codes para facilitar o acesso e a validação dos dados de cada propriedade. Aproveitei o banco de dados em tempo real do Firebase e sua segurança para garantir que o processo fosse eficiente e que as informações sensíveis permanecessem protegidas. Utilizei o Google Analytics para monitorar a eficácia do sistema de vigilância, analisando as interações dos usuários e o desempenho geral da solução. Essa abordagem orientada por dados permitiu refinar o sistema ao longo do tempo, melhorando a eficiência operacional e garantindo que o monitoramento das áreas fosse ágil e seguro. Com Dart, desenvolvi um sistema responsivo e confiável que se integrou perfeitamente à infraestrutura existente da organização. A eficiência do Dart permitiu um rápido processamento de dados, essencial para manter altos padrões operacionais durante a campanha contra o Aedes aegypti, especialmente no uso de tablets pelos profissionais de campo.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white overflow-hidden">
      {/* Fundo animado */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 10%)`,
        }}
      />

      {/* Cabeçalho */}
      <header className="p-6">
        <h1 className="text-4xl font-bold">Davi O. Teixeira</h1>
        <p className="text-xl">Software Engineer</p>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-6 py-12">
        {/* Cartões animados */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((i) => (
              <motion.div
                key={i.name}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{i.name}</h3>
                <p className="text-gray-300 text-xs">
                  {i.description}
                </p>
                <a href={i.url} target="_blank" rel="noopener noreferrer" className="text-white underline">

                  Saiba mais
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Grade de habilidades */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Linha do tempo da carreira */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Progresso na Carreira</h2>
          <div className="relative">
            {careerTimeline.map((event, index) => (
              <motion.div
                key={event.year}
                className="mb-8 flex"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-4">
                  <div className="text-lg font-semibold">{event.year}</div>
                </div>
                <div className="flex-grow pl-4 border-l-2 border-white">
                  <div className="text-xl font-semibold">{event.title}</div>
                  <p className="text-gray-300">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center p-6 mt-12">
        <p>&copy; 2024 Davi O. Teixeira. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}