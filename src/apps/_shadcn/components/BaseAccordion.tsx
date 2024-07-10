import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/apps/components/ui/accordion.tsx';

const BaseAccordion = () => {
  return (
    <>
      <h1>Accordion</h1>
      {/*single :다른게 닫힘 ,multiple :같이 열림 */}
      <Accordion type="multiple" className="w-fit">
        <AccordionItem value="item-1">
          <AccordionTrigger>아코디언 아티클 타이틀 첫번재</AccordionTrigger>
          <AccordionContent>아코디언 아티클 컨텐츠</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>아코디언 아티클 타이틀 두번쨰</AccordionTrigger>
          <AccordionContent>아코디언 아티클 컨텐츠</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default BaseAccordion;
