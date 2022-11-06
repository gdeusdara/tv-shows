import { getDetails } from '@store/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useDetails = ({ id }) => {
  const dispatch = useDispatch();
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

  useEffect(() => {
   console.log('Ep LIST', list);
  }, [list]);



  return {
    list,
    loading,
    error,
  };
};

export default useDetails;
