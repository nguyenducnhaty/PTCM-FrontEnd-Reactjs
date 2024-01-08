import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Row } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { taskSchema } from '../data/schema';
import DialogTable from './Dialog/DialogTable';
import { DialogForm } from './Dialog/DialogForm';

interface Invoice {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const [openTable, setOpenTable] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const task = taskSchema.parse(row.original);

  const invoices: Invoice[] = [
    { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$250.00', paymentMethod: 'Credit Card' },
    // ... (remaining invoice objects)
  ];

  const openDialogForm = () => {
    setOpenForm(true);
    setOpenTable(false);
  };

  const openDialogTable = () => {
    setOpenTable(true);
    setOpenForm(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={`flex h-8 w-8 p-0 ${openTable || openForm ? 'bg-muted' : ''}`}>
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={openDialogForm}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={openDialogTable}>Show table</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogTable invoices={invoices} open={openTable} setOpen={setOpenTable} />
      <DialogForm open={openForm} setOpen={setOpenForm} />
    </>
  );
}
