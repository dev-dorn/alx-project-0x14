import { memo, type FC } from 'react';

interface ButtonProps {
  
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <div>
      <h2>Button</h2>
    </div>
  );
};

export default memo(Button);