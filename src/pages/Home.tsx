import { PlantingDiaryForm } from '@/components/PlantingDiaryForm';
import { Separator } from '@/components/ui/separator';

const Home = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Nhật ký cấy</h3>
        <p className="text-sm text-muted-foreground">
          Nhật ký cấy sẽ được lưu trữ tại đây
        </p>
      </div>
      <Separator />
      <PlantingDiaryForm />
    </div>
  );
};

export default Home;
