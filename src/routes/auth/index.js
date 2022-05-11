import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../../pages/auth";
import { withRouter } from "../../utils/withRouter";
import { AUTHSCREENS } from "../../constants";

const AuthFlowRoutes = () => {
  return (
    <Routes>
      <Route exact path={AUTHSCREENS.Login} element={<Login />} />
      <Route path="*" element={<Navigate to={AUTHSCREENS.Login} replace />} />
    </Routes>
  );
};

export default withRouter(AuthFlowRoutes);
