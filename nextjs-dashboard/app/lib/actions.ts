'use server';
import { z } from 'zod'; //  paquete para  esquemazar los datos del formulario de creacion de factura con los de base de datos
import { sql } from '@vercel/postgres';  // paquete para conectar con la base de datos
import { revalidatePath } from 'next/cache'; // paquete para revalidar la pagina 
import { redirect } from 'next/navigation'; // paquete para redireccionar a otra pagina

// esquema de datos para  la factura de la base de datos
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

// funciones de estadarizacion de datos para insertar en bd
const CreateInvoice = FormSchema.omit({ id: true, date: true });

const UpdateInvoice = FormSchema.omit({ id: true, date: true });


// funcion para crear una factura en la base de datos
export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({ //  se formatean los datos del formulario
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    const amountInCents = amount * 100;   // se multiplica por 100 para que el valor sea en centavos
    const date = new Date().toISOString().split('T')[0]; // se obtiene la fecha actual

    // se  envia la consulta a la base de datos
    await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`;

    revalidatePath('/dashboard/invoices');  // se revalida la pagina de facturas

    redirect('/dashboard/invoices'); // se redirecciona a la pagina de facturas


}


// funcion para actualizar una factura en la base de datos
export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    const amountInCents = amount * 100;
   
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }

// funcion de elminar facturas
  export async function deleteInvoice(id: string) {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
  }