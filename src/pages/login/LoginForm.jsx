import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";

function LoginForm() {
  return (
    <form>
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox size="sm" label="Remember for 30 days" name="persistent" />
        <Link fontSize="sm" href="#replace-with-a-link" fontWeight="lg">
          Forgot your password?
        </Link>
      </Box>
      <Button type="submit" fullWidth>
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
