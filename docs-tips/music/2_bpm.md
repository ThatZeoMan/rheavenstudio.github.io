---
sidebar_position: 2
---

import ReactPlayer from 'react-player'

import {HeaderBadgesWidget} from '../../src/components/HeaderWidget.js';

# Finding the BPM of a song

## Introduction
BPM is the measurment of amount of beats per minute in a song, `120BPM` is 120 beats per minute, which is 2 beats per second.

Finding the BPM is really important to have a synced rhythm game chart in general, specially in a game like Rhythm Heaven where audio cues ***that have to fit the music*** are used instead of the usual Visual Reaction Game formula where you just see notes on the screen to click.

There's multiple ways you can find the BPM of a song, we'll go from the easiest to hardest


## Tapping along
This is a really common and known method to find the BPM of a song, it's not always accurate, depending on your sense of rhythm of course.

In Heaven Studio finding the "Tapping along" option isn't hard, on the top left corner find the mouse icon next to the Music Selection icon.

![tabtn](./assets/bpm/tapalongbutton.png)

A window will appear after you click the icon, you can click the icon in the window with the music to find the bpm.

![tashow](./assets/bpm/tapalongshowcase.gif)

This method isn't always recommended, because it depends on your sense of rhythm.

High chances, you'll get the BPM wrong, like this example here.

(Song is PinocchioP - Apple dot com)

<ReactPlayer controls url='/vid/bpm/tapalongwrong.mp4' />

After using one of the other methods, the correct BPM is`153BPM`

<ReactPlayer controls url='/vid/bpm/correctbpm.mp4' />


## Just look it up online
You can look up "`Song Name` BPM" on your favourite search engine, this may bring up either accurate results or far from accurate results.

Here are some websites that automatically check BPM of songs on Spotify:

- [Tunebat](https://tunebat.com)
- [SONG⚡BPM](https://songbpm.com/)
- [GetSongbpm](https://getsongbpm.com/)

Only one of these websites (Tunebat) had the correct BPM of the song used as an example previously, but you should always try all BPMs you find if you will go with this method.

## Using an online tool
There are multiple tools online to automatically check the BPM of a music file for you, this is probably the least accurate method you could use.

One of the tools used for that is [GetSongbpm's tool](https://getsongbpm.com/tools/audio), keep in mind it only works with the `mp3` format.


## Checking charts from other rhythm games
There's ALWAYS an osu! chart for the song you are remixing.

Most rhythm games have the BPM accessible from the chart file they use, some games like osu! use milliseconds for beats instead of BPM, in which case you'd need to download the game and check in it's editor, this is the best method so far in my opinion.

## Checking a fandom wikia
This works like a charm, a lot of times.

A lot of fandom wikias contain the BPMs of popular songs from that fandom's media, this is your best option specially if you are going to remix a Vocaloid or a Touhou song.

<HeaderBadgesWidget commaDelimitedContributors="Saraistupid" lastDateString="2/11/23" />
