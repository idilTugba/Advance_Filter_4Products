import React, { useEffect, useState } from 'react';
import { InputBase, IconButton, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Search = ({ searchUpdate }: { searchUpdate: (text: string) => void }) => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    searchUpdate(searchText);
  }, [searchText, searchUpdate]);

  return (
    <div className="">
      <FormControl sx={{ m: 1, width: 300, position: 'relative' }}>
        <InputBase
          sx={{
            p: '12px',
            border: 1,
            borderColor: 'grey.500',
            borderRadius: '5px',
            backgroundColor: 'white',
          }}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          inputProps={{ 'arial-label': 'search' }}
        />
        <IconButton
          type="submit"
          sx={{ p: '10px', position: 'absolute', right: 0, top: '6px' }}
          arial-label="search"
        >
          <SearchIcon />
        </IconButton>
      </FormControl>
    </div>
  );
};

export default Search;
