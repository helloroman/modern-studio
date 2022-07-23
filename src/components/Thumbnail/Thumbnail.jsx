import React from 'react';
import { getPageSlug } from 'helpers/getPageSlug';
import {
  ThumbnailImage,
  ThumbnailInfo,
  ThumbnailWrapper,
} from './Thumbnail.styles';

export const Thumbnail = ({ imageSource = '', title = '', address = '' }) => (
  <ThumbnailWrapper to={getPageSlug(address)}>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumbnailInfo>
      <p>{address}</p>
      <p>{title}</p>
    </ThumbnailInfo>
  </ThumbnailWrapper>
);
