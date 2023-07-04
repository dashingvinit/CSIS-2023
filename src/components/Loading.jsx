import React from 'react';
import loading from '../lottie-files/loading.json';
import Lottie from 'lottie-react';

const Loading = () => {
  return <Lottie options={{ animationData: loading }} />;
};

export default Loading;
