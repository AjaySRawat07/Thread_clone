import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLoginMutation, useSigninMutation } from "../redux/service";
import { Bounce, toast } from "react-toastify";
import Loading from "../components/common/Loading";


const Register = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  const [signinUser, signinUserData] = useSigninMutation();
  const [loginUser, loginUserData] = useLoginMutation();

  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const toggleLogin = () => {
    setLogin((pre) => !pre);
  };

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };
    await loginUser(data);
  };
  
  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }
    await signinUser({ userName, email, password });
  };

  useEffect(() => {
    console.log(signinUserData);
    if (signinUserData.isSuccess) {
      console.log("Sign-in success:", signinUserData?.data);
      toast.success(signinUserData?.data?.msg, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
      window.location.reload();
    }
    if (signinUserData.isError) {
      console.error("Sign-in error:", signinUserData?.error);
      toast.error(signinUserData?.error?.data?.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, [signinUserData.isSuccess, signinUserData.isError]);

  useEffect(() => {
    if (loginUserData.isSuccess) {
      toast.success(loginUserData?.data?.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
    if (loginUserData.isError) {
      toast.error(loginUserData?.error?.data?.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, [loginUserData.isSuccess, loginUserData.isError]);

  if (signinUserData.isLoading || loginUserData.isLoading) {
    return (
      <Stack height={"90vh"} alignItems={"center"} justifyContent={"center"}>
        <Loading />
      </Stack>
    );
  }

  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={
          _700
            ? {
                backgroundImage: 'url("/register-bg.webp")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 600px",
              }
            : null
        }
      >
        <Stack
          flexDirection={"column"}
          width={_700 ? "40%" : "90%"}
          gap={2}
          mt={_700 ? 20 : 0}
        >
          <Typography
            variant="h5"
            fontSize={_700 ? "1.5rem" : "1rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            {login ? " Login with email" : " Register with email"}
          </Typography>
          {!login && (
          <TextField variant="outlined" placeholder="Enter your username..." onChange={(e) => setUserName(e.target.value)} />
        )}
          <TextField
          variant="outlined"
          placeholder="Enter your email..."
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          type="password"
          variant="outlined"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          size="large"
          sx={{ bgcolor: "green", color: "white", fontSize: "1rem", ":hover": { bgcolor: "blue" } }}
          onClick={login ? handleLogin : handleRegister}
        >
            {login ? "Login" : "  Sign Up"}
          </Button>
          <Typography
            variant="subtitle2"
            fontSize={_700 ? "1.3rem" : "1rem"}
            alignSelf={"center"}
          >
            {login ? "Don`t have an account ?" : " Already have an accout ?"}
            <span className="login-link" onClick={toggleLogin}>
              {" "}
              {login ? "Sign up" : "Login"}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
