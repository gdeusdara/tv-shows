import { getDetails } from '@store/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useDetails = ({ id }) => {
  const dispatch = useDispatch();
  const [currSeason, setCurrSeason] = useState(0);
  const {
    loading,
    data: list,
    error,
  } = useSelector((state) => state.details);

  const fetchDetails = () => {
    dispatch(getDetails({ id }));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return {
    list,
    loading,
    error,
    currSeason,
    setCurrSeason,
  };
};

export default useDetails;
