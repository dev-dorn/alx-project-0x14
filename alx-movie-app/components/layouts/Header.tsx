import { memo, type FC } from 'react';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div>
      <h2>Header</h2>
    </div>
  );
};

export default memo(Header);