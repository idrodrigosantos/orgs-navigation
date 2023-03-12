import { useState, useEffect } from 'react';

import { loadProducers } from '../services/loadData';

export function useProducers(bestProducers: any) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const producersData = loadProducers();
    producersData.list.sort(
      (producer1, producer2) => producer1.distance - producer2.distance
    );
    let newList = producersData.list;

    if (bestProducers) {
      newList = newList.filter((producer) => producer.stars > 3);
    }
    setList(newList);
  }, []);

  return list;
}
