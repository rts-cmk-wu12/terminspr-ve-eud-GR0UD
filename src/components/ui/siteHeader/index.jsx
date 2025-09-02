import { useState } from "react";
import Heading from "../heading";
import Icon from "@/utils/getIcon";

export default function SiteHeader({ children, search, onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <header className='site__header'>
      <Heading as='h1' size='lg' color='light'>
        {children}
      </Heading>

      {search && (
        <form
          onSubmit={handleSubmit}
          className='site__header__search-form'
          role='search'
          aria-label='Søg'
        >
          <input
            id='site-header-search'
            type='text'
            placeholder='Poledance'
            className='site__header__search'
            value={searchValue}
            onChange={handleInputChange}
            aria-label='Søg'
          />
          <button
            type='submit'
            className='site__header__search-button'
            aria-label='Søg'
          >
            <Icon.search className='search__icon' size={22} />
          </button>
        </form>
      )}
    </header>
  );
}
