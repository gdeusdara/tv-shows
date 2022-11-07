import React from 'react';
import TVSeriesList from '@components/TVSeriesList';
import useFavorites from '@hooks/useFavorites';

export default function List() {
  const {
    list, message,
  } = useFavorites();

  return (
    <TVSeriesList
      data={list}
      message={message}
    />
  );
}
