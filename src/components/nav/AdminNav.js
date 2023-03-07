import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/event" className="nav-link">
          Utwórz wyjazd
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/events" className="nav-link">
          Wyjazdy
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/clients" className="nav-link">
          Zgłoszenia
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
