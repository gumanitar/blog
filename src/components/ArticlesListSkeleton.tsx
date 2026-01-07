import { Grid, Skeleton } from "@mui/material";
export default function ArticlesListSkeleton() {
  return (
    <Grid container spacing={4}>
      <Skeleton variant="rectangular" height={530} width={400} />
      <Skeleton variant="rectangular" height={530} width={400} />
      <Skeleton variant="rectangular" height={530} width={400} />
    </Grid>
  );
}
