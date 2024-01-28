import { NavLink } from 'react-router-dom';

const NavigationComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/my-village/">Wioska</NavLink>
        </li>
        <li>
          <NavLink to="/my-village/ratusz">Ratusz</NavLink>
        </li>
        <li>
          <NavLink to="/my-village/settings">Ustawienia</NavLink>
        </li>
        <li>
          <NavLink to="/my-village/simulator">Symulator</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationComponent;
