import Styles from './Styles.module.css'

const Link = ({url, type='link', text, styleLink }) => {
  return(
    <>
      {type === 'link'  && <a className={Styles[styleLink]} href={url} target="_blank" rel="noopener noreferrer">{text}</a> }
      {type === 'download'  && <a className={Styles[styleLink]} href={url} download>{text}</a>}
    </>
  )
}

export default Link;