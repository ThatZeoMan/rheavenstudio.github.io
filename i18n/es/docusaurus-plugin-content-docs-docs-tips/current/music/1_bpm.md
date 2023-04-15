---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

# Encontrar el BPM (tempo) de una canción

## Introducción
BPM es la medida de "tiempos" (subdivisiones del compás) por minuto en una canción. Por ejemplo, `120BPM` es 120 tiempos por minuto (*beats per minute*), es decir, 2 tiempos por segundo.

Encontrar el BPM exacto es muy importante en general para sincronizar un juego de ritmo. Y en un juego como Rhythm Heaven, donde los efectos de sonido ***tienen que encajar con la música perfectamente***, el BPM es incluso más importante que en otros juegos de ritmo.

Hay varias maneras de encontrar el BPM de una canción. Iremos de soluciones más a menos comunes.

## Pulsar un botón siguiendo el ritmo
Este es un método muy común y conocido de encontrar el BPM de una canción, eso sí, no siempre es preciso (dependiendo de tu sentido del ritmo, por supuesto).

En Heaven Studio encontrar la opción "Tapping along" (pulsar siguiendo el ritmo) no es difícil: en la esquina superior derecha, haz clic en el botón del *mouse*, al lado del icono de "Music Selection" (seleccionar música).

![tabtn](/img/docs-tips/music/bpm/tapalongbutton.png)

Una ventana aparecerá después de que clickees el icono, puedes hacer clic en el icono en la ventana con la música para encontrar el tempo.

![tashow](/img/docs-tips/music/bpm/tapalongshowcase.gif)

Este método no siempre es recomendable, porque depende de tu sentido del ritmo.

Es muy probable que no aciertes con el BPM, como en este ejemplo de aquí.

(Canción: PinocchioP - Apple dot com)

<ReactPlayer controls url='/vid/bpm/tapalongwrong.mp4' />
<br></br>

Después de usar otro de los métodos, vemos que el BPM correcto es`153BPM`

<ReactPlayer controls url='/vid/bpm/correctbpm.mp4' />


## Simplemente búscalo en Google
Puedes buscar "`Nombre de la canción` BPM" en tu motor de búsqueda favorito. Esto puede traer resultados muy precisos, o resultados que dejen mucho que desear.

Aquí tienes algunos sitios web (en inglés) que buscan automáticamente el BPM de canciones en Spotify:

