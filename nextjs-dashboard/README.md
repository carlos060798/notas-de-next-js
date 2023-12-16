# integracion de la base de datos con el proyecto


## integracion de la base de datos con el proyecto posgresst 
contraseña => admin 

se puede crear un usuario  una instanción de la base de datos en vercel de la base de datos de posgrest
Una vez conectado, navegue hasta la .env.localpestaña, haga clic en Mostrar secreto y copiar fragmento . Asegúrate de revelar los secretos antes de copiarlos.



## Estos son los enlaces del cliente Next.js que utilizará para implementar la funcionalidad de búsqueda:

useSearchParams- Le permite acceder a los parámetros de la URL actual. Por ejemplo, los parámetros de búsqueda para esta URL /dashboard/invoices?page=1&query=pending se verían así: {page: '1', query: 'pending'}.

usePathname: le permite leer el nombre de ruta de la URL actual. Por ejemplo, para la ruta /dashboard/invoices, usePathname devolvería '/dashboard/invoices'.

useRouter: permite la navegación entre rutas dentro de los componentes del cliente mediante programación. Hay múltiples métodos que puedes utilizar.

# la funcion Antirebote de la busqueda que le permitan la navegación

se debe generar la navegación para que solo se ejecute la busqyeda cuando el usuario deje de escribir por un tiempo determinado

# la funcion Antirebote de la busqueda que le permitan la navegación se instala la dependedencia de 
npm i use-debounce =>  esta dependencia le permite generar un tiempo de espera para que el usuario deje de escribir y se ejecute la busqueda
