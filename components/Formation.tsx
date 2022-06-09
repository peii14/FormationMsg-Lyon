import { useRef, useEffect } from 'react'
import n from '../styles/Neuromorphism.module.css'
import home from '../animations/home.json'
import conference from '../animations/conference.json'
import lottie from 'lottie-web'

const Formation = (props: any) => {
  const container = useRef(null)
  var animate: any[] = []
  var content
  if (props.status == 1) {
    animate.push(home)
    content = 'A Distance'
  } else if (props.status == 2) {
    animate.push(conference)
    content = 'Dans nos Ecoles'
  }
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animate[0],
    })
    return () => {
      lottie.destroy()
    }
  }, [animate])
  return (
    <div
      className="mx-auto h-full w-2/3 cursor-pointer"
      onMouseEnter={() => {
        lottie.setDirection(1)
        lottie.play()
      }}
      onMouseLeave={() => {
        lottie.setDirection(-1)
        lottie.play()
      }}
    >
      <div className={n.Neuro}>
        <div className="m-auto flex w-6/12 " ref={container} />
        <div>
          <h3 className="text-center font-medium text-primary ">{content}</h3>
        </div>
      </div>
    </div>
  )
}
export default Formation
