import { createFileRoute } from '@tanstack/react-router';
import { Dayjs } from '../apps/_dayjs';

export const Route = createFileRoute('/dayjs')({
  component: () => <Dayjs />,
});
