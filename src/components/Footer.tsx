import { FaHeart, FaCode } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="m-4 flex items-end justify-center">
      <p className="flex items-center">
        <FaCode className="mr-1" /> Page Made by{' '}
        <a href="https://github.com/classiuz" className="mx-1 hover:text-light-sec dark:hover:text-dark-sec">
          ClaSSius
        </a>{' '}
        with <FaHeart className="ml-1 text-light-sec dark:text-dark-sec" />
      </p>
    </footer>
  )
}
