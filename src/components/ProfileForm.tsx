import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

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

export function ProfileForm() {
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row gap-4">
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Box</FormLabel>
                  <FormControl>
                    <Input placeholder="Box" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Đế cây</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Đế cây" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">Đế cây 1</SelectItem>
                      <SelectItem value="m@google.com">Đế cây 2</SelectItem>
                      <SelectItem value="m@support.com">Đế cây 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="basis-1/4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã MT</FormLabel>
                  <FormControl>
                    <Input placeholder="Mã MT" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>T.Mẹ</FormLabel>
                <FormControl>
                  <Input placeholder="T.Mẹ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>C.Mẹ</FormLabel>
                <FormControl>
                  <Input placeholder="C.Mẹ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>T.Con</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>C.Con</FormLabel>
                <FormControl>
                  <Input placeholder="C.Con" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giờ</FormLabel>
                <FormControl>
                  <Input placeholder="Giờ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phút</FormLabel>
                <FormControl>
                  <Input placeholder="Phút" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ghi chú</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ghi chú"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Tạo</Button>
      </form>
    </Form>
  );
}
