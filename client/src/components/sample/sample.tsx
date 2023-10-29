import { useEffect } from 'react';
import deliveryOrder from '../../practice-area/delivery-order';
import findLowestPrice from '../../practice-area/find-lowest-price';
import getStaleServerCount from '../../practice-area/get-stale-server-count';
import getTimes from '../../practice-area/get-times';

function Sample() {
  useEffect(() => {
    //console.log(deliveryOrder(4, [1, 2, 2], [2, 3, 4], 1));
    // console.log(
    //   findLowestPrice(
    //     [
    //       ['10', 'sale', 'january-sale'],
    //       ['200', 'sale', 'EMPTY'],
    //     ],
    //     [
    //       ['sale', '0', '10'],
    //       ['january-sale', '1', '10'],
    //     ],
    //   ),
    // );
    // console.log(
    //   getStaleServerCount(
    //     6,
    //     [
    //       [3, 2],
    //       [4, 3],
    //       [2, 6],
    //       [6, 3],
    //     ],
    //     [3, 2, 6],
    //     2,
    //   ),
    // );

    console.log(getTimes([0, 1, 1, 3, 3], [0, 1, 0, 0, 1]));
  });

  return <div>This is Karvy</div>;
}

export default Sample;
