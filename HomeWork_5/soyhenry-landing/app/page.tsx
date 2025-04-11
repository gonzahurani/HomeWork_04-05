import Image from "next/image"
import Link from "next/link"
import { ChevronDown, LogIn, ArrowRightCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Promotional Banner */}
      <div className="w-full bg-black text-white py-2 px-4 text-center">
        <p className="text-sm md:text-base">
          🔥 Nuevas carreras: Data Engineering & Data Science 🔥 Descuento especial{" "}
          <span className="font-bold">20% OFF</span> exclusivo por lanzamiento. Código:{" "}
          <span className="font-bold">EarlyBird</span> 🔥
        </p>
      </div>

      {/* Navigation */}
      <nav className="w-full py-4 px-6 flex items-center justify-between bg-white border-b border-gray-200">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <Image src="/images/henry-logo.png" alt="HENRY" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <div className="flex space-x-6">
            <button className="flex items-center text-gray-700 hover:text-black">
              Para estudiantes
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-black">
              Para empresas
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/ingresar"
            className="flex items-center text-gray-700 hover:text-black transition-colors"
          >
            <LogIn className="h-5 w-5 mr-2 text-purple-600" />
            Ingresar
          </Link>
          <Link
            href="/aplicar"
            className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-colors"
          >
            <ArrowRightCircle className="h-5 w-5 mr-2 text-purple-600" />
            Aplicar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-12">
        <div
          className="mx-auto px-4"
          style={{
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <div style={{ gridColumn: "1 / 2" }} className="pr-4">
            <h1
              className="font-bold text-gray-900 leading-tight mb-6"
              style={{ fontSize: "4rem", lineHeight: "1.1", fontWeight: "800" }}
            >
              Comienza o acelera tu carrera en tecnología
            </h1>

            <h2
              className="text-xl md:text-2xl text-gray-700 mb-10"
              style={{ maxWidth: "95%", textAlign: "justify", lineHeight: "1.4" }}
            >
              Estudia Full Stack Developement, Data,
              <br />
              Inteligencia Artificial o Ciberseguridad
            </h2>

            {/* Lista de características */}
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
                  text: "Online, en vivo y flexible",
                },
                {
                  icon: (
                    <>
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </>
                  ),
                  text: "Basado en proyectos",
                },
                {
                  icon: (
                    <>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <path d="M9 7a4 4 0 1 0 0.01 0" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </>
                  ),
                  text: "Basado en cohortes",
                },
                {
                  icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
                  text: "Inversión sin riesgo",
                },
              ].map(({ icon, text }, i) => (
                <div className="flex items-center" key={i}>
                  <div className="text-purple-600 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      {icon}
                    </svg>
                  </div>
                  <span className="text-gray-500 text-lg">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/aplicar"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium text-lg"
            >
              Aplicar
            </Link>
          </div>

          <div style={{ gridColumn: "2 / 3" }} className="flex justify-center items-center pl-4">
            <Image
              src="/images/Principal.jpg"
              alt="Estudiante de Henry"
              width={550}
              height={550}
              className="rounded-lg w-auto h-auto object-contain"
              style={{ maxHeight: "550px" }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Mucho más que un bootcamp</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600 mb-2">#1</h3>
              <p className="text-gray-600">Course Report 4.9 ⭐</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600 mb-2">+10.000</h3>
              <p className="text-gray-600">graduados</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600 mb-2">+15</h3>
              <p className="text-gray-600">nacionalidades</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600 mb-2">+3.000</h3>
              <p className="text-gray-600">compañías</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
