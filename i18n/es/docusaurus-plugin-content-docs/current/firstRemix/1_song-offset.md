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
4. Sitúa el cursor justo al comienzo del primer tiempo (normalmente justo después del silencio al principio, a veces un poco después como en Karate Killo (GBA))
5. Comprueba el tiempo abajo del todo. Los últimos tres números son tu offset en milisegundos

![audacity](/img/docs-tips/music/offset/audacity.png)

6. Ajusta el offset en Heaven Studio Escribe estos tres números (sin punto o coma decimal) en la caja "Song Offset" arriba del todo en la ventana de Heaven Studio.
7. Para asegurarte de que tu offset es correcto, comprueba la forma de onda. Si los tiempos en la forma de onda encajan con los tiempos del programa, ya está todo correcto.

## Método 2: Comprobando a mano
Este método suele ser menos preciso, y solo funciona si ya tienes el BPM ajustado.
(Si en algún momento durante el proceso la canción tiene el ritmo correctamente ajustado, puedes saltarte el resto de los pasos.)

1. Enciende el metrónomo en Heaven Studio haciendo click en el icono del metrónomo. Pulsa `Espacio` para reproducir el remix y asegurarte de que está encendido. (Si es difícil oír el metrónomo, ajusta el volumen de la canción a 50% pulsando `2` en tu teclado y haciendo click en el botón "Song Volume" (volumen de la canción) a la izquierda. Puedes deshacer este cambio después.)
2. Play your remix. If the metronome is early, increase the Song Offset by 100.
3. Repeat step 2 until the metronome is slightly late. Decrease the Song Offset by 100.
4. Play your remix. If the metronome is early, increase the Song Offset by 25.
5. Repeat step 4 until the metronome is slightly late. Decrease the Song Offset by 25.
6. Play your remix. If the metronome is early, increase the Song Offset by 5.
7. Repeat step 6 until the metronome is slightly late. Decrease the Song Offset by 5.
8. Play your remix. If the metronome is early, increase the Song Offset by 1.
9. Repeat step 8 until the metronome is on-beat.

Note: Beats are usually the longest parts of a waveform. Check the image below for reference

![waveform](/img/docs-tips/music/offset/waveform.png)
