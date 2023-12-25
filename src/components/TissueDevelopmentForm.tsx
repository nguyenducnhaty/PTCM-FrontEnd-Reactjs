import { zodResolver } from '@hookform/resolvers/zod';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  useForm,
} from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from './ui/calendar';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFieldRenderer,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import Field from './Field';
import { Input } from './ui/input';

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
            <FormField
              name="username"
              render={(props) => (
                <FormFieldRenderer
                  label="BarCode"
                  description="ahihi"
                  placeholder="bcs"
                  fieldType="input"
                  field={props.field}
                />
              )}
            />
          </div>
        </div>
        <Button type="submit">Tạo</Button>
      </form>
    </Form>
  );
};

export default TissueDevelopmentForm;
