import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from '@radix-ui/react-icons';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import Field from './Field';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { Calendar } from './ui/calendar';

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: '',
  urls: [
    { value: 'https://shadcn.com' },
    { value: 'http://twitter.com/shadcn' },
  ],
};

export function TreeScreeningForm() {
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
              name="username"
              label={'Barcode'}
              type={'input'}
              placeholder={'Barcode'}
            />
          </div>
          <div className="basis-1/2">
            <Field
              form={form.control}
              name="email"
              label={'Mã Batch'}
              type={'input'}
              placeholder={'Mã Batch'}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Hạn Cấy</FormLabel>
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
                          <span>Hạn Cấy</span>
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
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Ngày Soi</FormLabel>
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
                          <span>Ngày soi</span>
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
                        date > new Date() || date < new Date('1900-01-01')
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
            name="username"
            label={'Mã Giống'}
            type={'input'}
            placeholder={'Mã Giống'}
          />
          <Field
            form={form.control}
            name="username"
            label={'Gốc Mẹ'}
            type={'input'}
            placeholder={'Gốc Mẹ'}
          />
          <Field
            form={form.control}
            name="username"
            label={'Mã Cây'}
            type={'select'}
            placeholder={'Mã Cây'}
            options={mockSelect}
          />
          <Field
            form={form.control}
            name="username"
            label={'Mã MT'}
            type={'select'}
            placeholder={'Mã MT'}
            options={mockSelect}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="username"
            label={'Mã Batch Con'}
            type={'input'}
            placeholder={'Mã Batch Con'}
          />
          <Field
            form={form.control}
            name="username"
            label={'Tuần KH'}
            type={'input'}
            placeholder={'Tuần KH'}
          />
          <Field
            form={form.control}
            name="username"
            label={'GĐ'}
            type={'select'}
            placeholder={'GĐ'}
            options={mockSelect}
          />
          <Field
            form={form.control}
            name="username"
            label={'Nhóm Cấy'}
            type={'select'}
            placeholder={'Nhóm Cấy'}
            options={mockSelect}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="username"
            label={'C.Con'}
            type={'input'}
            placeholder={'C.Con'}
          />
          <Field
            form={form.control}
            name="username"
            label={'SL Túi Soi'}
            type={'input'}
            placeholder={'SL Túi Soi'}
          />
          <Field
            form={form.control}
            name="username"
            label={'SL Túi Hủy'}
            type={'input'}
            placeholder={'SL Túi Hủy'}
          />
          <Field
            form={form.control}
            name="username"
            label={'SL Túi Dư'}
            type={'input'}
            placeholder={'SL Túi Dư'}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="username"
            label={'SL Sạch'}
            type={'input'}
            placeholder={'SL Sạch'}
          />
          <Field
            form={form.control}
            name="username"
            label={'Cấy Sạch'}
            type={'input'}
            placeholder={'Cấy Sạch'}
          />
          <Field
            form={form.control}
            name="username"
            label={'MT_0'}
            type={'input'}
            placeholder={'MT_0'}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="username"
            label={'SL N Nhẹ'}
            type={'input'}
            placeholder={'SL N Nhẹ'}
          />
          <Field
            form={form.control}
            name="username"
            label={'Cấy N Nhẹ'}
            type={'input'}
            placeholder={'Cấy N Nhẹ'}
          />
          <Field
            form={form.control}
            name="username"
            label={'MT_2'}
            type={'input'}
            placeholder={'MT_2'}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="username"
            label={'SL N Nặng'}
            type={'input'}
            placeholder={'SL N Nặng'}
          />
          <Field
            form={form.control}
            name="username"
            label={'Cấy N Nặng'}
            type={'input'}
            placeholder={'Cấy N Nặng'}
          />
          <Field
            form={form.control}
            name="username"
            label={'MT_0'}
            type={'input'}
            placeholder={'MT_3'}
          />
        </div>
        <Field
          form={form.control}
          name="username"
          label={'Ghi chú'}
          type={'textarea'}
          placeholder={'Ghi chú'}
        />

        <Button type="submit">Tạo</Button>
      </form>
    </Form>
  );
}
