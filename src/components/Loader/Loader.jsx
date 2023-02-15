import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={CSS.Loader}>
      <InfinitySpin width="200" color="#3f51b5" />
    </div>
  );
};
