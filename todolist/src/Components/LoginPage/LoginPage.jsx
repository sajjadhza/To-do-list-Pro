import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function LoginPage() {
  return (
    <>
      <Stack display={"block"} spacing={2}>
        <Typography variant="h3" gutterBottom>
          welcome to check tasks app
        </Typography>
        <Typography variant="body1">
          this app has made to remind and check your different tasks
        </Typography>
        <Typography variant="subtitle1">
          please login or sign up first
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            startIcon={<SendIcon/>}
            color="error"
          >
            login
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
