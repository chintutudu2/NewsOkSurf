import {Button, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useCallback, useMemo, useRef} from 'react';
import FastImage from 'react-native-fast-image';
import useTheme from '../../Hooks/useTheme';
import AppText from '../../Components/Common/AppText/AppText';
import {SPACING} from '../../Constants/Spacing/Spacing';
import {utcToDateString, utcToDateTimeString} from '../../Helpers/DateHelper';
import ChipTag from '../../Components/Common/Chip/ChipTag';
import LinearGradientContainer from '../../Components/Common/Gradient/LinearGradientContainer';
import {RouteProp} from '@react-navigation/native';
import {AppStackNavigationParamList} from '../../Navigation/@types/AppStackNavigationParamList';
import AppHeader from '../../Components/Common/Header/AppHeader';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {WebView} from 'react-native-webview';

type NewsOverviewRouteProp = RouteProp<
  AppStackNavigationParamList,
  'NewsOverview'
>;
type Props = {
  route: NewsOverviewRouteProp;
};

const NewsOverview: React.FC<Props> = React.memo(({route}: Props) => {
  const {
    id,
    title,
    authors,
    url,
    image_url,
    news_site,
    summary,
    published_at,
    updated_at,
  } = route.params;

  const {styles} = useStyles();

  if (!id) {
    return;
  }

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['86%'], []);

  const newsAuthor = authors[0]?.name;
  const date = useMemo(() => utcToDateString(published_at), [published_at]);
  const dateTime = useMemo(() => utcToDateTimeString(updated_at), [updated_at]);

  const handlePresentModalPress = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <AppHeader isFloating hasBack />
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
          <Button title="Read more" onPress={handlePresentModalPress} />
        </View>
        <BottomSheet
          ref={sheetRef}
          index={-1}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          enablePanDownToClose={true}
          animateOnMount={false}
          containerStyle={{zIndex: 99}}>
          <WebView source={{uri: url}} />
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
});

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
      paddingHorizontal: SPACING.X4,
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
      paddingHorizontal: SPACING.X4,
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
