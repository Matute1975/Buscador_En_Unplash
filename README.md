Buscador de imagines en Unplash.

El siguiente es un trabajo practico integrador del primer módulo de la diplomatura Full Stack de la universidad UTN facultad regional BA.
La consigna fue, crear una página que muestre fotografias desde la API Unplash y permita hacer búsquedas de imágenes según el interés del usuario.

Al abrir la aplicación esta mostrara 30 fotos aleatorias e ira cargando más a medida que se desplaza hacia abajo con el scroll.

 

Cada imagen tiene etiquetas descriptivas, estas etiquetas hacen mención al nombre del fotógrafo, cámara que utilizo, lugar donde se tomó la fotografía y un botón para descargar, del mismo modo si se hace clic sobre una imagen, esta se abrirá en una nueva ventana con un tamaño más visual. Las etiquetas aparecen solo si existen como dato en la BD de unplash. Si se desea conocer más sobre el fotógrafo, al seleccionar en la primera etiqueta de su nombre, será redirigido a su perfil de usuario en Unplash.
La página dispone de un buscador, en el cual se puede filtrar las imágenes que se desee buscar, en caso de no haber coincidencia mostrar un mensaje advirtiendo que la búsqueda no arrojo resultados.
 
Cuando se realiza una búsqueda las etiquetas que se mostrarán serán, fotógrafo, locación donde se tomó la fotografía, tags de filtrado por categoría, numero visualizado de imagen respecto al total y botón de descarga. De igual manera cada imagen puede ser vista de manera mas visual clicando sobre la misma.
La página es responsive, pese que no se definieron mediaquerys, gracias al lineamiento seguido en su construcción.
La aplicación no está completa, faltaría un poco de CSS, configurar scroll infinito (funciona, solo que no anexa las imágenes al final, si no que reemplaza las actuales), y alguna animación.
RECOMENDACIÓN:  al disponer solo de 50 consultas por hora en la API Unsplash, al hacer scroll y llegar a la última imagen, no permanecer más de 2 segundos con el scroll en dicha posición, esto haría que se disparen constantes peticiones a la API, agotando las 50/h en manera muy rápida.

Para visualizar el proyecto, diríjase al siguiente enlace:
https://github.com/Matute1975/Buscador_En_Unplash 
Para ejecutar la página diríjase al siguiente enlace:
https://buscador-en-unplash-4bq6eg1t7-matute1975.vercel.app/#
