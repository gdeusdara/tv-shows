import { useFocusEffect } from '@react-navigation/native';
import { onSearch } from '@store/actions';
import {
  useEffect, useRef, useState, useCallback, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useList = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const timeout = useRef(null);
  const inputRef = useRef(null);
  const {
    loading,
    data: list,
    error,
  } = useSelector((state) => state.search);

  const message = useMemo(() => {
    if ((list && list.length) || loading) return '';
    if (error) return error;

    return 'What are you looking for?';
  }, [error, list]);

  const fetchList = () => {
    dispatch(onSearch({ q: query }));
  };

  const search = () => {
    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(fetchList, 500);
  };

  useEffect(() => {
    search();
  }, [query]);

  useFocusEffect(
    useCallback(() => {
      if (inputRef.current) inputRef.current.focus();
    }, []),
  );

  return {
    list,
    loading,
    error,
    query,
    setQuery,
    inputRef,
    message,
  };
};

export default useList;
