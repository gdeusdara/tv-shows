import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useFavorites = () => {
  const {
    data: list,
    error,
  } = useSelector((state) => state.favorites);

  const message = useMemo(() => {
    if ((list && list.length)) return '';
    if (error) return error;

    return 'You do not have any favorites );';
  }, [error, list]);

  return {
    list,
    error,
    message,
  };
};

export default useFavorites;
