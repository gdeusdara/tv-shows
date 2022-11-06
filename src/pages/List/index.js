import React from 'react';
import TVSeriesList from '@components/TVSeriesList';
import useList from '@hooks/useList';

export default function List() {
  const { list, fetchList, error, loading } = useList();

  return (
    <TVSeriesList
      data={list}
      onEndReached={fetchList}
      message={error}
      loading={loading}
    />
  );
}
