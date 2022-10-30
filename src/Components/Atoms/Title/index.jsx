import Styles from './Styles.module.css'

const Title = ({ text, type, classTittle }) => {
  return(
    <>
      {type === 'h1' && <h1 className={[Styles[type],Styles[classTittle]].join(" ")}>{text}</h1>}
      {type === 'h2' && <h2 className={[Styles[type],Styles[classTittle]].join(" ")}>{text}</h2>}
      {type === 'h3' && <h3 className={[Styles[type],Styles[classTittle]].join(" ")}>{text}</h3>}
      {type === 'h4' && <h4 className={[Styles[type],Styles[classTittle]].join(" ")}>{text}</h4>}
      {type === 'h5' && <h5 className={[Styles[type],Styles[classTittle]].join(" ")}>{text}</h5>}
    </>
  )
}

export default Title;