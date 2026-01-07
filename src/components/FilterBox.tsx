import type { KeyboardEvent } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Typography, Box } from "@mui/material";

type FilterBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement | HTMLInputElement>) => void;
  resultsCount?: number;
};

export default function FilterBox({
  value,
  onChange,
  resultsCount,
  onKeyDown,
}: FilterBoxProps) {
  return (
    <Box className="filterBox">
      <Typography>Filter by keywords</Typography>

      <TextField
        sx={{width: "600px"}}
        hiddenLabel
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <Typography>
        Results: {resultsCount}
      </Typography>
    </Box>
  );
}
