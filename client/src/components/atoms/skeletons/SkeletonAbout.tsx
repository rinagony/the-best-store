import React from "react";
import { Grid, Skeleton } from "@mui/material";

function SkeletonAbout() {
  const repeatTimes = [1, 2];
  return (
    <Grid marginTop={2} item container spacing={5}>
      {repeatTimes.map((item) => (
        <Grid item display={"flex"} flexDirection={"column"} xs={12} key={item}>
          <Skeleton variant="rectangular" width={"100%"} height={118} />
          <Skeleton variant="text" width={"100%"} height={30} />
          <Skeleton variant="text" width={"60%"} height={30} />
          <Skeleton variant="text" width={"30%"} height={30} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkeletonAbout;
