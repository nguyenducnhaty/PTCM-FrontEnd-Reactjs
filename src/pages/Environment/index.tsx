import { DataTable } from './components/DataTable';
import { columns } from './components/columns';
import { Separator } from '@/components/ui/separator';

const Environment = () => {
  const tasks = [
    {
      id: 'TASK-8782',
      title: "You can't compress the program without quantifying the open-source SSD pixel!",
      status: 'in progress',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-7878',
      title: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
      status: 'backlog',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-7839',
      title: 'We need to bypass the neural TCP card!',
      status: 'todo',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-5562',
      title: 'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
      status: 'backlog',
      label: 'feature',
      priority: 'medium',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Nhật ký cấy</h3>
        <p className="text-sm text-muted-foreground">Nhật ký cấy sẽ được lưu trữ tại đây</p>
      </div>
      <Separator />
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};

export default Environment;
