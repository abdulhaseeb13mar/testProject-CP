import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Home, AddPost } from "../../pages/app";
import { withRouter } from "../../utils/withRouter";
import { APPSCREENS } from "../../constants";
import { Fab } from "@mui/material";
import { AppBar } from "../../components";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { OuterGrid, ZoomStyled } from "./styles";

const AppFlowRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fabs = [
    {
      color: "primary",
      icon: <AddIcon />,
      label: "Add",
      path: APPSCREENS.Home,
      navigate: APPSCREENS.AddPost,
    },
    {
      color: "primary",
      icon: <HomeIcon />,
      label: "Edit",
      path: APPSCREENS.AddPost,
      navigate: APPSCREENS.Home,
    },
  ];
  return (
    <OuterGrid container spacing={0}>
      <AppBar />
      <Routes>
        <Route path={APPSCREENS.Home} element={<Home />} />
        <Route path={APPSCREENS.AddPost} element={<AddPost />} />
        <Route path="*" element={<Navigate to={APPSCREENS.Home} replace />} />
      </Routes>
      {fabs.map((fab, index) => (
        <ZoomStyled
          key={fab.path}
          in={fab.path === location.pathname}
          timeout={200}
          style={{
            transitionDelay: `${fab.path === location.pathname ? 200 : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab
            sx={fab.sx}
            aria-label={fab.label}
            color={fab.color}
            onClick={() => navigate(fab.navigate)}
          >
            {fab.icon}
          </Fab>
        </ZoomStyled>
      ))}
    </OuterGrid>
  );
};

export default withRouter(AppFlowRoutes);
