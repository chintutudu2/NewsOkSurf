import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import {SPACING} from '../../Constants/Spacing/Spacing';
import AppText from '../Common/AppText/AppText';
import {utcToDateString} from '../../Helpers/DateHelper';

interface NewsListItemProps {
  imageUri?: string;
  newsSite?: string;
  newsTitle?: string;
  newsAuthor?: string;
  publishedAt?: string;
  onPress?: () => void;
}

const NewsListItem: React.FC<NewsListItemProps> = React.memo(
  ({imageUri, newsSite, newsTitle, newsAuthor, publishedAt, onPress}) => {
    const {styles} = useStyles();

    const date = useMemo(() => utcToDateString(publishedAt), [publishedAt]);

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <FastImage
          style={styles.image}
          source={{
            uri: imageUri,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.content}>
          {newsSite && (
            <AppText variant="light" color="outline">
              {newsSite}
            </AppText>
          )}
          {newsTitle && (
            <AppText variant="medium" color="black" numberOfLines={3}>
              {newsTitle}
            </AppText>
          )}
          <View style={styles.footerContainer}>
            {newsAuthor && (
              <AppText variant="light" color="outline">
                {newsAuthor}
              </AppText>
            )}
            {newsAuthor && date && (
              <AppText variant="light" color="outline">
                •
              </AppText>
            )}
            {date && (
              <AppText variant="light" color="outline">
                {date}
              </AppText>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

export default NewsListItem;

const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      height: SPACING.X33,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      gap: SPACING.X2,
      marginBottom: SPACING.X3,
    },
    image: {
      width: SPACING.X33,
      height: SPACING.X33,
      borderRadius: SPACING.X4,
    },
    content: {
      flex: 1,
      gap: SPACING.X2,
    },
    footerContainer: {
      flexDirection: 'row',
      gap: SPACING.X1,
    },
  });
  return {styles};
};
