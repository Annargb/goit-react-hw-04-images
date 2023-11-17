import { MainSearchbar } from './Searchbar.styled';
import { SearchForm } from './SearchForm-component/SearchForm';

export const Searchbar = ({ onSubmit }) => (
  <MainSearchbar>
    <SearchForm onSubmit={onSubmit} />
  </MainSearchbar>
);
