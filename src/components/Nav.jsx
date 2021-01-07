/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isLibOpen, setIsLibOpen }) => {
  const handleLibClick = () => {
    setIsLibOpen((isLibOpen) => !isLibOpen);
  };

  return (
    <nav>
      <button type="button" onClick={handleLibClick}>
        <FontAwesomeIcon
          icon={isLibOpen ? faChevronLeft : faBars}
          size="1x"
        />
      </button>

    </nav>
  );
};

export default Nav;
