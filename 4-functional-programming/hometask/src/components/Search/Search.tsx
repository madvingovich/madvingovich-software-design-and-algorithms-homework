import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import styles from "./Search.module.scss";

interface SearchProps {
  value: string;
  onChange: (val: string) => void;
}

export function Search(props: SearchProps) {
  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={props.value}
      type="search"
      onChange={(e) => props.onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
