import { Typography, Stack } from "@mui/material";
import { textbanner } from "../../../data/data";

export const TextStatus = () => {
  return (
    <Stack justifyContent={"space-between"} direction={"row"} pt={"30px"}>
      {textbanner.map((item) => (
        <Stack p={"5px"} key={item.id}>
          <Typography variant="h3">{item.name}</Typography>
          <Typography fontSize={"12px"} fontWeight={400} noWrap>
            {item.description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
