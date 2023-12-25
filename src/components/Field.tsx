import { Control } from 'react-hook-form';
import {
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
import { memo } from 'react';

interface Option {
  key: string;
  label: string;
}

interface FieldProps {
  form: Control<FormData>;
  description?: string;
  label: string;
  type: 'input' | 'select' | 'textarea'; // Chỉ cho phép 'input' hoặc 'select'
  placeholder?: string;
  options?: Option[];
  name: string;
}

const Field: React.FC<FieldProps> = ({
  form,
  description,
  label,
  type,
  placeholder,
  options,
  name,
}) => {
  const renderChildren = (field) => {
    switch (type) {
      case 'input':
        return <Input placeholder={placeholder} {...field} />;
      case 'select':
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            {options && (
              <SelectContent>
                {options.length > 0 &&
                  options.map((option) => (
                    <SelectItem key={option.key} value={option.key}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            )}
          </Select>
        );
      case 'textarea':
        return (
          <Textarea
            placeholder={placeholder}
            className="resize-none"
            {...field}
          />
        );
      default:
        return null; // No input rendered for other types
    }
  };

  return (
    <FormField
      control={form}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderChildren(field)}</FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default memo(Field);
