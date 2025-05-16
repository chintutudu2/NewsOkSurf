import API from '../../CoreAPI';
import {ArticlePayload} from '../../../Interfaces/HomeInterfaces';
import NewsRoutes from '../../Routes/News/News';
import {buildUrl} from '../../../Helpers/StringHelper';

/**
 * @description get articles
 * @param payload
 */
export const getArticlesApi = async (payload: ArticlePayload) => {
  const {search, limit, offset} = payload;

  const url = buildUrl(NewsRoutes.ARTICLES, search, limit, offset);

  try {
    const response = await API.get(url);

    return response.data;
  } catch (err) {
    console.log!('Failed to get articles');
    return err;
  }
};
