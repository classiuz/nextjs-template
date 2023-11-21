import Icon from '@/ui/Icon'

export default function Footer() {
  return (
    <footer className="m-4 flex items-end justify-center">
      <p className="flex items-center text-on-surface/90">
        <Icon icon={{
          value: 'code',
          className: 'mr-1'
        }} /> Page Made by{' '}
        <a href="https://github.com/classiuz" className="mx-1 text-primary">
          ClaSSius
        </a>{' '}
        with <Icon icon={{
          value: 'heart',
          className: 'ml-1 text-red-600 dark:text-red-400'
        }} />
      </p>
    </footer>
  )
}
