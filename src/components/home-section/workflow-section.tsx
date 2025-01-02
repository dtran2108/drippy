import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';

export default function WorkflowSection() {
  const customTabTriggerClass =
    'data-[state=active]:bg-black-800 data-[state=active]:font-semibold p-8 h-6 rounded-full text-xl';

  const workflows = [
    {
      title: 'Design',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Collaborate',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Export',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Produce',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
  ];

  return (
    <>
      <Tabs
        defaultValue="Design"
        className="w-[500px] flex flex-col items-center justify-center text-xl"
      >
        <TabsList className="bg-bg">
          {workflows.map((workflow, i) => (
            <TabsTrigger
              key={i}
              className={customTabTriggerClass}
              value={workflow.title}
            >
              {workflow.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {workflows.map((workflow, i) => (
          <TabsContent
            key={i}
            value={workflow.title}
            className="text-center mt-8 flex flex-col items-center justify-center"
          >
            {workflow.description}
            <Button
              variant="outline"
              className="font-semibold p-5  flex items-center justify-center space-x-1 rounded-full mt-8"
            >
              <span className="text-gray-500">Explore 3D builder</span>
              <MoveUpRight strokeWidth={1} className="text-gray-500 w-5 h-5" />
            </Button>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
