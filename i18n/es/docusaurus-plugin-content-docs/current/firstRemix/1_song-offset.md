---
sidebar_position: 1
---

# Encontrar el *offset* de la canción

En la mayoría de archivos de audio, la canción no empieza inmediatamente tras el principio del audio. El offset indica el retardo entre el principio del audio y el principio del primer tiempo. Esta sección te ayudará a encontrar este offset.

***Encontrar el offset de tu canción es probablemente la parte más importante de hacer un remix. Esto determinará si tu canción va acompasada con el juego. Asegúrate de que el offset sea correcto antes de continuar.***

## Método 1: Editor de audio
En esta guía usaremos Audacity.

1. Descarga Audacity
(usuarios de Windows/macOS, obténganlo del [sitio web de Audacity](https://www.audacityteam.org/download/), usuarios de Linux busquen instrucciones para su distro online)
2. Abre tu archivo de audio en Audacity
3. Haz zoom en el principio del audio
4. Sitúa el cursor justo al comienzo del primer tiempo (normalmente justo después del silencio al principio, a veces un poco después como en Kárate Killo (GBA))
5. Comprueba el tiempo abajo del todo. Los últimos tres números son tu offset en milisegundos

![audacity](/img/docs-tips/music/offset/audacity.png)

6. Ajusta el offset en Heaven Studio Escribe estos tres números (sin punto o coma decimal) en la caja "Song Offset" arriba del todo en la ventana de Heaven Studio.
7. Para asegurarte de que tu offset es correcto, comprueba la forma de onda. Si los tiempos en la forma de onda encajan con los tiempos del programa, ya está todo correcto.

## Método 2: Comprobando a mano
Este método suele ser menos preciso, y solo funciona si ya tienes el BPM ajustado.
(Si en algún momento durante el proceso, la canción tiene el ritmo correctamente ajustado, puedes saltarte el resto de los pasos.)

1. Enciende el metrónomo en Heaven Studio haciendo click en el icono del metrónomo. Pulsa `Espacio` para reproducir el remix y asegurarte de que está encendido. (Si es difícil oír el metrónomo, ajusta el volumen de la canción a 50% pulsando `2` en tu teclado y haciendo click en el botón "Song Volume" (volumen de la canción) a la izquierda. Puedes deshacer este cambio después.)
2. Reproduce tu remix. si el metrónomo suena un poco antes, incrementa el offset de la canción en 100.
3. Repite el paso 2 hasta que el metrónomo suene un poco después. Disminuye el offset de la canción en 100.
4. Reproduce tu remix. si el metrónomo suena un poco antes, incrementa el offset de la canción en 25.
5. Repite el paso 4 hasta que el metrónomo suene un poco después. Disminuye el offset de la canción en 25.
6. Reproduce tu remix. si el metrónomo suena un poco antes, incrementa el offset de la canción en 5.
7. Repite el paso 6 hasta que el metrónomo suene un poco después. Disminuye el offset de la canción en 5.
8. Reproduce tu remix. si el metrónomo suena un poco antes, incrementa el offset de la canción en 1.
9. Repite el paso 8 hasta que el metrónomo esté acompasado.

Nota: Los pulsos (beats) son usualmente la parte más larga del espectro de sonido (waveform). Observa la imagen abajo para mayor referencia.

![waveform](/img/docs-tips/music/offset/waveform.png)
