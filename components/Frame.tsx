import style from '../styles/FrameSection.module.css'
const Frame = (props:any) =>{
    return(
        <div className={style.frame}>
            <div className={style.frameInner2}>
            {props.children}
            </div>
        </div>
    )
}

export default Frame