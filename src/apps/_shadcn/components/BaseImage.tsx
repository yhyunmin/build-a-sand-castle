import { AspectRatio } from '@/apps/components/ui/aspect-ratio.tsx';

export const BaseImage = ({ src, alt, ratio }) => {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={ratio} className="bg-muted">
        <img
          src={src}
          alt={alt}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </AspectRatio>
    </div>
  );
};
