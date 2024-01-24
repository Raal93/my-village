import { ReactNode } from 'react';

import NavigationComponent from '../NavigationComponent/NavigationComponent';

interface PropsChildren {
  children: ReactNode;
}

const PageWrapper = ({ children }: PropsChildren) => {
  return (
    <>
      <NavigationComponent />
      <div>{children}</div>
      <footer>Stopka</footer>
    </>
  );
};

export default PageWrapper;
