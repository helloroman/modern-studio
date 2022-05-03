import React from 'react';
import {
  ThumbnailImage,
  ThumbnailInfo,
  ThumbnailWrapper,
} from './Thumbnail.styles';

export const Thumbnail = ({ imageSource }) => (
  <ThumbnailWrapper>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumbnailInfo>
      <p>Rolna 20</p>
      <p>Nowoczesny apartament z klasą</p>
    </ThumbnailInfo>
  </ThumbnailWrapper>
);
