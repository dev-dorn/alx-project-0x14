import { memo, type FC } from 'react';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  );
};

export default memo(Footer);