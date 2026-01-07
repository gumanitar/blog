import { TextField, InputAdornment, Typography, Box } from "@mui/material";
import type { KeyboardEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";

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
      <Typography variant="subtitle2">Filter by keywords</Typography>

      <TextField
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

      <Typography variant="caption">
        Results: {resultsCount}
      </Typography>
    </Box>
  );
}
