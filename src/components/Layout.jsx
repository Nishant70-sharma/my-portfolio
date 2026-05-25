import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  // NOTE: keep year hook only if used in footer/header.
  // const year = useMemo(() => new Date().getFullYear(), []);

  const baseLinkStyle = {
    textDecoration: "none",
    color: "var(--text-h)",
    fontWeight: 600,
    fontSize: 16,
  };

  return (
    <div className="appLayout">
      <header className="appHeader">
        <div
          className="appContainer"
          style={{ justifyContent: "space-between" }}
        >
          <Link className="appBrand" to="/">
            Nishant Sharma
          </Link>

          <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <NavLink
              to="/projects"
              style={({ isActive }) =>
                isActive
                  ? {
                      ...baseLinkStyle,
                      color: "var(--accent)",
                    }
                  : baseLinkStyle
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive
                  ? {
                      ...baseLinkStyle,
                      color: "var(--accent)",
                    }
                  : baseLinkStyle
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive
                  ? {
                      ...baseLinkStyle,
                      color: "var(--accent)",
                    }
                  : baseLinkStyle
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/resume"
              style={({ isActive }) =>
                isActive
                  ? {
                      ...baseLinkStyle,
                      color: "var(--accent)",
                    }
                  : baseLinkStyle
              }
            >
              Resume
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="appMain">{children}</main>
    </div>
  );
}
