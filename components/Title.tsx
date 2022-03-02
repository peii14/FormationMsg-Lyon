import style from '../styles/FrameSection.module.css'
const Title = (props: any) => {
  return (
    <div className={`${style.frameTitle}`}>
      <h2 className='text-secondary text-center'>{props.title}</h2>
    </div>
  )
}
export default Title
