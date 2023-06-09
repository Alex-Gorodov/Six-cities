import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

const HeaderNav: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(
    (state) => state.auth.authorizationStatus
  );
  const userInfo = useAppSelector(
    (state) => state.auth.userInfo
  );

  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              to={AppRoute.Root}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
                <img
                  className="user__avatar"
                  src={userInfo?.avatarUrl}
                  width="54"
                  height="54"
                  alt="User avatar"
                />
              </div>
              <span className="header__user-name user__name">
                {userInfo?.email}
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              to="/#"
              className="header__nav-link"
              onClick={(event) => {
                event.preventDefault();
                dispatch(logoutAction());
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
              replace
              onClick={(event) => {
                event.preventDefault();
                navigate(AppRoute.Login);
              }}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper" />
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default HeaderNav;
