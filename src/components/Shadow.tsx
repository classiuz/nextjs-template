export default function Shadow() {
  return (
    <div className="absolute z-30">
      <div className="justify-center-end fixed flex w-screen">
        <span className="absolute right-36 -top-36 blur-[100px] z-10 h-72 w-72 bg-purple-400/90 dark:bg-purple-500/60" />
        <span className="absolute right-56 -top-56 blur-[100px] z-20 h-72 w-72 bg-red-400/90 dark:bg-red-500/60" />
        <span className="absolute right-72 -top-72 blur-[100px] z-30 h-72 w-72 bg-orange-400/90 dark:bg-orange-500/60" />
      </div>
    </div>
  )
}
