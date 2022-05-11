import {
  Input,
  FormGroup,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState } from "react";
import FormData from "../../../data/form-data.json";
import { ToastContainer, toast } from "react-toastify";
import { setUser } from "../../../redux/slices/user";
import { useDispatch } from "react-redux";
import {
  OuterGrid,
  ChildGrid,
  Heading,
  FormControlStyled,
  FormLabelStyled,
  ButtonStyled,
} from "./styles";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [errorName, setErrorName] = useState("");

  const submitUserData = () => {
    if (!checkValidation()) return;
    dispatch(setUser(data));
  };

  const checkValidation = () => {
    for (let i = 0; i < FormData.length; i++) {
      const inputData = FormData[i];
      if (inputData.required && !data[inputData.key]) {
        setErrorName(inputData.label);
        notify("error", inputData.label + " is required");
        return false;
      }
    }
    return true;
  };

  const notify = (type, message) => toast[type](message);

  const handleChange = (e) => {
    if (errorName) {
      setErrorName("");
    }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        setData({
          ...data,
          [e.target.name]: reader.result,
        });
      });
    }
  };

  return (
    <OuterGrid container spacing={0}>
      <ChildGrid component={Paper} item elevation={6}>
        <Heading variant="h4">Create Account</Heading>
        <FormGroup>
          {FormData.map((data) => (
            <FormControlStyled key={data.key} required={data.required}>
              <FormLabelStyled
                htmlFor={data.id}
                error={data.label === errorName}
              >
                {data.label}
              </FormLabelStyled>
              {data.type === "radio" ? (
                <RadioGroup onChange={handleChange} name={data.key}>
                  {data.options.map((option) => (
                    <FormControlLabel
                      key={option.key}
                      control={<Radio />}
                      value={option.key}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
              ) : (
                <Input
                  id={`${data.id}`}
                  placeholder={data.placeholder}
                  type={data.type}
                  onChange={
                    data.type === "file" ? handleFileChange : handleChange
                  }
                  name={data.key}
                />
              )}
            </FormControlStyled>
          ))}
          <ButtonStyled variant="contained" onClick={submitUserData}>
            SUBMIT
          </ButtonStyled>
        </FormGroup>
      </ChildGrid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </OuterGrid>
  );
}

export default Login;
