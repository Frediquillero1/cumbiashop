import React from 'react';
import Container from './Container';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import FavoriteButton from './FavoriteButton';
import CartIcon from './CartIcon';
// import Link from 'next/link';
import SignIn from './SignIn';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md'>
      <Container className='flex items-center justify-between text-lightColor'>
        <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <SignIn />
        </div>
          
      </Container>
    </header>
  );
};

export default Header;
