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
            <div className={style.frameSubtitle}>
              <h4>{props.sub}</h4>
            </div>
          </div>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  )
}
export default FrameSection
