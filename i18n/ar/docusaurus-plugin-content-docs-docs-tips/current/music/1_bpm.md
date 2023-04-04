---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

# العثور على سرعة الإيقاع لأُغنية

## المقدمة

سرعة الإيقاع (BPM) هي وحدة قياس سرعة الأغاني. مثال: `120BPM` يعبر عن 120 إيقاع في الدقيقة، أو إيقاعين في الثانية.

العثور على سرعة الإيقاع، عامةً، مهم جداً علشان يبقى عندك chart متزامن. سرعة الإيقاع مهمة جداً في لعبة زي  Rhythm Heaven أكتر من أي لعبة تانية علشان التلميحات الصوتية ***لازم تناسب الموسيقى تماماً***.

فيه عدة طرق تلاقي بيها سرعة الإيقاع لأُغنية، هنبدأ بالأكثر الأكثر شيوعية وهنروح تدريجياً لللأقل شيوعية.

## الضغط مع الإيقاع

دي طريقة شائعة جداً للعثور على سرعة الإيقاع لأُغنية، بس الطريقة دي أقلهم دقة، علشان بتعتمد على حِسك الموسيقي.

الواجهة إلي هتساعدك في العثور على سرعة الإيقاع في Heaven Studio سهلة إنك تلاقيها، فوق شمال في البرنامج فيه إيقونة ماوس جمب زرار اختيار الأُغنية

![tabtn](/img/docs-tips/music/bpm/tapalongbutton.png)

هتظهر واجهة بعد ما تضغط على الأيقونة، إضغط على الأيقونة في الواجهة دي وبكدا هتلاقي سرعة الإيقاع.

![tashow](/img/docs-tips/music/bpm/tapalongshowcase.gif)

الطريقة دي مش موصى بيها علشان هي بتعتمد على حِسك الموسيقي

إحتمال كبير إنك هتجيب سرعة الإيقاع غلط، زي في المثال إلي تحت ده

(الأُغنية هي PinocchioP - Apple dot com)

<ReactPlayer controls url='/vid/bpm/tapalongwrong.mp4' />
<br></br>

بعد إستعمال أحد الطرق التانية، سرعة الإيقاع الصحيحة هي `153BPM`

<ReactPlayer controls url='/vid/bpm/correctbpm.mp4' />


## دور على النت

ابحث "`اسم الأُغنية` BPM" على محرِك البحث المفضل ليك، ده احتمال يجيبلك سرعة الإيقاع الصحيحة أو الخاطئة.

بعض المواقع إلى بتفحص سرعة الإيقاع للأغاني إلي على Spotify تلقائياً:

