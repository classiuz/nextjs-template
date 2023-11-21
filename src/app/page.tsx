import Image from '@/ui/Image'
import ThemeSwitch from '@/components/ThemeSwitch'
import Button from '@/components/ui/Button'
import Marquee from '@/components/ui/Marquee'

const images = [
  {
    name: 'nextjs',
    alt: 'Next.js Logo'
  },
  {
    name: 'tailwindcss',
    alt: 'Tailwindcss Logo'
  },
  {
    name: 'typescript',
    alt: 'TypeScript Logo',
    height: 40
  },
  {
    name: 'eslint',
    alt: 'Eslint Logo',
    height: 40
  },
  {
    name: 'react-icons',
    alt: 'React Icons Logo',
    height: 40
  }
]

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-around">
      <header className="flex py-6 flex-col items-center gap-6">
        <h1 className="text-6xl flex flex-col font-bold tracking-wide">
          Next.js <br />
          ClaSSius <br />
          <span className="leading-tight animate-text bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Template
          </span>
        </h1>
        <p className="text-center text-lg">
          Built for those quick projects {':)'} <br />
          Get started by editing{' '}
          <code className="select-none rounded-md bg-surface-varient px-2 py-1 text-xs">page.tsx</code>
        </p>
        <footer className="flex items-center gap-4 text-sm">
          <ThemeSwitch />
          <Button
            type='link'
            variant='info'
            target="_blank"
            rel="noreferrer"
            href="https://github.com/classiuz/nextjs-template"
            icon='github'
          >
            Repository
          </Button>
        </footer>
      </header>
      <section className='w-1/2 mx-auto'>
        <Marquee>
          {images.map(({ name, alt, height }, index) => (
            <Image
              key={index}
              alt={alt}
              name={name}
              width={400}
              height={height ?? 30}
            />
          ))}
        </Marquee>
      </section>
    </main>
  )
}
