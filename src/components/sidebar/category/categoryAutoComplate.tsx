import { Autocomplete, Checkbox, TextField } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

interface CategoryFilter {
  options: Array<string>; 
  onHandleChange: (selectedList: string[]) => void;
}

const CategoryFilter : React.FC<CategoryFilter> = ({options, onHandleChange}) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleOnCheckUpdate = (event:Event, newValue:string) => {
    setSelectedValues([newValue]);
    onHandleChange([newValue]);
  }

  return (
    <div>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        onChange = {(event,newValue) => handleOnCheckUpdate}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Checkboxes" placeholder="Favorites" />
        )}
      />
    </div>
  )
}

export default CategoryFilter

