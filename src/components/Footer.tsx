import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="m-4 flex items-end justify-center">
      <p className="flex items-center text-neutral-800 dark:text-neutral-200">
        <Icon iconName="code" className="mr-1" /> Page Made by{' '}
        <a href="https://github.com/classiuz" className="mx-1 text-violet-800  dark:text-violet-300">
          ClaSSius
        </a>{' '}
        with <Icon iconName="heart" className="ml-1 text-red-600 dark:text-red-400" />
      </p>
    </footer>
  )
}
