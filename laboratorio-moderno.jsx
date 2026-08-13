import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, Play, FileText, Award, Users, Clock, Target } from 'lucide-react';

export default function CursoLaboratorioModerno() {
  const [activeModule, setActiveModule] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    {
      id: 1,
      number: "01",
      title: "Organização e Estrutura",
      subtitle: "do Laboratório",
      duration: "2,5h",
      icon: "🏗️",
      gradient: "from-cyan-400 to-blue-600",
      description: "Estrutura física, equipamentos básicos, vidrarias e organização das estações de trabalho.",
      topics: ["Estrutura física", "Equipamentos básicos", "Vidrarias", "Organização de espaços"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      number: "02",
      title: "Noções de",
      subtitle: "Biossegurança",
      duration: "2,5h",
      icon: "⚠️",
      gradient: "from-amber-400 to-red-600",
      description: "Regras de conduta, classificação de riscos, equipamentos de proteção e esterilização.",
      topics: ["Normas legais", "Classificação de riscos", "Equipamento de proteção", "Descontaminação"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      number: "03",
      title: "Gestão de",
      subtitle: "Produtos Químicos",
      duration: "2h",
      icon: "🧪",
      gradient: "from-violet-400 to-purple-600",
      description: "Classificação GHS, rótulos, armazenamento seguro e descarte adequado de resíduos.",
      topics: ["Classificação GHS", "Rótulos e FDS", "Armazenamento", "Descarte de resíduos"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      number: "04",
      title: "Procedimentos",
      subtitle: "Laboratoriais Básicos",
      duration: "3h",
      icon: "🔬",
      gradient: "from-emerald-400 to-green-600",
      description: "Planejamento de experimentos, preparo de reagentes, SOPs e manejo de resíduos.",
      topics: ["Planejamento", "Preparo de reagentes", "Pipetadores", "Procedimentos"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const objectives = [
    { icon: "✓", text: "Compreender estrutura e componentes de um laboratório" },
    { icon: "✓", text: "Utilizar corretamente equipamentos e dispositivos" },
    { icon: "✓", text: "Reconhecer e classificar riscos laboratoriais" },
    { icon: "✓", text: "Gerenciar produtos químicos e resíduos" },
    { icon: "✓", text: "Planejar e executar procedimentos com segurança" },
    { icon: "✓", text: "Otimizar workflow em laboratórios biomédicos" }
  ];

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-md bg-slate-950/70 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center backdrop-blur-sm">
                <BookOpen size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Fundamentos Laboratoriais</h1>
                <p className="text-sm text-slate-400">FOP-UNICAMP • 2025</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#modulos" className="text-slate-300 hover:text-cyan-400 transition-colors">Módulos</a>
              <a href="#objetivos" className="text-slate-300 hover:text-cyan-400 transition-colors">Objetivos</a>
              <a href="#avaliacao" className="text-slate-300 hover:text-cyan-400 transition-colors">Avaliação</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div style={{ transform: `translateY(${scrollY * 0.3}px)` }} className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-sm">
              <p className="text-sm text-cyan-300">Pesquisas Biomédicas • 2º Semestre 2025</p>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fundamentos da Atividade Laboratorial
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Estrutura, biossegurança, gerenciamento químico e procedimentos essenciais para pesquisa em ambientes laboratoriais
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-slate-600/50 backdrop-blur-sm">
                <p className="text-sm text-slate-400">Carga Horária</p>
                <p className="text-xl font-bold">~10 horas</p>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-slate-600/50 backdrop-blur-sm">
                <p className="text-sm text-slate-400">Módulos</p>
                <p className="text-xl font-bold">4 cursos</p>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-slate-600/50 backdrop-blur-sm">
                <p className="text-sm text-slate-400">Certificado</p>
                <p className="text-xl font-bold">Reconhecido</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="animate-bounce text-slate-400">
              <ChevronDown size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Módulos do Curso</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setActiveModule(idx)}
              >
                {/* Card com glassmorphism */}
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 p-8">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* 3D effect border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-5xl font-bold text-slate-500 mb-2">{mod.number}</div>
                        <h3 className="text-2xl font-bold leading-tight">
                          <span className="block">{mod.title}</span>
                          <span className={`bg-gradient-to-r ${mod.gradient} bg-clip-text text-transparent`}>
                            {mod.subtitle}
                          </span>
                        </h3>
                      </div>
                      <div className="text-4xl">{mod.icon}</div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {mod.description}
                    </p>

                    {/* Topics */}
                    <div className="space-y-2 mb-6">
                      {mod.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                          <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                          {topic}
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Duração</p>
                        <p className="text-lg font-bold">{mod.duration}</p>
                      </div>
                      <button className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium transition-all flex items-center gap-2 group">
                        <Play size={16} />
                        Acessar
                        <ChevronDown size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objetivos" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Objetivos do Curso</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-sm font-bold">{obj.icon}</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">{obj.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Module Detail */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conteúdo Detalhado</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Module selector */}
            <div className="space-y-3">
              {modules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeModule === idx
                      ? `bg-gradient-to-r ${mod.gradient} bg-opacity-20 border border-white/20 backdrop-blur-sm`
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="font-bold">{mod.title}</div>
                  <div className="text-sm text-slate-400">{mod.subtitle}</div>
                </button>
              ))}
            </div>

            {/* Content display */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
                {/* Module header */}
                <div className={`h-32 bg-gradient-to-r ${modules[activeModule].gradient} opacity-80 flex items-center p-8`}>
                  <div>
                    <div className="text-6xl font-bold opacity-50">{modules[activeModule].number}</div>
                    <h3 className="text-3xl font-bold">
                      {modules[activeModule].title} {modules[activeModule].subtitle}
                    </h3>
                  </div>
                </div>

                {/* Video section */}
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4">Aula em Vídeo</h4>
                  <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-2xl mb-8">
                    <iframe
                      width="100%"
                      height="100%"
                      src={modules[activeModule].video}
                      title={modules[activeModule].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Topics */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">Tópicos Principais</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {modules[activeModule].topics.map((topic, i) => (
                        <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                          <p className="font-medium">{topic}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resources */}
                <div className="border-t border-white/10 p-8">
                  <h4 className="text-xl font-bold mb-4">Recursos</h4>
                  <div className="space-y-3">
                    <button className="w-full p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-left flex items-center justify-between group">
                      <span className="font-medium">📊 Slides da Aula</span>
                      <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                    <button className="w-full p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-left flex items-center justify-between group">
                      <span className="font-medium">📄 Referências Bibliográficas</span>
                      <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                    <button className="w-full p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-left flex items-center justify-between group">
                      <span className="font-medium">🔒 Fichas de Segurança (FDS)</span>
                      <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section id="avaliacao" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Critérios de Avaliação</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Por Módulo", value: "1 ponto", desc: "Prova teórica" },
              { label: "Avaliação Final", value: "5 pontos", desc: "Atividade prática" },
              { label: "Nota Total", value: "10 pontos", desc: "Aprovação ≥ 7" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                <p className="text-sm text-slate-400 mb-2">{item.label}</p>
                <div className="text-4xl font-bold mb-3">{item.value}</div>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
            <p className="text-amber-100">
              <strong>Aprovação:</strong> Mínimo 70% de atividades completas + nota final ≥ 7. Alunos aprovados recebem certificado comprovando requisitos mínimos para atividades laboratoriais.
            </p>
          </div>
        </div>
      </section>

      {/* Coordinator Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Coordenação</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold">Fábio Haach Téo</h3>
              </div>
              <p className="text-slate-300 mb-3">Supervisor de Seção</p>
              <p className="text-sm text-slate-400">Laboratórios de Ensaios Biológicos<br/>Coordenadoria de Pesquisa</p>
            </div>

            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold">Wanderlei Francisco Vieira</h3>
              </div>
              <p className="text-slate-300 mb-3">Supervisor de Seção</p>
              <p className="text-sm text-slate-400">Laboratórios de Ensaios Mecânicos<br/>Coordenadoria de Pesquisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-2">Faculdade de Odontologia de Piracicaba (FOP) - UNICAMP</p>
          <p className="text-xs text-slate-500">Coordenadoria de Pesquisa • 2º semestre de 2025</p>
        </div>
      </footer>
    </div>
  );
}
