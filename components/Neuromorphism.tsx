import n from '../styles/Neuromorphism.module.css'
const Neuromorphism = (props: any): JSX.Element => {
  if (props.isMember == 1) {
    return <div className={n.NeuroMember}>{props.children}</div>
  } else if (props.isMember == 3) {
    return <div className={n.NeuroDisc}>{props.children}</div>
  } else {
    return (
      <div className="cursor-pointer">
        <div className={n.Neuro}>{props.childre }</div>
      </div>
    )
  }
}
export default Neuromorphism
