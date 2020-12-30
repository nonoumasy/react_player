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
        <h2>Player</h2>
        <button onClick={handleLibClick}>
          <FontAwesomeIcon
            icon={isLibOpen ? faChevronLeft : faBars}
            size="1x"
          />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
