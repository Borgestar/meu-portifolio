import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Layout, Code2, ChevronRight, Terminal, CheckCircle2, MessageCircle, GraduationCap, Menu, X } from 'lucide-react';

// --- IMPORTANTE: IMAGENS ---
import logoImg from './assets/logo.png'; 
import bpoImg from './assets/projeto-bpo.png';
import lavajatoImg from './assets/projeto-lavajato.png';
import perfilImg from './assets/perfil.png'; 

function App() {
  // Estado para controlar se o menu do celular está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
        
      {/* Efeitos de luz de fundo */}
      <div className="absolute top-0 left-[-20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-[-20%] w-[300px] md:w-[500px] h-[400px] md:h-[600px] bg-indigo-600/20 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-0 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
              onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}}
            />
            <div className="hidden text-xl font-bold text-cyan-400 items-center gap-2"><Terminal size={24} /> DevPortfolio.</div>
          </div>
          
          {/* Menu Desktop (Escondido no Mobile) */}
          <div className="hidden md:flex gap-8 font-medium text-sm">
            <a href="#sobre" className="text-slate-400 hover:text-cyan-400 transition relative group">Sobre</a>
            <a href="#projetos" className="text-slate-400 hover:text-cyan-400 transition relative group">Projetos</a>
            <a href="#contato" className="text-slate-400 hover:text-cyan-400 transition relative group">Contato</a>
          </div>

          {/* Botão Menu Mobile (Só aparece no Mobile) */}
          <button className="md:hidden text-slate-300 hover:text-cyan-400 transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
                <a href="#sobre" className="text-lg text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                <a href="#projetos" className="text-lg text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50" onClick={() => setIsMenuOpen(false)}>Projetos</a>
                <a href="#contato" className="text-lg text-slate-300 hover:text-cyan-400 py-2" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="sobre" className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Texto (Esquerda Desktop / Baixo Mobile) */}
          <div className="md:col-span-7 order-2 md:order-1 flex flex-col md:items-start items-center text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-800/50 font-mono text-[10px] md:text-xs mb-6">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Open to work
            </span>
            
            <h2 className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 leading-tight">
                Lucas Borges.
            </h2>
            
            <h3 className="text-xl md:text-4xl font-bold text-slate-400 mb-6">
                Desenvolvedor Fullstack & <span className="text-cyan-400 block md:inline">Performance Enthusiast</span>.
            </h3>
            
            {/* BIO */}
            <div className="max-w-2xl text-slate-400 text-sm md:text-lg mb-8 leading-relaxed space-y-4">
                <p>
                    Atualmente cursando <strong>Análise e Desenvolvimento de Sistemas</strong>. 
                    Meu objetivo é unir a base teórica acadêmica com a prática moderna de mercado.
                </p>
                <p>
                    Não sou apenas um "codificador". Crio soluções digitais estratégicas, desde sistemas complexos (ERP) 
                    até interfaces de alta conversão.
                </p>
            </div>

            <div className="flex items-center gap-2 mb-8 text-xs md:text-sm font-medium text-cyan-500/80 bg-cyan-950/30 px-4 py-2 rounded-lg border border-cyan-900/30 text-left">
                <GraduationCap size={18} className="shrink-0"/>
                <span>Em formação contínua em Tecnologia e Inovação</span>
            </div>
            
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
                {/* BOTÃO WHATSAPP */}
                <a href="https://wa.me/5521979779313" target="_blank" rel="noreferrer" className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.6)] transition-all flex items-center justify-center gap-2 group text-sm md:text-base w-full sm:w-auto">
                    <MessageCircle size={18} /> Chamar no WhatsApp
                </a>
                <a href="#projetos" className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800 transition flex items-center justify-center gap-2 backdrop-blur-sm text-sm md:text-base w-full sm:w-auto">
                    Ver Projetos <ChevronRight size={18} />
                </a>
            </div>
          </div>

          {/* Foto (Direita Desktop / Topo Mobile) */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center relative mb-6 md:mb-0">
            <div className="relative inline-block group">
                <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full scale-110"></div>
                <img 
                    src={perfilImg} 
                    alt="Lucas Borges" 
                    className="relative w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-slate-900 object-cover shadow-2xl z-10"
                    onError={(e) => {e.target.src='https://ui-avatars.com/api/?name=Lucas+Borges&background=0D9488&color=fff&size=256'}} 
                />
                 <div className="absolute bottom-4 right-4 bg-slate-900 rounded-full p-2 border border-slate-700 z-20">
                    <Code2 size={24} className="text-cyan-400" />
                 </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stack Section */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-slate-100">
            <Code2 className="text-cyan-400" size={24} /> Stack Principal
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {['Node.js', 'React.js', 'MongoDB Atlas', 'JavaScript', 'Express', 'Railway', 'Tailwind CSS', 'Vite'].map((tech) => (
              <div key={tech} className="px-3 py-2 md:px-4 md:py-2 bg-slate-800/60 rounded-full border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-300 transition cursor-default text-[10px] md:text-xs font-medium backdrop-blur-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-16 md:py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
             <Layout className="text-cyan-400" size={32} />
             <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Projetos Selecionados</h3>
          </div>
          
          <div className="grid gap-16 md:gap-20">
            
            {/* PROJETO 1: BPO / ERP */}
            <div className="group grid md:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Imagem */}
              <div className="md:col-span-7 relative rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900 shadow-2xl group-hover:shadow-cyan-500/10 transition-all duration-500 h-[200px] sm:h-[300px] md:h-[350px]">
                  <div className="h-8 bg-slate-800 flex items-center px-3 gap-1.5 border-b border-slate-700/50 absolute top-0 w-full z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <img 
                    src={bpoImg} 
                    alt="Sistema BPO" 
                    className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-in-out hover:object-bottom pt-8" 
                  />
              </div>

              {/* Texto */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="text-cyan-400 font-mono text-xs mb-3 tracking-wider uppercase font-bold">SaaS & Finanças</div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-slate-100">Plataforma de Gestão BPO</h4>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">
                  Sistema completo para terceirização financeira e administrativa. 
                  Inclui dashboards interativos e controle de fluxo de caixa.
                </p>
                
                <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="text-cyan-500"/> Dashboard Administrativo</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="text-cyan-500"/> Gestão de Planos</li>
                </ul>

                <div className="flex gap-5">
                  <a href="https://conheca.lcshub.com.br" target="_blank" rel="noreferrer" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 border-b border-cyan-400/30 hover:border-cyan-300 pb-1 transition">
                    Ver Case Study
                  </a>
                </div>
              </div>
            </div>

            {/* PROJETO 2: LAVA JATO */}
            <div className="group grid md:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Texto (Vem primeiro no desktop, segundo no mobile) */}
              <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
                <div className="text-indigo-400 font-mono text-xs mb-3 tracking-wider uppercase font-bold">Landing Page & Negócios Locais</div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-slate-100">Lucas Lava Jato</h4>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">
                  Página de alta conversão focada em serviços automotivos. Design moderno, clean e 
                  totalmente responsivo.
                </p>
                
                <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> SEO Local Otimizado</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> CTA de Alta Conversão</li>
                </ul>

                <div className="flex gap-5">
                  <a href="https://borgestar.github.io/lading-page-lava-jato" target="_blank" rel="noreferrer" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 border-b border-indigo-400/30 hover:border-indigo-300 pb-1 transition">
                    Ver Online
                  </a>
                </div>
              </div>

               {/* Imagem */}
               <div className="md:col-span-7 order-1 md:order-2 relative rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900 shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-500 h-[200px] sm:h-[300px] md:h-[350px]">
                  <div className="h-8 bg-slate-800 flex items-center px-3 gap-1.5 border-b border-slate-700/50 absolute top-0 w-full z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <img 
                    src={lavajatoImg} 
                    alt="Landing Page Lava Jato" 
                    className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-in-out hover:object-bottom pt-8" 
                  />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 md:py-24 px-6 relative z-10 bg-slate-900/30 backdrop-blur-lg border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">Precisa alavancar seu projeto?</h3>
          <p className="text-slate-400 mb-10 text-lg">
            Seja para organizar sua empresa com um sistema sob medida ou vender mais com uma Landing Page profissional.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/5521979779313" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] transition-all">
                <MessageCircle size={20} /> Chamar no WhatsApp
            </a>

            <a href="mailto:lucassborgess600@gmail.com" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 hover:border-cyan-500/50 border border-slate-700 transition-all">
                <Mail size={20} /> Enviar E-mail
            </a>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/borgestar" className="text-slate-500 hover:text-white transition"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/lucas-borges-8aa3b61a7" className="text-slate-500 hover:text-white transition"><Linkedin size={24} /></a>
          </div>
        </div>
      </section>
      
      <footer className="py-8 text-center text-slate-600 text-xs relative z-10 bg-slate-950 border-t border-slate-900">
        <p>© 2025 Lucas Borges. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
