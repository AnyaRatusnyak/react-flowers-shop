import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import { Footer } from './footer/footer';
import { Loader } from './ui/loader/loader';
import { Header } from './header/header';

export const Layout = () => {
  const { state } = useNavigation();
  let isProfile=document.location.pathname=='/login'||'/registration'?true:false
  return (
    <div className="wrapper">
      {isProfile?null:<Header />}
      {state === 'loading' ? <Loader /> : null}
      <main className="page">
        <Outlet></Outlet>
      </main>
      {isProfile?null:<Footer />}
    </div>
  );
};
