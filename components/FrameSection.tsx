import style from '../styles/FrameSection.module.css'
const FrameSection = (props: any) => {
  return (
    <>
      <div className={style.frame}>
        <div className={style.frameInner}>
          <div className={style.title}>
            <div className={style.frameTitle}>
              <h2 className="text-secondary">{props.title}</h2>
            </div>
            <div className={`${style.frameSubtitle} ${props.hidden ? "hidden":"visible"} `}>
              <p className="text-sm">{props.sub}</p>
            </div>
          </div>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  )
}
export default FrameSection
