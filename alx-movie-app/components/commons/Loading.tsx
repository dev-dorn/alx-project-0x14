import { memo, type FC } from 'react';

interface LoadingProps {
  
}

const Loading: FC<LoadingProps> = (props) => {
  return (
    <div>
      <h2>Loading</h2>
    </div>
  );
};

export default memo(Loading);