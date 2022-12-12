import { Link, Text, Title } from '../../Atoms';
// import Styles from './styles.module.css';

const Project = ({ projects }) => {
  return (
    <>
      {projects.map((item) => (
        <div key={item.id}>
          <Title type={"h3"} text={item.title}/>
          <Text text={item.desc}/>
          <Title type={"h5"} text={item.date}/>
          <ul>
            <li>{item.state}</li>
            <li>{item.type}</li>
            <li>{item.focus}</li>
          </ul>
          <div>
            <Link url={item.page} text={"Pagina"}/>
            <Link url={item.githun} text={"GitHub"}/>
          </div>
        </div>))};
    </>
  );
};

export default Project;