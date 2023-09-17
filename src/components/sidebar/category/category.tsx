import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface CategoryFilter {
  categoryList: string[];
  onHandleChange: (updateFilters: string[]) => void;
}

const CategoryFilterSearch: React.FC<CategoryFilter> = ({
  categoryList,
  onHandleChange,
}) => {
  const [categoryName, setCategoryName] = useState<string[]>([]);

  useEffect(() => {
    onHandleChange(categoryName);
  }, [categoryName, onHandleChange]);

  const handleChange = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event;

    setCategoryName(typeof value === 'string' ? value.split(',') : value);
  };

  const filterCat = useSelector((state: RootState) => state.filter);

  const resetCategories = () => {
    setCategoryName([]);
  };
  useEffect(() => {
    filterCat.categories.length === 0 && resetCategories();
  }, [filterCat.categories]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={categoryName}
          onChange={handleChange}
          input={<OutlinedInput label="Categories" />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {categoryList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={categoryName?.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoryFilterSearch;
