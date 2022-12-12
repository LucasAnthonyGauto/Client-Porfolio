import Styles from './styles.module.css';
import { useFilter, useHoverData } from "../../Hooks";
import { Loading, Certificate, SearchBar, Ability } from '../../Components/Organisms';

const Skills = () => {
  const { fetchData } = useHoverData("http://localhost:3000/api/es/skills");
  // const { filterReturn, searWords } = useFilter(fetchData);

  return fetchData?.length > 0 ? (
    <div className="App">
      {/* <SearchBar onChange={() => searWords("searchBar")} /> */}
      {fetchData.length && <Ability listSkills={fetchData}/>}
    </div>
  ) : (
    <Loading />
  );
};

export default Skills;