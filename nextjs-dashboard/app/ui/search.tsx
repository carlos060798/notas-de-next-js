
'use client'; //Este es un componente de cliente, lo que significa que puede utilizar detectores de eventos y ganchos.

import { useDebouncedCallback } from 'use-debounce'; //   useDebouncedCallback es un gancho que le permite envolver una función con un retraso de tiempo de espera.

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'; //useSearchParams es un gancho que le permite leer y actualizar los parámetros de búsqueda de la URL.





export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /*function handleSearch(term: string) { //cactura el campo de texto
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`); //reemplaza la ruta actual con la nueva ruta

  }*/
  const handleSearch = useDebouncedCallback((term) => { //useDebouncedCallback es un gancho que le permite envolver una función con un retraso de tiempo de espera.
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);


  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}

      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
