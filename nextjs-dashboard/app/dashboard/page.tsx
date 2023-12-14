import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data'; // funcion para traer datos de la  base de datos
import { Suspense } from 'react';  // este componente es para cuando se esta cargando la pagina es un archivo por defecto para redenrizados
import { RevenueChartSkeleton,  LatestInvoicesSkeleton, CardsSkeleton
} from '@/app/ui/skeletons'; // este componente es para cuando se esta cargando la pagina es un archivo por defecto para redenrizados
 import CardWrapper from '@/app/ui/dashboard/cards'; // este componente es para cuando se esta cargando la pagina es un archivo por defecto para redenrizados
export default async function Page() {
   const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
    
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
    {/*  esta parte de la interfaz se sustituye por el componente de revenue chart hasta que se cargen los datos
     <Suspense fallback={<RevenueChartSkeleton />*/}
      <Suspense fallback={<RevenueChartSkeleton />}>
        <RevenueChart/>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
       
      </div>
    </main>
  );
}

