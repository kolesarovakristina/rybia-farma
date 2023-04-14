import React, { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductsProvider from '_shared/provider/ProductsProvider';

import MainLayout from 'components/Layouts/MainLayout';
import Loading from 'components/Loading';
import ErrorBoundary from 'components/ErrorBoundary';

import 'styles/_base.scss';

const fallback = <Loading />;

const App: FC = () => {
  const Home = lazy(() => import('pages/Home'));
  const Products = lazy(() => import('pages/Products'));
  const OpeningHours = lazy(() => import('pages/OpeningHours'));
  const ContactUs = lazy(() => import('pages/ContactUs'));

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={fallback}>
              <Home />
            </Suspense>
          ),
          // errorElement: <ErrorBoundary />,
        },
        {
          path: 'products',
          element: (
            <Suspense fallback={fallback}>
              <Products />
            </Suspense>
          ),
          // errorElement: <ErrorBoundary />,
        },
        {
          path: 'opening-hours',
          element: (
            <Suspense fallback={fallback}>
              <OpeningHours />
            </Suspense>
          ),
        },
        {
          path: 'contact-us',
          element: (
            <Suspense fallback={fallback}>
              <ContactUs />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  );
};

export default App;
