import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <label className={css.text}>
        Find contacts by name
        <br />
        <input
          className={css.newContacts}
          onChange={onChangeFilter}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
