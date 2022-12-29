import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import { PhotoItem } from '../componentes/PhotoItem';
import { RenderLoader } from '../componentes/RenderLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../PhotoReducer/PhotoReducer';
import { Error } from '../componentes/Error';
import { Header } from '../componentes/Header';

export const Gallery = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const {photoListRedux, error} = useSelector(state => state.photo);
  const dispatch = useDispatch();

  const setData = async(number) => {
    dispatch(getList(number));
  };

  useEffect(() => {
    setData(pageCounter);
  }, []);

  const selectNextPage = () => {
    setPageCounter(pageCounter + 1);
  };

  useEffect(() => {
    setData(pageCounter);
  }, [pageCounter]);

  return (
    <View style={styles.container}>
      <Header headerPosition={'Gallery'} />
      {error ? (
        <Error />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
              data={photoListRedux}
              renderItem={({item}) => (
                  <PhotoItem photo={item} />
              )}
              onEndReached={selectNextPage}
              onEndReachedThreshold={0}
              ListFooterComponent={RenderLoader}
          />
        </View>
      )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingTop: 40,
  },
});