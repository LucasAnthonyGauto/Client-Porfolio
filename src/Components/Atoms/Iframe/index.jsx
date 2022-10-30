import Styles from './Styles.module.css'

const Iframe = ({ link, title, sizeIframe, styleIframe }) => {
  return(
    <>
      <iframe title={title} className={[Styles[sizeIframe],Styles[styleIframe]].join(" ")} src={link}></iframe>
    </>
  )
}

export default Iframe;