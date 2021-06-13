import { Component } from 'react';
import Filter from '../Filter';

class Contacts extends Component {
  static defaultProps = {
    contactList: [],
  };

  state = {
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
    this.filterContacts();
  };

  filterContacts = () => {
    const { filter } = this.state;
    const { contactList } = this.props;
    const normalizedContactSnippet = filter.toLowerCase();
    this.setState({
      filteredContacts: contactList.filter(({ name }) =>
        name.toLowerCase().includes(normalizedContactSnippet),
      ),
    });
  };

  render() {
    const { filteredContacts, filter } = this.state;

    return (
      <>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {filteredContacts && (
          <ul>
            {filteredContacts.map(({ id, name, number }) => (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Contacts;
