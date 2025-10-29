import { memo, type FC } from 'react';

interface MovieCardProps {
  
}

const MovieCard: FC<MovieCardProps> = (props) => {
  return (
    <div>
      <h2>MovieCard</h2>
    </div>
  );
};

export default memo(MovieCard);