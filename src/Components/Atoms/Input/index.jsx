import Styles from './Styles.module.css'

const Input = ({ styleInput, type, name, placeholder, onChange }) => {
  return(
    <>
      <input className={Styles[styleInput]} type={type} name={name} placeholder={placeholder} onChange={onChange}/>
    </>
  )
}

export default Input;