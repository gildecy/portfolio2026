
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-6">
      
      {/* 1. Foto em círculo no canto superior esquerdo */}
      <div className="absolute top-8 left-8">
        <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-zinc-400">
          <Image
            src="https://avatars.githubusercontent.com/u/101933897?v=4" 
            alt="Gildecy" 
            fill
            className="object-cover"
            priority 
          />
        </div>
      </div>

      {/* 2. Conteúdo Centralizado */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 tracking-tight">
            Gildecy de Jesus Sá
          </h1>
          <p className="text-xl text-zinc-500">
            Desenvolvedor Next.js React em formação
          </p>
        </div>

        {/* 3. Botão para o GitHub Corrigido */}
        <div className="flex justify-center">
          <a 
            href="https://github.com/gildecy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all border border-zinc-800"
          >
            {/* Indicador de Status (Bolinha) */}
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
            
            <span className="font-medium text-sm">Acessar GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}
