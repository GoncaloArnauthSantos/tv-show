import { useEffect, useState } from 'react';

interface IProps {
  value: string,
  delay?: number,
}

const useDebounce = ({ value = '', delay = 1000 }: IProps): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
