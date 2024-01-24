import { NavLink } from 'react-router-dom';

const NavigationComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Wioska</NavLink>
        </li>
        <li>
          <NavLink to="/ratusz">Ratusz</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Ustawienia</NavLink>
        </li>
        <li>
          <NavLink to="/simulator">Symulator</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationComponent;
