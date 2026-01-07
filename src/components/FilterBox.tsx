import type { KeyboardEvent } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Typography, Box } from "@mui/material";

import { useSearchStore } from "../stores/searchStore";

type FilterBoxProps = {
  resultsCount?: number;
};

export default function FilterBox({ resultsCount }: FilterBoxProps) {
  const { input, setInput, setQuery } = useSearchStore();
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setQuery(input);
    }
  };

  return (
    <Box className="filterBox">
      <Typography>Filter by keywords</Typography>

      <TextField
        sx={{ width: "600px" }}
        hiddenLabel
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <Typography>Results: {resultsCount}</Typography>
    </Box>
  );
}
