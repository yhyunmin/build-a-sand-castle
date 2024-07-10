import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/apps/components/ui/card.tsx';
import { Button } from '@/apps/components/ui/button.tsx';
import { Input } from '@/apps/components/ui/input.tsx';
// import '/styles/global.css';

const BaseCard = () => {
  return (
    <>
      <Card className="bg-zinc-50 dark:bg-white">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>ShadcnUI/Basic Component</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <Input placeholder="Input" />
        </CardContent>
        <CardFooter className="flex flex-col  items-start">
          <p>Card Footer</p>
          <div className="flex justify-between w-full">
            <Button variant="outline">Button</Button>
            <Button variant="outline">Button</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
export default BaseCard;
