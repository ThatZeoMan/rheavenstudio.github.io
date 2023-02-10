---
sidebar_position: 4
---

import ReactPlayer from 'react-player'

# Making your first remix with Heaven Studio

Let's get started with your first remix.


## Selecting the music and setting BPM

1. Select the music file from the top left, supported formats are: `.mp3`, `.wav`, and `.ogg`

![musicfile](./assets/firstchart/musicfile.png)

2. Set the song offset, [you may read how to do that here.](/docs-tips/music/offset)

![songoffset](./assets/firstchart/songoffset.png)

3. Set the BPM, we'll be using Karate Man (GBA) in this tutorial, which is 119BPM.

![bpm](./assets/firstchart/bpm.png)


If all previous steps were done correctly, we should have something like this.

<ReactPlayer controls url='/vid/firstchart/music.mp4' />


## Charting the remix
Let's start charting the remix.

1. Select a minigame from the minigames selection menu

![minigame](./assets/firstchart/minigameselection.png)

2. From the window right next to it, drag and drop the "Switch Game" event to the timeline

![draggingevent](./assets/firstchart/draggingevent.gif)

3. Next, press the up/down arrow keys on your keyboard to select other events, since we're using Coin Toss for now, we'll go with "Toss Coin"

![cointoss](./assets/firstchart/cointoss.gif)

4. We'll now switch to another minigame, click the minigame you want to use next from the minigames selection menu then drag and drop the "Switch Game" event to the timeline.
Note: you can right click at the beats bar to select when to start playback

![switchgame](./assets/firstchart/switchgame.gif)

5. Put the event you want to use in the minigame you just switched to, since we're using Karate Man, we'll go with "Toss Object"

![kmancue](./assets/firstchart/kmancue.gif)


This is how it looks and sounds like at the end.

<ReactPlayer controls url='/vid/firstchart/progress.mp4' />


Continue charting your remix as you wish, here's what I came up with at the end.

<ReactPlayer controls url='/vid/firstchart/kmangba.mp4' />


Here's the [download of the remix I made](./assets/firstchart/kmangba.riq) if you need to look at it.
