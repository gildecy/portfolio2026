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
      <div className="text-center space-y-4">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400  tracking-tight ">
          Gildecy de Jesus Sá
        </h1>

        {/* Subtítulo */}
        <p className="text-xl text-zinc-500">
          Desenvolvedor Next.js React em formação
        </p>

        {/* 3. Botão para o GitHub */}
        <div className="pt-6">
          <a 
            href="https://github.com/gildecy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-lime-400 transition-colors"
          >
            Acessar GitHub
          </a>
        </div>
      </div>

    </main>
  );
}