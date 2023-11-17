import { GoSearch } from 'react-icons/go';
import {
  MainSearchForm,
  SearcFormButton,
  SearchFormInput,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => (
  <MainSearchForm onSubmit={onSubmit}>
    <SearcFormButton type="submit">
      <GoSearch />
    </SearcFormButton>

    <SearchFormInput
      type="text"
      name="request"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </MainSearchForm>
);
