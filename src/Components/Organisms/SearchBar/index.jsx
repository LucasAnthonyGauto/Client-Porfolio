import { Input } from '../../Atoms';
import Styles from './styles.module.css'

const SearchBar = ({onChange}) => {
  return(
    <>
      <Input onChange={onChange} placeholder={"html"} name={"searchBar"}/>
    </>
  )
}
export default SearchBar ;