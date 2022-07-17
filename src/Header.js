import React, {useState, useEffect} from 'react';

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanUp() {
      clearInterval(timer);
    };
  });

  return (
    <header className="header">
      <h2 className="header-title">MEET App </h2>
      <h2 className='header-date-time'>{date.toLocaleTimeString()}</h2>
      <h2 className='header-date-time'>{date.toLocaleDateString()}</h2>
    </header>
  );
};

export default Header;