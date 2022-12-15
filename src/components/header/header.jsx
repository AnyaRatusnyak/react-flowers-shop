import React from "react";
import { Link } from "react-router-dom";
import { incr } from "../../Redux/incrReducer";
import { PATHS } from "../../utils/urls";
import './header.scss';
import { useDispatch,useSelector } from "react-redux";

export const Header = () => {
  const count= useSelector(state=>state.increment.count)
  const arr= useSelector(state=>state.editPhotoCart.data)
  const dispatch=useDispatch()
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <span>Flower</span> Shop
        </div>
        <nav className="header__menu menu-header">
          <ul className="menu-header__list">
            <li className="menu-header__item" onClick={()=>dispatch(incr())}>
              <Link to={PATHS.home}>Home{count}</Link>
            </li>
            {arr.map(()=><>ggg</>)}

            <li className="menu-header__item">
              <Link to={PATHS.shop}>Shop</Link>
            </li>

            <li className="menu-header__item">
              <Link to={PATHS.blog}>Blog</Link>
            </li>

            <li className="menu-header__item">
              <Link to={PATHS.about}>About</Link>
            </li>
          </ul>
        </nav>

        <div className="header__profile profile">
          {/* <Link to="login.html">
            <button
              className="profile__auth button"
              type="button"
            >
              Sign UP
            </button>
          </Link> */}

          <div className="profile__cart">
            <img src="" alt="cart" />
          </div>

          <div className="profile__avatar">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50"
              alt="avatar"
            />
          </div>
        </div>

        <header className="header__menu-mobile mobile-menu">
          <div className="mobile-menu__inner">
            <div className="header__logo"></div>
            <Link className="mobile-menu__burger">
              <span className="mobile-menu__line"></span>
            </Link>
          </div>

          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list list-mobile">
              <li className="list-mobile__item">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">hail</i>Lifestyle
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">star_half</i>Photodiary
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">music_note</i>Music
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">flight_land</i>Travel
                </Link>
              </li>
              <li className="list-mobile__item">
                <div className="divider"></div>
              </li>
              <li className="list-mobile__item mobile-menu__close">
                <Link
                  className="list-mobile__link"
                  to="#"
                >
                  <i className="material-icons">cancel</i>Cancel
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu__overlay"></div>
        </header>
      </div>
    </header>
  );
};
