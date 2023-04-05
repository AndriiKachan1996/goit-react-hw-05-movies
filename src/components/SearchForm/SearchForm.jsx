import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchForm.styled';

const SearchForm = ({ query, onSubmit }) => {
  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit(event.target.elements.MovieName.value);
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <Input name="MovieName" type="text" defaultValue={query}></Input>
      <Button type="submit">🔍Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
