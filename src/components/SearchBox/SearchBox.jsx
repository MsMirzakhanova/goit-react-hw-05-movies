import { Wrapper, Input, Icon } from "./SearchBox.styled";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDebounce } from "components/hooks/useDebounce";

const DEBOUNCE_TIME = 500;

export const SearchBox = ({ query }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);
  
  useEffect(() => {
    if (!debouncedSearchQuery) {
      searchParams.delete("query");
      setSearchParams(searchParams)
      return;
    }
    setSearchParams({ query: debouncedSearchQuery });
  }, [debouncedSearchQuery, searchParams, setSearchParams]);
  
  // const onChange = (query) => {
  //   console.log(query);
  //   setSearchParams({query})
  // }
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Wrapper>
  );
};