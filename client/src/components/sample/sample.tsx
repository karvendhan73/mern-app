import { useEffect } from 'react';
import getTimes from '../../practice-area/get-times';

function Sample() {
  useEffect(() => {
    console.log(getTimes([0, 1, 1, 3, 3], [0, 1, 0, 0, 1]));
  }, []);

  return <div>This is Karvy</div>;
}

export default Sample;
