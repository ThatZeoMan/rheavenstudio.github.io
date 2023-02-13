---
sidebar_position: 4
---

import ReactPlayer from 'react-player'

# Making your first remix with Heaven Studio

Let's get started with your first remix.


## Selecting the music and setting BPM

1. Import a music file from the top left. Supported formats are: `.mp3`, `.wav`, and `.ogg`

![musicfile](./assets/firstchart/musicfile.png)

2. Set the song offset. You may read how to do that [here](/docs-tips/music/offset).

![songoffset](./assets/firstchart/songoffset.png)

3. Set the BPM, we'll be using Karate Man (GBA) in this tutorial, which is 119BPM. You can check [this page](/docs-tips/music/bpm) if you want more information on how to find the BPM of the song you're using.

![bpm](./assets/firstchart/bpm.png)


If all previous steps were done correctly, we should have something like this.

<ReactPlayer controls url='/vid/firstchart/music.mp4' />


## Charting the remix
Let's start charting the remix.

1. Select a minigame by clicking on an icon in the minigame selection menu.

![minigame](./assets/firstchart/minigameselection.png)

2. From the events window right next to it, drag and drop the "Switch Game" event to the timeline.
Note: Make sure you are on the Selection tool, otherwise drag-and-drop will be disabled. Enable it by pressing `1` on your keyboard, or by clicking the mouse icon underneath the game selection.

![draggingevent](./assets/firstchart/draggingevent.gif)

3. Next, press the up/down arrow keys on your keyboard to select other events. You can also use your scroll wheel while hovering over the cue selection window. Since we're using Coin Toss for now, we'll go with "Toss Coin".

![cointoss](./assets/firstchart/cointoss.gif)

4. We'll now switch to another minigame. Click a minigame's icon, then drag and drop the "Switch Game" event to the timeline.
Note: You can right click at the beats bar to select when to start playback.

![switchgame](./assets/firstchart/switchgame.gif)

5. Put the event you want to use in the minigame you just switched to, since we're using Karate Man, we'll go with "Toss Object".

![kmancue](./assets/firstchart/kmancue.gif)


This is how it looks and sounds now.

<ReactPlayer controls url='/vid/firstchart/progress.mp4' />
<br></br>

Continue charting your remix as you wish by dragging in events.

<ReactPlayer controls url='/vid/firstchart/kmangba.mp4' />
<br></br>

Here's the [download of the example remix used in this guide](/examples/kmangba.riq) if you would like to take a look.
