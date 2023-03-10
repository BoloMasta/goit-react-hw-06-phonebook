import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setContactsFilter } from '../../redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';
import css from './Filter.module.css';
import clearIcon from '../../images/backspace.png';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contact by name:
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(getFilter)}
        disabled={useSelector(getContacts).length === 0}
      />
      {useSelector(getFilter) && (
        <button
          className={css.button}
          type="button"
          onClick={() => dispatch(setContactsFilter(''))}
        >
          <img src={clearIcon} alt="clear icon" className={css.icon} />
        </button>
      )}
    </label>
  );
};

Filter.propTypes = {
  inputValue: PropTypes.string,
};
