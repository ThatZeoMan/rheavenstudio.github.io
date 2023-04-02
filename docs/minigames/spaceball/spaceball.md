---
sidebar_position: 4
---
# 004 - Spaceball

*Ignore the camera's wild zooms! Make the ball zoom wildly away! Don't blink! Wipe away your tears!* - Rhythm Heaven Megamix

Spaceball is a **Cue-Based** game. 

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Pitch Ball`|The dispenser shoots a ball.|2|
|`Pitch High Ball`|The dispenser shoots a ball up high. Takes a beat longer than the normal cue.|3|
|`Change Batter Costume`|Changes the batter's costume.|1|
|`Show Alien`|Opens the alien's UFO for two beats.|1|
|`Zoom Camera`|Moves the camera to the desired value over the duration of the cue.|Resizable|
|`Dispenser Prepare`|The dispenser readies itself. It will stay like this <br></br>until the next `Pitch Ball` or `Pitch High Ball`|1|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Pitch Ball`|Type|Baseball, Onigiri, Alien, Tacobell|Sets the object to be dispensed.|
|`Pitch High Ball`|Type|Baseball, Onigiri, Alien, Tacobell|Sets the object to be dispensed.|
|`Change Batter Costume`|Type|Standard, Bunny, SphereHead|Sets the batter's Change Batter Costume.|
|`Zoom Camera`|Zoom|1-320|Changes the camera's zoom, with 10 <br></br>being the default.|
|`Zoom Camera`|Ease|Linear, Instant, Spring,<br></br> *variations of* Quad, Cubic, Quart,<br></br> Quint, Sine, Expo, Circ, Bounce,<br></br> Back, Elastic|Changes the camera's zoom velocity.|

### Tips
- There are a lot of ease types for `Zoom Camera`. Experiment to find which one works for you! If you're not sure which to use, the quad and sine variants typically do the job.
- When changing the `Change Batter Costume` type, it won't be as noticeable if you do it while the `Zoom Camera` zoom is at a higher value.
- `Switch Game` changes the `Change Batter Costume` type to standard.
- The dispenser will always automatically prepare the beat before a `Pitch Ball` or `Pitch High Ball` event.
	- This is the Tengoku method of preparing the dispenser. Alternatively, there's the Megamix method, where the ball is prepared the beat *after* the `Pitch Ball` or `Pitch High Ball` event. This is manual, however.

### Legality
- `Pitch Ball` or `Pitch High Ball` should never start on the same beat as any other cue, with the exception of `Switch Game`.
- You should never hit two balls at the same time.
- It's generally advisable to exclusively put `Pitch Ball` and `Pitch High Ball` events on onbeats.

### Known Bugs and Issues
- After switching costumes for the first time, a second `Change Batter Costume` to the standard appearance will display Air Batter's normal coloration with the last used head.
