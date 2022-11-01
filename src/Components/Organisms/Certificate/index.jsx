import { Img, Text, Title } from '../../Atoms';
import Styles from './styles.module.css'

const Certificate = ({certificates}) => {
  return(
    <>
      {certificates.map((data) => (
        <div key={data.id}>
          <Title type={"h2"} text={data.bootcamp}/>
          {/* <Img link={data.urlImage}/> */}
          <Text text={data.title}/>
        </div>))}
    </>
  )
}

export default Certificate ;