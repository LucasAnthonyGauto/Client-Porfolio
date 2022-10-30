import Styles from './Styles.module.css'

const Button = ({ btnSize, btnStyles, btnClick, text }) => {
  return(
    <>
      <button className={[Styles[btnSize], Styles[btnStyles]].join(" ")} onClick={btnClick}>{text}</button>
    </>
  )
}

export default Button;