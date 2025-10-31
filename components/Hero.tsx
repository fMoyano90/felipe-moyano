import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Elementos decorativos geométricos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cuadrado rotado grande */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-linear-to-br from-blue-500/20 to-purple-500/20 rotate-45 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-linear-to-br from-purple-500/20 to-pink-500/20 rotate-45 blur-3xl"></div>
        
        {/* Cuadrados decorativos pequeños */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-500/30 rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-purple-500/30 -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-linear-to-br from-blue-400/10 to-purple-400/10 rotate-45"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 px-6 py-20 max-w-6xl">
        {/* Contenedor con imagen y cuadrado artístico */}
        <div className="relative">
          {/* Cuadrado rotado detrás de la imagen */}
          <div className="absolute inset-0 w-56 h-56 md:w-64 md:h-64 bg-linear-to-br from-blue-600 to-purple-600 rotate-6 rounded-3xl"></div>
          
          {/* Imagen de perfil */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/profile.JPG"
              alt="Felipe Moyano"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Cuadrado decorativo pequeño */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 border-4 border-blue-400 rotate-12"></div>
        </div>

        {/* Mensaje principal con texto en diagonal */}
        <div className="relative">
          {/* Texto principal */}
          <h1 className="font-(family-name:--font-space-grotesk) text-4xl md:text-6xl lg:text-8xl font-bold text-slate-50 leading-[1.1] max-w-5xl text-center tracking-tight">
            <span className="inline-block hover:scale-105 transition-transform">Convierto</span>{" "}
            <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 hover:scale-105 transition-transform font-extrabold">
              desafíos
            </span>{" "}
            <span className="inline-block hover:scale-105 transition-transform">de negocio en</span>
            <br />
            <span className="relative inline-block mt-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse font-extrabold">
                soluciones digitales
              </span>
              {/* Línea diagonal decorativa */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-purple-400 to-blue-400 -rotate-1"></div>
            </span>
            <br />
            <span className="inline-block mt-6 text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light tracking-wide">
              funcionales y{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 font-semibold">
                  escalables
                </span>
                {/* Cuadrado pequeño decorativo */}
                <div className="absolute -top-3 -right-8 w-6 h-6 bg-blue-500 rotate-45"></div>
              </span>
            </span>
          </h1>

          {/* Texto decorativo rotado en el fondo */}
          <div className="absolute -left-20 top-0 text-9xl font-black text-blue-500/5 -rotate-12 pointer-events-none select-none hidden lg:block font-(family-name:--font-space-grotesk)">
            DEV
          </div>
          <div className="absolute -right-20 bottom-0 text-9xl font-black text-purple-500/5 rotate-12 pointer-events-none select-none hidden lg:block font-(family-name:--font-space-grotesk)">
            CODE
          </div>
        </div>
      </div>
    </section>
  );
}
