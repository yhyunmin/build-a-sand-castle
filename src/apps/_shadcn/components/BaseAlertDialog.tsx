import { AlertDialog } from '@/apps/components/ui/alert-dialog.tsx';
import BaseButton from '@/apps/_shadcn/components/BaseButton.tsx';

const BaseAlertDialog = () => {
  return (
    <>
      <h1>Alert - Dialog</h1>
      <AlertDialog>
        <BaseButton>다이얼로그 열기</BaseButton>
      </AlertDialog>
    </>
  );
};

export default BaseAlertDialog;
