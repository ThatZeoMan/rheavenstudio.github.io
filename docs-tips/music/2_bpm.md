---
sidebar_position: 2
---

import ReactPlayer from 'react-player'

import {HeaderBadgesWidget} from '../../src/components/HeaderWidget.js';

# Finding BPM of a song

## Introduction
BPM is the measurment of amount of beats per minute in a song, `120BPM` is 120 beats per minute, which is 2 beats per second.

Finding the BPM is really important to have a synced rhythm game chart in general, specially in a game like Rhythm Heaven where audio cues ***that have to fit the music*** are used instead of the usual Visual Reaction Game formula where you just see notes on the screen to click.

There's multiple ways you can find the BPM of a song, we'll go from the easiest to hardest


## Tapping along
This is a really common and known method to find the BPM of a song, it's not always accurate, depending on your sense of rhythm of course.

In Heaven Studio finding the "Tapping along" option isn't hard, on the top left corner find the mouse icon next to the Music Selection icon.

![tabtn](./assets/bpm/tapalongbutton.png)

A window will appear after you click the icon, you can click the icon in the window with the music to find the bpm

![tashow](./assets/bpm/tapalongshowcase.gif)

This method isn't always recommended, because it depends on your sense of rhythm.

You can high chances get the BPM wrong, like I did here.

(Song is PinocchioP - Apple dot com)

<ReactPlayer controls url='/vid/bpm/tapalongwrong.mp4' />

After using one of the other methods, I found the corret BPM to be `153BPM`

<ReactPlayer controls url='/vid/bpm/correctbpm.mp4' />

<HeaderBadgesWidget commaDelimitedContributors="Saraistupid" lastDateString="2/11/23" />
