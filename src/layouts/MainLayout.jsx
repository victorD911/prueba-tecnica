import { Outlet, Link, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
  <div>

    <nav className="navbar">

      <div className="navbar-links">
        <Link to="/">Dashboard</Link>

        <Link to="/products">
          Productos
        </Link>
      </div>

      <div className="navbar-user">

        <span>
          {user?.username}
        </span>

        <button
          onClick={handleLogout}
          className="btn btn-danger"
        >
          Cerrar sesión
        </button>

      </div>

    </nav>

    <main>
      <Outlet />
    </main>

  </div>
);
}

export default MainLayout;