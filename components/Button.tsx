const Button = (props: any) => {
  return (
    <div className="cursor-pointer">
      {props.type ? (
        <div className="rounded-3xl bg-secondary py-2.5 px-5 text-center text-secondary duration-300 hover:bg-secondary-HOVER">
          {props.content}
        </div>
      ) : (
        <div className="rounded-3xl border-2 border-secondary py-2.5 px-5 text-center text-primary duration-300 hover:bg-secondary hover:text-secondary">
          {props.content}
        </div>
      )}
    </div>
  )
}

export default Button
