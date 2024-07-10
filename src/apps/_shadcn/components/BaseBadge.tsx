import { Badge } from '@/apps/components/ui/badge.tsx';
import { Link } from '@tanstack/react-router';

const BaseBadge = () => {
  return (
    <>
      <Badge variant="outline">링크X 뱃지</Badge>
      <Link to="/">
        <Badge variant="secondary">링크O 뱃지</Badge>
      </Link>
    </>
  );
};

export default BaseBadge;
