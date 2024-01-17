import { PlantingDiaryForm } from '@/pages/PlantingDiary/components/PlantingDiaryForm';
import { Separator } from '@/components/ui/separator';

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-2 space-y-6 p-4 pt-0">
        <div>
          <h3 className="text-lg font-medium">Nhật ký cấy</h3>
          <p className="text-sm text-muted-foreground">Nhật ký cấy sẽ được lưu trữ tại đây</p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2 space-y-6 p-4 pt-0">
        <PlantingDiaryForm />
      </div>
    </>
  );
};

export default Home;
