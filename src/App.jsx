import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, Play, FileText, Users, Clock } from 'lucide-react';

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

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-md bg-slate-950/70 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img src="https://www.fop.unicamp.br/wp-content/themes/bx-unicamp-multisite/assets/img/logo-unicamp-fundo-escuro.svg" alt="UNICAMP" className="h-12 w-auto" />
                <div className="w-px h-12 bg-white/20"></div>
                <img src="https://www.fop.unicamp.br/wp-content/uploads/sites/44/2024/08/logo_fop_fundo_escuro-1.svg" alt="FOP" className="h-12 w-auto" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Fundamentos Laboratoriais</h1>
                <p className="text-xs text-slate-400">FOP-UNICAMP • 2025</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div style={{ transform: `translateY(${scrollY * 0.3}px)` }} className="text-center">
            <div className="flex items-center justify-center gap-8 mb-8">
              <img src="https://www.fop.unicamp.br/wp-content/themes/bx-unicamp-multisite/assets/img/logo-unicamp-fundo-escuro.svg" alt="UNICAMP" className="h-20 w-auto opacity-90" />
              <img src="https://www.fop.unicamp.br/wp-content/uploads/sites/44/2024/08/logo_fop_fundo_escuro-1.svg" alt="FOP" className="h-20 w-auto opacity-90" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fundamentos da Atividade Laboratorial
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Estrutura, biossegurança, gerenciamento químico e procedimentos essenciais
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Módulos do Curso</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod, idx) => (
              <div key={idx} className="group cursor-pointer" onClick={() => setActiveModule(idx)}>
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-slate-500 mb-2">{mod.number}</div>
                    <h3 className="text-2xl font-bold leading-tight mb-6">
                      <span className="block">{mod.title}</span>
                      <span className={`bg-gradient-to-r ${mod.gradient} bg-clip-text text-transparent`}>
                        {mod.subtitle}
                      </span>
                    </h3>
                    <p className="text-slate-300 text-sm mb-6">{mod.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div>
                        <p className="text-xs text-slate-500">Duração</p>
                        <p className="text-lg font-bold">{mod.duration}</p>
                      </div>
                      <button className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium">
                        Acessar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              {modules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeModule === idx
                      ? `bg-gradient-to-r ${mod.gradient} bg-opacity-20 border border-white/20`
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className="font-bold">{mod.title}</div>
                  <div className="text-sm text-slate-400">{mod.subtitle}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className={`h-32 bg-gradient-to-r ${modules[activeModule].gradient} opacity-80 flex items-center p-8`}>
                  <h3 className="text-3xl font-bold">
                    {modules[activeModule].title} {modules[activeModule].subtitle}
                  </h3>
                </div>
                
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4">Aula em Vídeo</h4>
                  <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden mb-8">
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

                  <h4 className="text-xl font-bold mb-4">Tópicos Principais</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {modules[activeModule].topics.map((topic, i) => (
                      <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="font-medium">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-6">
              <img src="https://www.fop.unicamp.br/wp-content/themes/bx-unicamp-multisite/assets/img/logo-unicamp-fundo-escuro.svg" alt="UNICAMP" className="h-12 w-auto opacity-75" />
              <img src="https://www.fop.unicamp.br/wp-content/uploads/sites/44/2024/08/logo_fop_fundo_escuro-1.svg" alt="FOP" className="h-12 w-auto opacity-75" />
            </div>
            <p className="text-slate-400">Faculdade de Odontologia de Piracicaba (FOP) - UNICAMP</p>
            <p className="text-xs text-slate-500">Coordenadoria de Pesquisa • 2º semestre de 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
