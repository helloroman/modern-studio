import slugify from 'slugify';

export const getPageSlug = (address) => `/oferty/${slugify(address.toLowerCase())}`;
