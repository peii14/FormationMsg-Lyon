const Button = (props: any) => {
  return (
    <div className="cursor-pointer">
      {props.type ? (
        <div className="rounded-3xl bg-secondary py-4 px-5 text-secondary">
          {props.content}
        </div>
      ) : (
        <div className="rounded-3xl border-2 border-secondary py-4 px-5 text-primary">
          {props.content}
        </div>
      )}
    </div>
  )
}

export default Button
