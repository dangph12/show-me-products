import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const Header = lazy(() => import('./includes/Header'));
const Footer = lazy(() => import('./includes/Footer'));

function MainLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      {children}
      <Footer />
    </Suspense>
  )
}

export default MainLayout