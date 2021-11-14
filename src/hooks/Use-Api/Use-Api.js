import { useEffect, useState } from 'react';
import { API } from '../../services';

const useApi = (serviceName, mapper, options) => {
  const [data, setData] = useState(options ? options : []);

  const getData = async () => {
    if (!serviceName || !mapper) return;

    const items = await API[serviceName].get();
    const dataItems = mapper(items.docs.map((doc) => ({ ...doc.data() })));
    setData(dataItems);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}

export { useApi }