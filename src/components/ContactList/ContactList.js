import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { list, onDelete } = this.props;

    return (
      <ul>
        {list.map(({ id, name, number }) => (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <button
              className={styles.button}
              type="button"
              onClick={() => onDelete(id)}
            >
              {' '}
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
