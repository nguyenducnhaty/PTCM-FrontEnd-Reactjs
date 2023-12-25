import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form } from './ui/form';

import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import Field from './Field';

const profileFormSchema = z.object({
  box: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  treeBase: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  MTCode: z.string().max(160).min(4),
  TMom: z.string().max(160).min(4),
  CMom: z.string().max(160).min(4),
  TChild: z.string().max(160).min(4),
  CChild: z.string().max(160).min(4),
  hour: z.string().max(160).min(1),
  minute: z.string().max(160).min(1),
  note: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {};

export function PlantingDiaryForm() {
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
              name="box"
              label={'Box'}
              type={'input'}
              placeholder={'Box'}
            />
          </div>
          <div className="basis-1/2">
            <Field
              form={form.control}
              name="treeBase"
              label={'Đế cây'}
              type={'select'}
              placeholder={'Đế cây'}
              options={mockSelect}
            />
          </div>
          <div className="basis-1/4">
            <Field
              form={form.control}
              name="MTCode"
              label={'Mã MT'}
              type={'input'}
              placeholder={'Mã MT'}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="TMom"
            label={'T.Mẹ'}
            type={'input'}
            placeholder={'T.Mẹ'}
          />
          <Field
            form={form.control}
            name="CMom"
            label={'C.Mẹ'}
            type={'input'}
            placeholder={'C.Mẹ'}
          />
        </div>
        <div className="flex gap-4">
          <Field
            form={form.control}
            name="TChild"
            label={'T.Con'}
            type={'input'}
            placeholder={'T.Con'}
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
            name="hour"
            label={'Giờ'}
            type={'input'}
            placeholder={'Giờ'}
          />
          <Field
            form={form.control}
            name="minute"
            label={'Phút'}
            type={'input'}
            placeholder={'Phút'}
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
}
