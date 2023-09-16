import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import { Alert } from "@mui/joy";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  const emailRef = useRef();
  const passRef = useRef();
  const { signup, error } = useAuth()

  async function handleSubmit(e) {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passRef.current.value;
    try {
      await signup(email, password);
    } catch {}
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert severity="error">{error}</Alert>}
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <input
          className="border rounded-lg text-sm p-1 px-[10px] py-[7px] shadow-sm bg-slate-50"
          type="email"
          name="email"
          ref={emailRef}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <input
          className="border rounded-lg text-sm p-1 px-[10px] py-[7px] shadow-sm bg-slate-50"
          type="password"
          name="password"
          ref={passRef}
        />
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
