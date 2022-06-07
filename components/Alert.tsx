const Alert = () => {
  return (
    <div
      className="relative w-full rounded border border-green-600 bg-green-100 px-4 py-3 text-white"
      role="alert"
    >
      <strong className="font-bold">félicitation!</strong>
      <span className="block sm:inline">Votre requête a été enregistrée</span>
    </div>
  )
}

export default Alert
