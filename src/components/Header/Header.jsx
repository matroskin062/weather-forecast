import React from 'react';

import { StyledHeader, Title, Date } from './Style';
import { dateNow } from '../../utils/timeFormatter';

const Header = () => {
  const [date, setDate] = React.useState(dateNow());

  React.useEffect(() => {
    setInterval(() => {
      setDate(dateNow());
    }, 5000);
  }, [date]);

  return (
    <StyledHeader>
      <Title>Weather Forecast</Title>
      <Date>
        <p>{date}</p>
      </Date>
    </StyledHeader>
  );
};

export default React.memo(Header);
