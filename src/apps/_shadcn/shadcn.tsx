import BaseCard from '@/apps/_shadcn/components/BaseCard.tsx';
import BaseAccordion from '@/apps/_shadcn/components/BaseAccordion.tsx';
import BaseAlert from '@/apps/_shadcn/components/BaseAlert.tsx';
import BaseAlertDialog from '@/apps/_shadcn/components/BaseAlertDialog.tsx';
import { BaseImage } from '@/apps/_shadcn/components/BaseImage.tsx';

export const Shadcn = () => {
  return (
    <>
      {/*<h1 className="test">ShadCN UI</h1>*/}
      <h1>ShadCN UI TEST</h1>
      <hr />
      <h2>Card </h2>
      <BaseCard />
      <br />
      <hr />
      <h2>Accordion</h2>
      <BaseAccordion />
      <br />
      <hr />
      <h2>Alert</h2>
      <BaseAlert />
      <br />
      <hr />
      <h2>Alert Dialog</h2>
      <BaseAlertDialog />
      <br />
      <hr />
      <h2>Aspect Ratio (Image)16:9</h2>
      <BaseImage
        ratio={16 / 9}
        alt="Photo by Drew Beamer"
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      />
      <h2>Aspect Ratio (Image)4/3</h2>
      <BaseImage
        ratio={4 / 3}
        alt="Photo by Drew Beamer"
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      />
      <br />
      <hr />
    </>
  );
};
