import React from 'react';
import TVSeriesList from '@components/TVSeriesList';
import useSearch from '@hooks/useSearch';
import { TextInput } from '@components/Basic/Input';
import { Content } from './styles';

export default function Search() {
  const {
    list, message, loading, query, setQuery, inputRef,
  } = useSearch();

  return (
    <Content>
      <TextInput
        ref={inputRef}
        placeholder="Search for TV series..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <TVSeriesList
        data={list}
        message={message}
        loading={loading}
      />
    </Content>
  );
}
