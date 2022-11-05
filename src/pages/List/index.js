import TVSeriesList from '@components/TVSeriesList';
import useList from '@hooks/useList';

export default function List() {
  const { list } = useList()

  return (
    <TVSeriesList data={list}  />
  );
}