import { useState, useEffect } from 'react';

import { loadTexts } from '../services/loadData';

export default function useTexts() {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const textsData = loadTexts();
    setTexts(textsData);
  }, []);

  return texts;
}
