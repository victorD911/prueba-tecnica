import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default Navbar;