- [Tunebat](https://tunebat.com)
- [SONG⚡BPM](https://songbpm.com/)
- [GetSongbpm](https://getsongbpm.com/)

مفيش غير موقع واحد من التلاتة (Tunebat) دول كان فيه سرعة الإيقاع الصح للأُغنية الي تم استعمالها كمثال فوق، بس انت لازم تجرب كل السرعات إلي تلاقيها باستخدام الطريقة دي.

## استخدام أداة على النت

فيه عدة أدوات على النت هتدورلك على سرعة الإيقاع لملف صوتي تلقائياً، الطريقة دي يمكن تكون اقل طريقة في الدقة.

أحد الأدوات المستعملة في الطريقة دي هي [GetSongbpm's tool](https://getsongbpm.com/tools/audio)، خلي في دماغك إنها بتدعم ملفات ال`mp3` فقط.


## استخدام برنامج بتاع عمل اغاني

معظم برامج عمل الأغاني فيها أداة تدورلك على سرعة الإيقاع، الأدوات دي قد تكون غير دقيقة احياناً، فا هيبقى فيه طريقة يدوية هتتشرح في حالة إن الطريقة التلقائية منفعتش، مفيش غير Ableton و FL Studio هيتشرحوا هنا.

### FL Studio
#### تلقائياً

FL Studio بيجي مع أداة تلقائية غالباً كويسة تدورلك على سرعة الإيقاع لأُغنية، علشان تفتح الأداة دي إضغط على أيقونة الموجة الصوتية فوق شمال الصوت (جمب اسمه) إلي انت حطيته على الtimeline، بعدها إضغط على "Detect tempo".

![flmenu](/img/docs-tips/music/bpm/flmenu.png)

هتظهرلك واجهة تسألك عن رينج لسرعة الإيقاع الي بتحاول تدور عليه، ينصح إنك تستعمل `75BPM-150BPM` أو `100BPM-200BPM`.

![fltempodetect](/img/docs-tips/music/bpm/fltempodetect.png)

بعد استعمال الأُغنية إلي كنا استعملناها فوق (PinocchioP - Apple dot com)، FL Studio إكتشف إن سرعة الإيقاع هي `153.002BPM`، إلي هي دقيقة، بس إحنا مش محتاجين ال `.0002BPM`.
النتيجة هتختلف على حسب الأُغنية، خاصةً لو فيها تغييرات في سرعة الإيقاع.

![fltempodetected](/img/docs-tips/music/bpm/fldetected.png)

#### يدوياً

Adjusting the tempo manually starts pretty similarly to the automatic method. Just drag in an audio file.

![flmanualoffgrid](/img/docs-tips/music/bpm/flmanualoffgrid.png)


Notice the peaks in the waveform? These are what we're going to use to find the tempo.

Parts of the waveform with little start-up or "attack" tend to be more accurate with this method, which are highlighted in green. The section highlighted in red has a lot more attack, so it has some ambiguity on where it starts.

![flmanualhighlight](/img/docs-tips/music/bpm/flmanualhighlight.png)


The grid in most DAWs are divided up into beats. Once we align this audio file to that grid, it will be in tempo.

![flemptygrid](/img/docs-tips/music/bpm/flemptygrid.png)

In order to do that, adjust the project bpm, which is listed on the top of the screen, until these peaks are situated on the lines of the grid. You might need to zoom in a bit to make sure it's situated just right.

![flmanualongrid](/img/docs-tips/music/bpm/flmanualongrid.png)

This is why we wanted sections with little attack. The start of the section is more defined, making it easier to align.
Once each one of these sections is on the grid, you may need to adjust as you scroll through your song, your project bpm should be
the song's tempo.

### Ableton
#### تلقائياً

في Ableton Live 11، Ableton بيلاقي سرعة الإيقاع لملف صوتي تلقائياً بعد ما بيتحط في الtimeline.

علشان تشوف سرعة الإيقاع الي تم العثور عليها، إضغط على الملف الصوتي إلي في الtimeline.

![ableton](/img/docs-tips/music/bpm/abletontempo.png)

#### يدوياً

شوف الطريقة بتاعت FL Studio، هي هي بالظبط.


## استخدام ArrowVortex

ArrowVortex برنامج معروف شويتين في مجتمع الrhythm game charting، البرنامج ده فيه أدوات تلاقي سرعة الإيقاع ووقت التأخير تلقائياً.

حمل ArrowVortex من الموقع [ده](https://arrowvortex.ddrnl.com/index.html).

بعد ما تفتح ArrowVortex، روح لقايمة View من الشريط إلي فوق واتأكد إن الإختيارات دي متفعلة:

- Show waveform
- Show beat lines
- Show tempo boxes
- Show tempo help
- Show notes
- Time based (C-mod)

حط الملف الصوتي في ArrowVortex، بعدها إضغط F4 على الكيبورد علشان تشغل البندول الإيقاعي.

ده لازم يبقى شكل الواجهة حالياً.

![arrowvortex](/img/docs-tips/music/bpm/arrowvortex.png)

علشان تفتح قايمة المزامنة، روح لقايمة "Tempo" وبعدها إضغط على "Adjust Sync".

![arrowvortextempo](/img/docs-tips/music/bpm/arrowvortextempo.png)

بعدها إضغط على "Find BPM".

![arrowvortexsync](/img/docs-tips/music/bpm/arrowvortexsync.png)

ده لازم يبقى شكل ArrowVortex بعد ما يلاقي سرعة الإيقاع للأُغنية

![arrowvortexsynced](/img/docs-tips/music/bpm/arrowvortexsynced.png)

دلوقتي إضغط مسافة على الكيبورد بتاعك، لو بندول الإيقاع مش مظبوط مع الأُغنية، إرجع لواجهة "Adjust Sync" وإضغط على زرار "0.5" مرة ولا مرتين.

## شوف charts من rhythm games تانية

فيه دايماً osu! chart للأُغنية إلي انت بتعملها ريمكس.

معظم الrhythm games فيها سرعة الإيقاع سهل تجيبه من ملف الchart بتاعها، بعد الألعاب زي osu! بتستعمل الميلي ثانية بدلاً من الBPM في ملفاتها، في الحالة دي لازم تستعمل اللعبة نفسها علشان تشوف سرعة الإيقاع، دي قد تكون أفضل طريقة لغاية دلوقتي.


## شوف fandom wikias

الطريقة دي دايماً تنفع.

فيه fandom wikias كتير بتكتب سرعة الإيقاع للأغاني الي مشهورة من الfandom، ده ديماً ينفع لو انت بتعمل ريمكس لأغنية Vocaloid أو Touhou.
