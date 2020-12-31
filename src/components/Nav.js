import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isLibOpen, setIsLibOpen }) => {
  //handlers
  const handleLibClick = () => {
    setIsLibOpen((isLibOpen) => !isLibOpen);
  };

  return (
      <nav>
      <button onClick={handleLibClick}>
        <FontAwesomeIcon
          icon={isLibOpen ? faChevronLeft : faBars}
          size="1x"
        />
      </button>
        <h2></h2>
        
      </nav>
  );
};

export default Nav;
