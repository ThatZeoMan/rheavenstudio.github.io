---
sidebar_position: 46
---
# 046 - Space Soccer

*Don't drop the ball! It takes some crafty legwork to keep that thing in the air! Kick, kick, kick!* - Rhythm Heaven

Space Soccer is a **Keep-the-Beat** game.

### Cues

|Name|Description|Length (beats)|
|---|---|---|
|`Ball Dispense`|Throws a soccer ball from offscreen. The Space Kicker will begin kicking two beats after the start of this cue.|2|
|`High Kick-Toe!`|Kicks the ball on "high". Hold at "kick" for half a beat, and release at "toe" in order to perform the high kick.|3|
|`NPC Kickers Enter or Exit`|Raises the NPC Space Kickers in the background according to the duration of the cue.|Resizable|
|`NPC Kickers Instant Enter or Exit`|Raises the NPC Space Kickers instantly.|0.5|

### Properties

|Cue|Variable|Options|Description|
|---|---|---|---|
|`Ball Dispense`|Disable Sound|Toggle|When checked, removes the ball dispense sound.|
|`High Kick-Toe!`|Swing|0-1|Adjusts the timing of "toe!" to work with swing tempo.|
|`NPC Kickers Enter or Exit`|Should Exit?|Toggle|When checked, lowers the Space Kickers instead of raising them.|
|`NPC Kickers Instant Enter or Exit`|Should Exit?|Toggle|When checked, lowers the Space Kickers instead of raising them.|

### Tips
- `Ball Dispense` can be called from any game.
- `Ball Dispense` should be audible almost all of the time. Typically, you should only disable its sound if you're transitioning in from another game's inputs. Be careful!
- If the ball falls, it will not respawn without a `ball dispense` cue. `ball dispense` will not affect anything if there is already a ball being kicked, so try to put them throughout your remix in case someone misses.
	- As a rough estimate, try to put a `ball dispense` cue every four or so beats in your remix while Space Soccer is active.
- Try your hardest to make sure that your `High Kick-Toe!` cues sync up to the music! These cues can easily feel out-of-place when randomly placed in a remix, so make sure to use them thoughtfully and cautiously.

### Legality
- `Ball Dispense` should always go on the onbeat.

### Known Bugs and Issues
- `High Kick-Toe!`'s swing modifier does not currently work.
	- This functionality will likely be removed in a later update, most likely with the inclusion of universal swing.
- The NPC Space Kicker ball logic is strange during a `NPC Kickers Enter or Exit` cue.
