Números Primos:
Realizar un algoritmo que imprima los números primos entre 2 y un número dado, de forma descendente. - OK

Por ejemplo: dado el número 7 se debería imprimir 7,5,3,2
Por ejemplo: dado el número 15 se debería imprimir 13,11,7,5,3,2 

Esto debe venir en un proyecto NodeJS.

Criterios de evaluación:
- Proyecto en NodeJS (excluyente) - OK
- Utilizar Express para exponer un api rest (excluyente) - OK
- Aplicar buenas prácticas de desarrollo (excluyente) - OK
- Pruebas unitarias (excluyente) - OK (hay un problema con el puerto)
- Validación de datos de entrada (excluyente) - OK
- Utilización de módulos npm - OK
- Dockerizacion del proyecto - NOK


Estos son los pasos a seguir para utilizar la api:

+ Clonar
+ Instalar modulos: npm i
+ Para iniciar el proyecto debemos hacer lo siguiente:
    * npm run dev

+ Para unit test 
    * comentar la funcion start() el constructor de la clase Server, ya que genera conflictos de puerto
    * en otra terminal npm run test o npm run test:coverage
    

Saludos.
Atte. Max.