import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import useTheme from '../../Hooks/useTheme';
import AppText from '../../Components/Common/AppText/AppText';
import {SPACING} from '../../Constants/Spacing/Spacing';
import {utcToDateString, utcToDateTimeString} from '../../Helpers/DateHelper';
import ChipTag from '../../Components/Common/Chip/ChipTag';
import LinearGradientContainer from '../../Components/Common/Gradient/LinearGradientContainer';

interface NewsOverviewProps {
  id: number;
  title: string;
  authors: {
    name: string;
    socials: string;
  }[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
}

const NewsOverview: React.FC<NewsOverviewProps> = React.memo(
  ({
    id,
    title,
    authors,
    url,
    image_url,
    news_site,
    summary,
    published_at,
    updated_at,
  }) => {
    const {styles} = useStyles();

    if (!id) {
      return;
    }

    const newsAuthor = authors[0]?.name;
    const date = useMemo(() => utcToDateString(published_at), [published_at]);
    const dateTime = useMemo(
      () => utcToDateTimeString(updated_at),
      [updated_at],
    );

    return (
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.image}
            source={{
              uri: image_url,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <LinearGradientContainer colors1="black0" colors2="black60">
            <View style={styles.headingContainer}>
              <ChipTag text={news_site} />
              <AppText variant="titleLarge" color="white" numberOfLines={3}>
                {title}
              </AppText>
              <View style={styles.subHeadingContainer}>
                {newsAuthor && (
                  <AppText variant="regular" color="white">
                    {newsAuthor}
                  </AppText>
                )}
                {newsAuthor && date && (
                  <AppText variant="regular" color="white">
                    •
                  </AppText>
                )}
                {date && (
                  <AppText variant="regular" color="white">
                    {date}
                  </AppText>
                )}
              </View>
            </View>
            <View style={styles.emptyContainer} />
          </LinearGradientContainer>
        </View>
        <View style={styles.content}>
          <View style={styles.updatedAtContainer}>
            <AppText variant="light" color="outline">
              Updated at
            </AppText>
            {dateTime && (
              <AppText variant="light" color="outline">
                {dateTime}
              </AppText>
            )}
          </View>
          <AppText color="black" variant="regular">
            {summary}
          </AppText>
        </View>
      </SafeAreaView>
    );
  },
);

export default NewsOverview;

const useStyles = () => {
  const {COLORS} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      width: '100%',
      height: '70%',
      flexDirection: 'column-reverse',
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    headingContainer: {
      paddingHorizontal: SPACING.X8,
      paddingBottom: SPACING.X10,
      paddingTop: SPACING.X20,
      gap: SPACING.X4,
    },
    subHeadingContainer: {
      flexDirection: 'row',
      gap: SPACING.X1,
    },
    content: {
      backgroundColor: COLORS.white,
      width: '100%',
      height: '35%',
      top: '-5%',
      borderTopRightRadius: SPACING.X6,
      borderTopLeftRadius: SPACING.X6,
      paddingHorizontal: SPACING.X8,
      paddingVertical: SPACING.X8,
    },
    emptyContainer: {
      height: '10%',
      width: '100%',
    },
    updatedAtContainer: {
      flexDirection: 'row',
      gap: SPACING.X1,
      marginBottom: SPACING.X2,
    },
  });
  return {styles};
};
