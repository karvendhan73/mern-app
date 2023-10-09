import { useEffect } from 'react';
import determineMatchingSum from './determine-matching-sum';

function Sample() {
  useEffect(() => {
    determineMatchingSum([1, 2], [3]);
  });

  return <div>This is Karvy</div>;
}

export default Sample;
