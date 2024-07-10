import BaseCard from '@/apps/_shadcn/components/BaseCard.tsx';
import BaseAccordion from '@/apps/_shadcn/components/BaseAccordion.tsx';
import BaseAlert from '@/apps/_shadcn/components/BaseAlert.tsx';
import BaseAlertDialog from '@/apps/_shadcn/components/BaseAlertDialog.tsx';

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
      <BaseAccordion />
      <br />
      <hr />
      <BaseAlert />
      <br />
      <hr />
      <BaseAlertDialog />
    </>
  );
};
