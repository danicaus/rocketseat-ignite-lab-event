export default function Footer() {
  const logoRocketseat = new URL('/src/assets/images/logo-rocketseat.svg', import.meta.url).href;

  return (
    <div className="w-full bg-gray-900 flex items-center justify-between p-6 relative before:absolute before:h-[1px] before:top-0 before:w-[calc(100% - 48px)] before:px-6 before:bg-gray-600">
      <div className="flex items-center gap-6">
        <img src={logoRocketseat} alt="Logo Rocketseat, com seu nome à direita do ícone de foguete em cinza claro" />
        <p className="text-gray-300">Rocketseat - Todos os direitos reservados</p>
      </div>
      <span className="text-gray-300">Feito com ❤ por
        <a href="http://www.github.com/danicaus" target="_blank" rel="noreferrer noopener"> DaniCaus</a>
      </span>
    </div>
  )
}