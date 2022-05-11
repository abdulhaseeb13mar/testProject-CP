import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import AddPostFormData from "../../../data/add-post.json";
import { ToastContainer, toast } from "react-toastify";
import { setPosts } from "../../../redux/slices/posts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  OuterGrid,
  PaperContainer,
  InputLabelStyled,
  ButtonStyled,
} from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { APPSCREENS } from "../../../constants";

function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postData, setpostData] = useState({ title: "", body: "" });
  const [errorName, setErrorName] = useState("");

  const addPost = () => {
    if (!checkValidation()) return;
    setpostData({ title: "", body: "" });
    notify("success", "Post added successfully");
    dispatch(setPosts(postData));
    setTimeout(() => {
      navigate(APPSCREENS.Home);
    }, 2000);
  };

  const checkValidation = () => {
    for (let i = 0; i < AddPostFormData.length; i++) {
      const inputData = AddPostFormData[i];
      if (inputData.required && !postData[inputData.name]) {
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
    setpostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <OuterGrid item>
      <PaperContainer elevation={4}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Add Post
        </Typography>
        {AddPostFormData.map((formData) => (
          <div key={formData.name}>
            <InputLabelStyled error={errorName === formData.label}>
              {formData.label}
            </InputLabelStyled>
            <TextField
              label=""
              value={postData[formData.name]}
              placeholder={formData.label}
              fullWidth
              name={formData.name}
              multiline={formData.multiline}
              rows={formData.rows}
              onChange={handleChange}
            />
          </div>
        ))}
        <ButtonStyled variant="contained" onClick={addPost} fullWidth>
          ADD POST
        </ButtonStyled>
      </PaperContainer>
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

export default AddPost;
