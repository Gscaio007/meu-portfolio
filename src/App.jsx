import { useEffect, useState } from 'react'
import { FaReact, FaJs, FaNodeJs, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel } from 'react-icons/si';
import logo from './assets/LS.png';
import bgTech from './assets/backgroundtech.jpg';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Gscaio007/repos?sort=updated')
      .then(res => res.json())
      .then(data => setRepos(data.filter(repo => !repo.fork).slice(0, 6)));
  }, []);

  return (
    <div className="min-h-screen text-white font-sans bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] scroll-smooth selection:bg-sky-500/20">
      
      {/* Botão Flutuante de WhatsApp */}
      <a 
        href="https://wa.me/55SEUNUMERO" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <FaWhatsapp className="text-3xl text-white" />
        <span className="absolute right-16 bg-green-500 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-white">
          Me chame no Zap!
        </span>
      </a>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 p-6 bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Logo LS" 
              className="h-12 w-auto transition-transform duration-300 group-hover:rotate-6" 
            />
            <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Landing Smart
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#projetos" className="hover:text-sky-400 transition font-medium hidden md:block text-white">Projetos</a>
            <a href="#contato" className="hover:text-sky-400 transition font-medium text-white">Contato</a>
            <a 
              href="https://github.com/Gscaio007" 
              target="_blank" 
              rel="noreferrer"
              className="bg-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] px-4 py-2 rounded-lg font-medium transition-all text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 text-center max-w-4xl mx-auto px-4 overflow-hidden">
        {/* Luz de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/20 blur-[120px] rounded-full -z-10"></div>
        
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
          Desenvolvedor <span className="text-sky-400">Fullstack</span>
        </h2>
        
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Construindo o futuro da web com interfaces modernas e backends robustos.
        </p>

        {/* BOTÃO FALE COMIGO - AZUL COM GLOW E SCROLL PARA O FOOTER */}
        <a 
          href="#contato" 
          className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_35px_rgba(14,165,233,0.6)] hover:-translate-y-1 group"
        >
          Fale Comigo
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </header>

      {/* Stack Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          {/* Luz de fundo interna ao passar o mouse */}
          <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h3 className="text-xl font-semibold mb-12 text-center text-gray-500 uppercase tracking-widest text-sm relative z-10">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-12 text-5xl text-gray-500 relative z-10">
            <FaReact className="hover:text-sky-400 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all" />
            <FaJs className="hover:text-yellow-400 hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all" />
            <SiTailwindcss className="hover:text-cyan-400 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all" />
            <SiLaravel className="hover:text-red-500 hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all" />
            <FaNodeJs className="hover:text-green-500 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all" />
          </div>
        </div>
      </section>

      {/* Projetos */}
      <main id="projetos" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-3xl font-bold italic uppercase tracking-tighter text-white">Projetos</h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-500/50 to-transparent opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map(repo => (
            <div key={repo.id} className="group relative bg-white/[0.03] backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-sky-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Luz sutil ao passar o mouse */}
              <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-sky-400 text-white transition-colors relative z-10">{repo.name}</h4>
              <p className="text-gray-500 text-sm mb-8 line-clamp-2 relative z-10 leading-relaxed">
                {repo.description || "Projeto desenvolvido com foco em performance e experiência do usuário."}
              </p>
              <div className="flex justify-between items-center relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400/80 bg-sky-500/10 px-3 py-1 rounded-full">
                  {repo.language || 'Code'}
                </span>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-xs font-bold hover:text-sky-300 transition-colors uppercase flex items-center gap-1 text-white">
                  Código <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer / Contato */}
      <footer id="contato" className="relative z-10 py-24 border-t border-white/5 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4 text-white leading-tight">Vamos criar algo <span className="text-sky-400">incrível?</span></h3>
          <p className="text-gray-400 mb-12 leading-relaxed">Estou disponível para novos projetos e colaborações inovadoras.</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/caio-guilherme-csm/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-[#0077b5] px-6 py-3 rounded-xl border border-white/10 transition-all active:scale-95 text-white">
              <FaLinkedin className="text-xl" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/5581993882994" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-green-600 px-6 py-3 rounded-xl border border-white/10 transition-all active:scale-95 text-white">
              <FaWhatsapp className="text-xl" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            {/* E-mail */}
            <a href="mailto:gs.caio03@gmail.com" className="flex items-center gap-2 bg-white/5 hover:bg-sky-500 px-6 py-3 rounded-xl border border-white/10 transition-all active:scale-95 text-white">
              <FaEnvelope className="text-xl" />
              <span className="font-semibold">E-mail</span>
            </a>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/5">
            <p className="text-gray-600 text-xs font-mono uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} — Landing Smart // Caio Silva
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App