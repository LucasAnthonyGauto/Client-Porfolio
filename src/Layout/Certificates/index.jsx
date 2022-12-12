import Styles from './styles.module.css';
import { useFilter, useHoverData } from "../../Hooks";
import { Loading, Certificate, SearchBar } from '../../Components/Organisms';

const Studies = () => {
  const { fetchData } = useHoverData("http://localhost:3000/api/es/certificates");
  const { filterReturn, searWords } = useFilter(fetchData);

  return fetchData?.length > 0 ? (
    <div className="App">
      <SearchBar onChange={() => searWords("searchBar")} />
      {fetchData.length && <Certificate certificates={filterReturn} />}
    </div>
  ) : (
    <Loading />
  );
};

export default Studies;