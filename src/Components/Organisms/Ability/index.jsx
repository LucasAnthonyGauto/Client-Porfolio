import { Img, Title } from '../../Atoms';
import Styles from './styles.module.css'

const Ability = ({ listSkills }) => {
  return (
    <>
      {listSkills.map(data => (
        <div key={data.id}>
          <Title type={"h3"} text={data.Title} />
          <Img link={data.iconSvg} />
        </div>
      ))}
    </>
  )
}

export default Ability;