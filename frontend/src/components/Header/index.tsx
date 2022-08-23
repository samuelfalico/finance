/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="Finances" />
        <div>
          <nav>
            <NavLink activeClassName="active-link" to="/dashboard">
              Listagem
            </NavLink>
            <NavLink activeClassName="active-link" to="/new-transaction">
              Nova transação
            </NavLink>
            <NavLink activeClassName="active-link" to="/config">
              Configurações
            </NavLink>
          </nav>

          <Link to="/">
            <FiArrowLeft size={20} /> Sair
          </Link>
        </div>
      </header>
    </Container>
  );
};

export default Header;