- [Tunebat](https://tunebat.com)
- [SONG⚡BPM](https://songbpm.com/)
- [GetSongbpm](https://getsongbpm.com/)

Solo uno de estos sitios (Tunebat) tenía el tempo correcto de la canción del ejemplo anterior, pero siempre deberías probar todos los BPMs diferentes que encuentres si vas a seguir este método.

## Usar una herramienta online
Hay algunas herramientas online que automáticamente sacan el BPM de un archivo de audio. Este es probablemente el método menos eficaz que hay.use.

Una de las herramientas de este tipo es es [la herramienta de GetSongbpm](https://getsongbpm.com/tools/audio), aunque ten en mente que solo funciona con archivos `mp3`.


## Usar un DAW [^1]
La mayoría de DAWs tienen un ajuste de tempo incluido. A veces puede ser impreciso, así que también explicaremos un método manual por si es necesario. Sólo trataremos Ableton y FL Studio aquí.

[^1]: Del inglés *Digital Audio Workstation* (estación de trabajo de audio digital); software para grabar, editar y producir música.

### FL Studio
#### Automáticamente
FL Studio tiene incluido una función de encontrar BPM decente. Para accederlo, haz clic en el botón de la ondo en la esquina superior derecha del audio en la *timeline* (al lado del nombre del audio), después haz clic en "Detect tempo"/"Detectar tempo".

![flmenu](/img/docs-tips/music/bpm/flmenu.png)

Una ventana aparecerá pidiendo que introduzcas el rango de BPM del archivo de audio del cual estás intentando encontrar el BPM, rangos recomendados son `75-150BPM` y `100-200BPM`.

![fltempodetect](/img/docs-tips/music/bpm/fltempodetect.png)

Utilizando la canción del ejemplo de arriba (PinnocioP - Apple dot com), FL Studio detectó el tempo como `153.002BPM`, lo cual es preciso, pero no necesitamos ese `0.002`.
Los resultados pueden variar dependiendo de la canción, especialmente si el tempo no es constante.

![fltempodetected](/img/docs-tips/music/bpm/fldetected.png)

#### Manualmente

Ajustar el tempo manualmente empieza de una forma bastante similar al método automático. Simplemente añade un archivo de audio.

![flmanualoffgrid](/img/docs-tips/music/bpm/flmanualoffgrid.png)

¿Ves esos picos en la forma de onda? Eso es lo que usaremos para encontrar el tempo.

Partes de la onda con poco tiempo de comienzo o "ataque" (en verde) suelen ser más precisas con este método. La sección en rojo tiene bastante más "ataque", así que hay más ambiguedad de cuando empieza.

![flmanualhighlight](/img/docs-tips/music/bpm/flmanualhighlight.png)

La cuadrícula en la mayoría de DAWs está dividida en tiempos. Una vez alineamos el archivo de audio a la cuadrícula, el tempo será correcto.

![flemptygrid](/img/docs-tips/music/bpm/flemptygrid.png)

Para hacer esto, ajustamos el tempo del proyecto (en la parte de arriba de la pantalla), hasta que los picos estén alineados con las líneas de la cuadrícula. Recomendamos que hagas algo de zoom para asegurarte de que todo está en su sitio.

![flmanualongrid](/img/docs-tips/music/bpm/flmanualongrid.png)

Por esto queríamos secciones con poco "ataque". El comienzo de la sección está más definido, por lo que es más fácil de alinear.
Una vez cada una de estas secciones esté en la cuadrícula (quizás tengas que ir ajustando a lo largo de la canción), el BPM de tu proyecto debería ser el tempo de la canción.

### Ableton
#### Automáticamente
En Ableton Live 11, Ableton detecta automáticamente el tempo de un archivo de audio al añadirlo a la *timeline*.

Para ver el tempo detectado, haz clic en el archivo de audio después de insertarlo.

![ableton](/img/docs-tips/music/bpm/abletontempo.png)

#### Manualmente
Ver el método manual en FL Studio; el proceso es muy similar.

## Usar ArrowVortex
ArrowVortex es una aplicación relativamente conocida en el mundo de los charts de juegos de ritmo: tiene un detector de BPM y *offset* automático.

Para descargar ArrowVortex, descárgalo de esta [web](https://arrowvortex.ddrnl.com/index.html).

Después de abrir ArrowVortex, ve a View (Ver) en la barra superior y asegúrate de que estas opciones sean las únicas encendidas:

- Show waveform
- Show beat lines
- Show tempo boxes
- Show tempo help
- Show notes
- Time based (C-mod)

Arrastra tu archivo a ArrowVortex. Recuerda que F4 activa el metrónomo.

Este es el aspecto que debería de tener de momento.

![arrowvortex](/img/docs-tips/music/bpm/arrowvortex.png)

Para abrir la ventana de sincronización automática, ve a "Tempo" > "Adjust sync" (ajustar sincronización).

![arrowvortextempo](/img/docs-tips/music/bpm/arrowvortextempo.png)

Pulsa "Find BPM" (encuentra BPM).

![arrowvortexsync](/img/docs-tips/music/bpm/arrowvortexsync.png)

Así debería de ser después de que ArrowVortex encuentre tu BPM.

![arrowvortexsynced](/img/docs-tips/music/bpm/arrowvortexsynced.png)

Ahora pulsa espacio en tu teclado para escuchar el audio. Si el metrónomo suena mal, vuelve a la ventana de "Adjust sync" y pulsa el botón "0.5" 1 o 2 veces.
Now press Space on your keyboard to play the audio, if the metronome sounds off, go back to the "Adjust sync" window and press on the "0.5" button 1-2 times.

## Buscar charts de otros juegos de ritmo
SIEMPRE podrás encontrar un chart de osu! para cualquier canción que quieras remixear.

La mayoría de juegos de ritmo tienen el BPM accesible desde el archivo que usan. Algunos juegos como osu! usan milisegundos por tiempo en vez de BPM, en cuyo caso necesitarías descargar el juego y comprobarlo en su editor.

## Buscar en una wikia del fandom
Esto puede ser muy útil en muchas ocasiones.

Un montón de wikias en un fandom contienen los tempos de canciones populares de ese fandom. Especialmente aplicable si quieres remixear algo de Touhou o Vocaloid.
