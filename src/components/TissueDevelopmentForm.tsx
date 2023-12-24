import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from './ui/calendar';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import Field from './Field';

const profileFormSchema = z.object({
  barCode: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  batchCode: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  seedCode: z.string().max(160).min(4),
  motherOrigin: z.string().max(160).min(4),
  weekKh: z.string().max(160).min(4),
  staff: z.string().max(160).min(4),
  CChild: z.string().max(160).min(4),
  treeCode: z.string().max(160).min(1),
  cMon: z.string().max(160).min(1),
  treeGroup: z.string().max(160).min(1),
  nvGroup: z.string().max(160).min(1),
  note: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  date: z.date({
    required_error: 'A date of birth is required.',
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const TissueDevelopmentForm = () => {
  // This can come from your database or API.
  const defaultValues: Partial<ProfileFormValues> = {};

  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const mockSelect = [
    {
      key: 'key1',
      label: 'option1',
    },
    {
      key: 'key2',
      label: 'option2',
    },
    {
      key: 'key3',
      label: 'option3',
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row gap-4">
          <div className="basis-1/2">
            <Field
              form={form.control}
              name="barCode"
              label={'BarCode'}
              type={'input'}
              placeholder={'BarCode'}
            />
          </div>
          <div className="basis-1/2">
            <Field
              form={form.control}
              name="batchCode"
              label={'Mã Batch'}
              type={'input'}
              placeholder={'Mã Batch'}
            />
          </div>
          <div className="basis-1/4">
            <Field
              form={form.control}
              name="seedCode"
              label={'Mã Giống'}
              type={'input'}
              placeholder={'Mã Giống'}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="motherOrigin"
            label={'Gốc Mẹ'}
            type={'input'}
            placeholder={'Gốc Mẹ'}
          />
          <Field
            form={form.control}
            name="weekKh"
            label={'Tuần KH'}
            type={'input'}
            placeholder={'Tuần KH'}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Ngày</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Ngày</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="staff"
            label={'Nhân viên'}
            type={'select'}
            placeholder={'Nhân viên'}
            options={mockSelect}
          />
          <Field
            form={form.control}
            name="CChild"
            label={'C.Con'}
            type={'input'}
            placeholder={'C.Con'}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="treeCode"
            label={'Mã cây'}
            type={'input'}
            placeholder={'Mã cây'}
          />
          <Field
            form={form.control}
            name="cMon"
            label={'C.Mẹ'}
            type={'input'}
            placeholder={'C.Mẹ'}
          />
          <Field
            form={form.control}
            name="treeGroup"
            label={'Nhóm Cây'}
            type={'select'}
            placeholder={'Nhóm cây'}
            options={mockSelect}
          />
          <Field
            form={form.control}
            name="nvGroup"
            label={'Nhóm NV'}
            type={'select'}
            placeholder={'Nhóm NV'}
            options={mockSelect}
          />
        </div>
        <Field
          form={form.control}
          name="note"
          label={'Ghi chú'}
          type={'textarea'}
          placeholder={'Ghi chú'}
        />

        <Button type="submit">Tạo</Button>
      </form>
    </Form>
  );
};

export default TissueDevelopmentForm;
