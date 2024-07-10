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

const Basic = () => {
  return (
    <>
      <Card className="max-w-md bg-teal-50 rounded-xl">
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
export default Basic;
