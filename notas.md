# apliativo de next js 

## comando para inicar proyectos en next js


npx create-next-app@latest nextjs-dashboard 

## las rutas en nextjs-dashboard son dinamincas es decir  la capeta app se colocan los directorio siendo elpage.tsx incial el index.tsx  del proyecto y cada carpeta en sus archivos de ditetorio son las rutas dinamicas del proyecto sin usar dependecias externas como router domm

ruta dinamica creada que muestra los componte de la carpeta dashboard y cada uno se peude consultar con la / mas nombre de carpeta o archivos de la carpeta
http://localhost:3000/dashboard


## para  la configuracion de la anvegacion atravez de link se usa la etiqueta propia  next js usando el componente link de next js

import Link from 'next/link';

  <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
