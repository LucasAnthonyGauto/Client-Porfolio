import Styles from './Styles.module.css'

const Text = ({ text, classText }) => {
  return(
    <>
      <p className={Styles[classText]}>{text}</p>
    </>
  )
}

export default Text;