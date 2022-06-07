const Danger = () => {
  return (
    <div
      className="relative w-full rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">Holy smokes!</strong>
      <span className="block sm:inline">
        {' '}
        Something seriously bad happened.
      </span>
      
    </div>
  )
}
export default Danger
