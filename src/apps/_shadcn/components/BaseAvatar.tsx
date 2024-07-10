import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/apps/components/ui/avatar.tsx';
import { useEffect, useState } from 'react';

const BaseAvatar = () => {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    changeAvatar(1000);
  }, []);
  return (
    <>
      <div className="">
        <Avatar>
          {/*setTimeout to src 1000 sec*/}
          <AvatarImage src={src} />
          <AvatarFallback>로딩</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
  function changeAvatar(timer) {
    setTimeout(() => {
      setSrc('https://github.com/shadcn.png');
    }, timer);
  }
};

export default BaseAvatar;
