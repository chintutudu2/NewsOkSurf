import {StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useTheme from '../../Hooks/useTheme';
import NewsListItem from '../../Components/ListItems/NewsListItem';
import {useAppStore} from '../../Zustand/Store';
import {getArticlesApi} from '../../API/Actions/News/News';
import {FlashList} from '@shopify/flash-list';
import {SPACING} from '../../Constants/Spacing/Spacing';
import {push} from '../../Helpers/NavigationHelper';
import AppHeader from '../../Components/Common/Header/AppHeader';

const OkSurfHome: React.FC = React.memo(() => {
  const {styles, DIMENSIONS} = useStyles();

  const articles = useAppStore(state => state.articles);
  const count = useAppStore(state => state.count);
  const setArticles = useAppStore(state => state.setArticles);
  const addArticles = useAppStore(state => state.addArticles);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API call goes inside setTimeout
    setTimeout(async () => {
      const articlesRes = await getArticlesApi({limit: 20});
      setArticles(articlesRes?.results);
    }, 0);
  }, []);

  const loadMoreArticle = useCallback(async () => {
    setLoading(true);
    const articlesRes = await getArticlesApi({offset: count, limit: 20});
    addArticles(articlesRes?.results);
    setLoading(false);
  }, [count]);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'top']}>
      <AppHeader hasMenu title="OkSurf" />
      <FlashList
        data={articles}
        renderItem={({item}) => (
          <NewsListItem
            imageUri={item?.image_url}
            newsSite={item?.news_site}
            newsTitle={item?.title}
            newsAuthor={item?.authors[0]?.name}
            publishedAt={item?.published_at}
            onPress={() =>
              push('NewsOverview', {
                id: item?.id,
                title: item?.title,
                authors: item?.authors,
                url: item?.url,
                image_url: item?.image_url,
                news_site: item?.news_site,
                summary: item?.summary,
                published_at: item?.published_at,
                updated_at: item?.updated_at,
              })
            }
          />
        )}
        contentContainerStyle={styles.flashlistContainerStyle}
        estimatedItemSize={100}
        estimatedListSize={{
          height: SPACING.X33,
          width: DIMENSIONS.width - SPACING.X8,
        }}
        onEndReached={loadMoreArticle}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
});

export default OkSurfHome;

const useStyles = () => {
  const {DIMENSIONS, COLORS} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    flashlistContainerStyle: {
      paddingHorizontal: SPACING.X4,
      paddingTop: SPACING.X4,
    },
  });
  return {styles, DIMENSIONS};
};
