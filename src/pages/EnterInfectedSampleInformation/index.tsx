import { Separator } from '@/components/ui/separator';
import InfectedSampleInformationForm from './components/InfectedSampleInformationForm';

const EnterInfectedSampleInformation = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Nhật ký cấy</h3>
        <p className="text-sm text-muted-foreground">Nhật ký cấy sẽ được lưu trữ tại đây</p>
      </div>
      <Separator />
      <InfectedSampleInformationForm />
    </div>
  );
};

export default EnterInfectedSampleInformation;
