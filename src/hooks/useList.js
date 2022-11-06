import { getList } from '@store/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useList = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: list,
    error,
    extraData: noMoreContent,
  } = useSelector((state) => state.list);

  const [page, setPage] = useState(1);

  const fetchList = () => {
    if (loading || noMoreContent) return;

    dispatch(getList({ page }));
    setPage(page + 1);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return {
    list,
    loading,
    fetchList,
    error,
  };
};

export default useList;
