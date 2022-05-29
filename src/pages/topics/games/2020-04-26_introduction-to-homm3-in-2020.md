---
title: 'Introduction to HoMM 3 in 2020'
publishDate: '2020-04-26'
lastUpdateDate: '2022-05-22'
layout: '$layouts/BlogPost.astro'
author: 'Vesa Piittinen'
description: 'A look into various ways to play this classic game on modern day machines, and with more content.'
redirectPathnameFrom: '/homm3.html'
redirectPathnameTo: '/topics/games/2020-04-26_introduction-to-homm3-in-2020'
---

## Table of contents

1. [Heroes of Might and Magic III](#heroes-iii-of-might-and-magic)
2. [VCMI: HoMM 3 Remake](#vcmi-homm-3-remake)
3. [Fan extensions of the original game](#fan-extensions-of-the-original-game)
    - [HD Mod](#hd-mod)
    - [Horn of the Abyss](#horn-of-the-abyss)
    - [Era II](#era-ii)
4. [Communities and more information](#homm-3-communities-and-more-information)
	- [Patches for the original CD releases](#patches-for-the-original-cd-releases)
	- [See also](#see-also)

---

<h2 id="heroes-iii-of-might-and-magic" style="font-family:var(--font-pixel);font-size:48px;font-weight:normal;display:flex;align-items:center;flex-wrap:wrap">
	<img alt="" src="/gfx/logos/homm3-shield.png" height="200" width="200" />
	<span style="line-height:1.5">
		<span style="display:inline-block;vertical-align:top">Heroes<span style="display:block;font-size:16px;margin-top:0.5em">of Might and Magic</span></span>
		III
	</span>
</h2>

Heroes of Might and Magic 3 is a fantasy adventure strategy game originally released in 1999 that is still popular today
with lots of activity by players and modders. This page focuses on providing information and resources for the original
game and fan developments, but ignores Ubisoft's "HD Edition" that was published in 2015.

### How to get it?

The best way to get the game these days is to [buy it from GOG.com](https://www.gog.com/game/heroes_of_might_and_magic_3_complete_edition) and thus get it free of digital rights management
(DRM). Complete Edition of HoMM 3 includes _Restoration of Erathia_ (the original game), _Armageddon's Blade_ (first
expansion), and _Shadow of Death_ (the last official expansion).

At GOG the game is available in English, French, Polish, and Russian. Should you need other languages it is possible to
find the game in [Finnish](https://vesa.piittinen.name/suomeksi/heroes-iii-suomeksi/),
[German](https://www.drachenwald.net/index.php?thread/8869-heroes-iii-complete-auf-deutsch/),
[Italian](https://archive.org/details/HeroesOfMightAndMagicIII),
[Ukrainian](http://mmgames.ru/index.php?option=com_content&view=article&id=130&Itemid=217&lang=en), and maybe some other
languages too? Send me (Merri) a message at [Twitter](https://twitter.com/merrinen),
[Heroes Community](http://heroescommunity.com/) or [/r/HoMM Discord](https://discord.gg/rxwx6Wt) if you know of more!
I'm happy to update this page to include links to more localizations.

<p><br /></p>

## VCMI: HoMM 3 Remake

---

<br />

<div class="vcmi">
<img class="vcmi-logo" alt="VCMI" src="/gfx/homm3/logo-vcmi.png" height="130" width="126" style="filter:drop-shadow(.125em .125em .5em black)" />
<div>
<strong>VCMI</strong> is a re-implementation of Heroes III game engine, but with modding and extensibility built-in!
Also multiple platforms are supported: Windows, Linux, Mac and Android. The downside of VCMI is that it is still
work-in-progress and depends a lot on available free time of able developers.
</div>
</div>

Changing the original game is hard as the source code is not available, thus doing more specialized changes requires a
very high level of skill which is out of reach for most modders. This is why VCMI exists: to make it possible for more
people to do mods that provide more variety than what is possible within the limitations of other fan projects (Era II,
HD Mod).

-   [VCMI homepage](https://vcmi.eu/)
-   [Main VCMI thread at Heroes Community](http://heroescommunity.com/viewthread.php3?TID=30659)

VCMI requires the original game files to function.

<style>
@media not all and (min-width: 40em) {
	.vcmi-logo { margin-bottom: 2rem; }
}
@media (min-width: 40em) {
	.vcmi { display: flex; align-items: center; gap: 1rem; }
}
</style>

<p><br /></p>

## Fan extensions of the original game

---

### HD Mod

**HD Mod** is an essential addition to the original Heroes III experience! This project does not change gameplay.
Instead HD Mod adds support for larger resolutions than the game's original 800×600, fixes usability issues, and removes
a few bugs. However it also supports plugins (or packs) which can modify the game.

<img alt="Heroes 3 HD+ Mod logo" src="/gfx/homm3/logo-hd-mod.png" height="96" width="481" style="box-shadow:.125em .125em .5em black" />

[Visit HD Mod download page](https://sites.google.com/site/heroes3hd/eng/download)

<p><br /></p>

### Horn of the Abyss

_Horn of the Abyss_ or **HotA** is a fanmade "third expansion" to the game and is of a very good quality!

<figure>
	<img alt="Cove" src="/gfx/homm3/city-cove.jpg" height="374" width="800" style="box-shadow: 0 0 0 2px black" />
	<figcaption><small>City screen of Cove</small></figcaption>
</figure>

The way everything is built feels like a true expansion pack to the game with high production value. HotA adds _Cove_,
an entirely new town and does so by not removing any of the originals. They're also working on adding a second new town,
which may or may not be complete by 31st December 2020… That is the cost of projects made with the spare time of pros
:)

[Read more about the _Horn of the Abyss_ project](https://www.hota.acidcave.net/about_the_project.html)

<figure>
	<img alt="Horn of the Abyss" src="/gfx/homm3/logo-hota-2020.jpg" height="320" width="760" style="box-shadow:0 0 0 2px black" />
	<figcaption style="font-size:2rem">
		<a href="http://h3hota.com/en/download">Download <span style="display:inline-block">Horn of the Abyss!</span></a>
	</figcaption>
</figure>

<p><br /></p>

### Era II

**Era** works similarly to **HotA** in that it modifies the original game, but instead of being a fixed single expansion
project it aims to provide a common platform for user made mods. Normally mods would be totally incompatible and very
challenging to make, but with Era multiple mods can co-exist at the same time. The project includes editor and custom
scripting language.

[Main Era II thread at Heroes Community](http://heroescommunity.com/viewthread.php3?TID=37208)

<p><br /></p>

<p style="text-align:center">
	<img alt="HoMM 3 HD Edition War Unicorn" src="/gfx/homm3/war-unicorn.png" height="301" width="340" />
</p>

## HoMM 3 communities and more information

---

[Heroes Community](http://heroescommunity.com/) is a discussion forum for all things Heroes of Might and Magic.

There is also an active Reddit community: [/r/HoMM](https://www.reddit.com/r/HoMM/). They also have a
[Discord chat](https://discord.gg/rxwx6Wt)!

For anything more official the best place today is probably [GOG's HoMM forum](https://www.gog.com/forum/heroes_of_might_and_magic_series).

I can also recommend [Heroes III Wiki](https://heroes.thelazy.net/index.php/Main_Page) which is an excellent resource
that treats _Horn of the Abyss_ as a first class citizen alongside the original expansions.

### Patches for the original CD releases

In the old days it was size efficient to release patches to change existing files rather than sharing all the changed
files. This also made one to require the original files as you'd do nothing with only the patch. In modern times patches
have become unnecessary as we simply re-download gigabytes worth of data on each game update... so in reality we've
become awfully wasteful of computing and network resources.

I have seen the trouble of finding and putting together a list of all the English patches released for the game. You
don't need these patches if you are playing a GOG.com release, but I did the research and collected these together for
localization purposes to find out how the game text has evolved over time. Tracking down the files one by one was awful!

| Game release                            | Filename                                                           | Description                                                                                            |
| :-------------------------------------- | :----------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| Restoration of Erathia<br />Version 1.1 | H310TO11.EXE                                                       | Patch from 1.0 to 1.1                                                                                  |
| Restoration of Erathia<br />Version 1.2 | H310TO12.EXE<br />H311TO12.EXE                                     | Patch from 1.0 to 1.2<br />Patch from 1.1 to 1.2                                                       |
| Restoration of Erathia<br />Version 1.3 | H310TO13.EXE<br />H311TO13.EXE<br />H312TO13.EXE                   | Patch from 1.0 to 1.3<br />Patch from 1.1 to 1.3<br />Patch from 1.2 to 1.3                            |
| Restoration of Erathia<br />Version 1.4 | H310TO14.EXE<br />H311TO14.EXE<br />H312TO14.EXE<br />H313TO14.EXE | Patch from 1.0 to 1.4<br />Patch from 1.1 to 1.4<br />Patch from 1.2 to 1.4<br />Patch from 1.3 to 1.4 |
| Armageddon's Blade<br />Version 2.1     | H320TO21.EXE                                                       | Patch from 2.0 to 2.1                                                                                  |
| Armageddon's Blade<br />Version 2.2     | H320TO22.EXE<br />H321TO22.EXE                                     | Patch from 2.0 to 2.2<br />Patch from 2.1 to 2.2                                                       |
| Shadow of Death<br />Version 3.1        | H330TO31.EXE                                                       | Patch from 3.0 to 3.1                                                                                  |
| Shadow of Death<br />Version 3.2        | H330TO32.EXE<br />H331TO32.EXE                                     | Patch from 3.0 to 3.2<br />Patch from 3.1 to 3.2                                                       |

<style>
	table { font-family: var(--font-pixel); font-size: 8px; line-height: 2; }
	th { font-family: var(--font-serif); font-size: 1rem; }
	td { padding-bottom: 16px;  vertical-align: top; }
	td + td,
	th + th { padding-left: 24px; }
</style>

All the above in a single file: [all official 16 HoMM 3 patches](/downloads/all_16_homm3_patches.7z) (28 MB)

In case wondering, you need [7-zip](https://7-zip.org/) to handle 7z files.

### See also

Some related content that you might find interesting.

-   [Wanted: Official HoMM I & II Patches](http://heroescommunity.com/viewthread.php3?TID=35226)
-   [New World Computing commercial CD releases](http://heroescommunity.com/viewthread.php3?TID=36854) (English releases)
