import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';

export default function WorkflowSection() {
  const customTabTriggerClass =
    'data-[state=active]:bg-black-800 data-[state=active]:font-semibold px-8 h-[50px] rounded-full text-xl';

  const workflows = [
    {
      title: 'Design',
      description:
        'Create stunning market-ready 3D fashion designs in minutes - no technical skills needed',
    },
    {
      title: 'Collaborate',
      description:
        'Share and iterate designs in real-time with your team and manufacturers.',
    },
    {
      title: 'Export',
      description:
        'Generate production-ready patterns and files in one click',
    },
    {
      title: 'Produce',
      description:
        'Connect with our network of vetted manufacturers to get your sample ready.',
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
              className="font-semibold px-8 h-[50px] flex items-center justify-center space-x-1 rounded-full mt-8"
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