import Styles from './Styles.module.css'

const Spam = ({ spamAnimate, styleSpam, text }) => {
  return(
    <>
      <span className={[Styles[spamAnimate], Styles[styleSpam]].join(" ")}>{text}</span>
    </>
  )
}

export default Spam;