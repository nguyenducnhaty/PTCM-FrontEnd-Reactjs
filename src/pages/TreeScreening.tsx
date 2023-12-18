import { TreeScreeningForm } from '@/components/TreeScreeningForm';
import { Separator } from '@/components/ui/separator';

const TreeScreening = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Soi cây</h3>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      <Separator />
      <TreeScreeningForm />
    </div>
  );
};

export default TreeScreening;
