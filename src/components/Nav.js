import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isLibOpen, setIsLibOpen }) => {
  //handlers
  const handleLibClick = () => {
    setIsLibOpen((isLibOpen) => !isLibOpen);
  };

  return (
    <div>
      <nav>
        <h1>Player</h1>
        <button onClick={handleLibClick}>
          <FontAwesomeIcon
            icon={isLibOpen ? faChevronLeft : faBars}
            size="2x"
          />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
