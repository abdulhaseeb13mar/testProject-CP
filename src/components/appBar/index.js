import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/user";
import { AppBarAvatar } from "./styles";
import { clearPosts } from "../../redux/slices/posts";

function AppBarComp() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const Logout = () => {
    dispatch(clearPosts());
    dispatch(setUser(null));
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <AppBarAvatar alt="user pics" src={user.profile_pic} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {user.name}
        </Typography>
        <Button color="inherit" onClick={Logout}>
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComp;
