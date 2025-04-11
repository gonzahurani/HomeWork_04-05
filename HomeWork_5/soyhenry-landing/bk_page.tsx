import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

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
            <div className="font-bold text-xl">
              <span className="bg-yellow-400 px-1">HE</span>
              <span>NRY</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
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
          <Link href="/ingresar" className="text-gray-700 hover:text-black">
            Ingresar
          </Link>
          <Link
            href="/aplicar"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium"
          >
            Aplicar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Comienza o acelera tu carrera en tecnología
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
              Estudia Full Stack Developement, Data, Inteligencia Artificial o Ciberseguridad
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="text-purple-600 mr-3">
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
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Online, en vivo y flexible</span>
              </div>

              <div className="flex items-center">
                <div className="text-purple-600 mr-3">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Basado en proyectos</span>
              </div>

              <div className="flex items-center">
                <div className="text-purple-600 mr-3">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Basado en cohortes</span>
              </div>

              <div className="flex items-center">
                <div className="text-purple-600 mr-3">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Inversión sin riesgo</span>
              </div>
            </div>

            <Link
              href="/aplicar"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium text-lg"
            >
              Aplicar
            </Link>
          </div>

          {/* Imagen ajustada */}
          <div className="relative max-w-md mx-auto md:max-w-full">
            <Image
              src="/images/Principal.jpg"
              alt="Estudiante de Henry"
              width={450}
              height={450}
              className="rounded-lg w-auto h-auto object-contain"
              style={{ maxHeight: "450px" }}
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
