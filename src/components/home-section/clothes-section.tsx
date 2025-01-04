import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';

export default function ClothesSection() {
  const customTabTriggerClass =
    'data-[state=active]:bg-black-800 data-[state=active]:font-semibold px-4 lg:px-8 h-[50px] rounded-full text-base lg:text-lg';

  const workflows = [
    {
      title: 'Dress',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Jumpsuit',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'T-shirt',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Blouse',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Hoodie',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Jacket',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
    {
      title: 'Skirt',
      description:
        'Create stunning 3D designs right in your browser with our intuitive real-time fashion builder — no skills required!',
    },
  ];

  return (
    <>
      <Tabs
        defaultValue="Dress"
        className="w-full flex flex-col items-center justify-center text-lg mt-[20px]"
      >
        <TabsList className="bg-background flex items-center justify-start flex-wrap h-auto space-y-1">
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
            className="text-center mt-14 flex flex-col items-center justify-center w-full"
          >
            <div className="grid grid-cols-5 gap-4 w-full">
              <div
                key={i}
                className="w-full h-full bg-black-800 rounded-lg col-span-2 row-span-2"
              >
                &nbsp;
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-[300px] bg-black-800 rounded-lg"
                >
                  &nbsp;
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="font-semibold p-5  flex items-center justify-center space-x-1 rounded-full mt-8"
            >
              <span className="text-gray-500">Browse designs</span>
              <MoveUpRight strokeWidth={1} className="text-gray-500 w-5 h-5" />
            </Button>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
