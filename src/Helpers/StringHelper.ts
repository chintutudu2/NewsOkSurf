export const buildUrl = (
  baseUrl: string,
  search?: string,
  limit?: number,
  offset?: number,
) => {
  const url = new URL(baseUrl);

  if (limit) {
    url.searchParams.append('limit', limit.toString());
  }

  if (offset) {
    url.searchParams.append('offset', offset.toString());
  }

  if (search) {
    url.searchParams.append('search', search);
  }
  return url.toString();
};
