export default function Footer() {
  return (
    <footer className="bg-[#e3e1e6]">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + nome */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              className="h-10 w-auto"
              alt="Ateliê House Decor"
            />
            <span className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
              Ateliê House Decor
            </span>
          </div>

          {/* Contatos */}
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">
              Contatos
            </h2>
            <p className="text-gray-600 font-medium">
              ateliehousedecor@gmail.com
            </p>
          </div>

          {/* Redes sociais */}
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">
              Redes sociais
            </h2>

            <div className="flex items-center gap-4 text-gray-600 text-xl">
              <a
                href="https://www.instagram.com/ateliehousedecor/"
                target="_blank"
                className="hover:text-pink-600 transition"
              >
                <i className="fa-brands fa-instagram" />
              </a>

              <a
                href="https://www.youtube.com/@ateliehousedecor"
                target="_blank"
                className="hover:text-red-600 transition"
              >
                <i className="fa-brands fa-youtube" />
              </a>

              <a
                href="https://www.facebook.com/ateliehousedecor/?locale=pt_BR"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                <i className="fa-brands fa-facebook" />
              </a>

              <a
                href="https://www.tiktok.com/@ateliehousedecor"
                target="_blank"
                className="hover:text-black transition"
              >
                <i className="fa-brands fa-tiktok" />
              </a>

              <a
                href="https://br.pinterest.com/ateliehousedecor/"
                target="_blank"
                className="hover:text-red-500 transition"
              >
                <i className="fa-brands fa-pinterest" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="text-center text-sm text-gray-500">
          © 2026{" "}
          <span className="font-medium">Ateliê House Decor Treinamentos</span>
        </div>
      </div>
    </footer>
  );
}
