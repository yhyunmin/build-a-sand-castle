import UseProgressiveImage from '../hooks/useProgressiveImage.tsx';

const ImageComponents = (thumbnail, img, alt) => {
  const [src, { blur }] = UseProgressiveImage(thumbnail, img);
  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{
          filter: blur ? 'blur(5px)' : 'none',
          transition: blur ? 'filter 0.2s ease-out' : 'none',
        }}
      />
    </>
  );
};

export default ImageComponents;
