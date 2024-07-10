import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/apps/components/ui/alert-dialog.tsx';
import BaseButton from '@/apps/_shadcn/components/BaseButton.tsx';

const BaseAlertDialog = () => {
  return (
    <>
      <h1>Alert - Dialog</h1>
      <AlertDialog>
        <AlertDialogTrigger>
          <BaseButton>다이얼로그 열기</BaseButton>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>모달 타이틀</AlertDialogTitle>
            <AlertDialogDescription>모달 컨텐츠</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>AlertDialogCancel</AlertDialogCancel>
            <AlertDialogAction>AlertDialogAction</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BaseAlertDialog;
