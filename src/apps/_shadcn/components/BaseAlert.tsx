import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/apps/components/ui/alert.tsx';
import { RocketIcon, TriangleAlertIcon } from 'lucide-react';

const BaseAlert = () => {
  return (
    <>
      <h1>Alert</h1>
      <Alert>
        <RocketIcon className="w-8 h-8"></RocketIcon>
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert 텍스트</AlertDescription>
      </Alert>
      <br />
      <Alert variant="destructive">
        <TriangleAlertIcon className="w-8 h-8"></TriangleAlertIcon>
        <AlertTitle>Error Alert title</AlertTitle>
        <AlertDescription>Error 텍스트</AlertDescription>
      </Alert>
    </>
  );
};

export default BaseAlert;
