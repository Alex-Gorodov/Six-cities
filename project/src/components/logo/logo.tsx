import { Link } from 'react-router-dom';

export function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link" to="Six-cities/">
      <img
        className="header__logo"
        src="Six-cities/img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}
