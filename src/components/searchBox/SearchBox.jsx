import { setFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.scss';
import { useSelector, useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.filters.name || '');
 
  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(setFilter(newValue));
  };
  
  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input className={css.searchField}
        type="text"
        placeholder='Search name...'
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchBox; 