import { Button } from '@/apps/components/ui/button.tsx';

const BaseButton = ({ children }) => {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
};

export default BaseButton;
