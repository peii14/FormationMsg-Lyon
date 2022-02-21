const Button = (props: any) => {
  return (
    <div className="cursor-pointer">
      {props.type ? (
        <div className="text-secondary bg-secondary rounded-3xl py-2 px-3">{props.content}</div>
      ) : (
        <div className="text-primary border-secondary rounded-3xl border-2 py-2 px-3">{props.content}</div>
      )}
    </div>
  )
}

export default Button
