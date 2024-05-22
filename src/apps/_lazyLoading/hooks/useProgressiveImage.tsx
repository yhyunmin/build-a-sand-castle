import { useEffect, useState } from 'react';

const useProgressiveImage = (lImage, hImage) => {
  const [src, setSrc] = useState(lImage);
  useEffect(() => {
    setSrc(lImage);
    const img = new Image();
    img.src = hImage;
    img.onload = () => {
      setSrc(hImage);
    };
  }, [lImage, hImage]);
  return [src, { blur: src === lImage }];
};

export default useProgressiveImage;
