import React, { useState } from "react";
import FormInput from "./input";
import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  
  function onChange(e) {
    setValues({ ...values, [e.target.id]: e.target.value });
  }
  
  const [submitted, setSubmitted] = useState(false);

  const notNull = (val) => {
    return (
      val !== null &&
      val !== undefined &&
      val !== "NULL" &&
      val !== "null" &&
      val !== "undefined" &&
      val !== "UNDEFINED" &&
      (val + "").trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    try {
      setSubmitted(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container className="h-[100vh]">
      <Grid className="flex flex-col items-center justify-center w-full">
        <Box className="flex flex-col items-center w-[30%] p-6 border-2 rounded-lg shadow-4xl">
          <Typography className="font-extrabold color-avinash-blue text-xl">
            Login
          </Typography>
          <FormInput
            label={"Enter Username"}
            id={"username"}
            onChange={onChange}
          />
          <FormInput
            label={"Enter Password"}
            id="password"
            type="password"
            onChange={onChange}
          />
           <button className="deleteQuizBtn" type="submit">Login </button>
        </Box>
      </Grid>
    </Grid>
  );
}