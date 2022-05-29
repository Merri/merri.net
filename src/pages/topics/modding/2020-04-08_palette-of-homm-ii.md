---
title: 'Palette of HoMM II'
publishDate: '2020-04-08'
lastUpdateDate: '2022-05-30'
layout: '$layouts/BlogPost.astro'
author: 'Vesa Piittinen'
description: 'Information on the palette in the Heroes of Might and Magic II.'
---

The original `KB.PAL` file in `HEROES2.AGG` has the palette colors defined in values in one fourth of the actual values
shown in the screen as the game has colors in 6-bit. The extracted palette below has this corrected by using the
algorithm used by [DOSBox to go from 6-bit to 8-bit](https://www.vogons.org/viewtopic.php?p=349246#p349246):
`C8 = (C6 << 2) | ((C6 & 0x30) >> 4)`.

<img loading="lazy" alt="HoMM II palette" src="/gfx/palettes/homm2.png" height="256" width="256" />

The first and last ten entries of the palette are unused and are black. To reduce confusion I've added community color
values from the alternate palette that is also available below.

Palette indexes 214 – 221 and 231 – 241 are used for color cycling:

- Red: 214 – 217
- Yellow: 218 – 221
- Water: 231 – 237
- Blue: 238 – 241

[More information on AGG files](https://thaddeus002.github.io/fheroes2-WoT/infos/informations.html).

Here are also backup downloads for [`AGG1Extractor.zip`](/downloads/agg1extractor.zip) and
[`AGG2Extractor.zip`](/downloads/agg2extractor.zip) which once existed at
[Terry Butler's site](https://www.terrybutler.co.uk/downloads/).

Also thanks to grave-y ([Heroes of Might and Reddit discord](https://discord.gg/rxwx6Wt)) for providing info!

## Alternative palette

This is a palette I found from `heroes2_in-game_graphic.rar` at [HoMM2.com](http://www.homm2.com/downloads/files).

<img loading="lazy" alt="HoMM II palette" src="/gfx/palettes/homm2-alternate.png" height="256" width="256" />

It might be more useful for community tools as it contains additional colors for transparent background (cyan at index 0) and shadow color (magenta). However I haven't worked with HoMM2 tools (yet) so for now this is just a speculative find for me.

## Original color values

These are the values in `KB.PAL`:

<textarea cols="60" rows="20">0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
63 63 63
60 60 60
58 58 58
55 55 55
53 53 53
50 50 50
48 48 48
45 45 45
43 43 43
41 41 41
38 38 38
36 36 36
33 33 33
31 31 31
28 28 28
26 26 26
23 23 23
21 21 21
18 18 18
16 16 16
14 14 14
11 11 11
9 9 9
6 6 6
4 4 4
1 1 1
0 0 0
63 59 55
60 55 50
58 52 46
56 49 42
54 46 38
52 42 34
50 40 30
48 37 27
46 34 24
43 31 21
41 28 18
39 26 15
37 24 13
35 21 11
33 19 8
31 17 7
29 15 5
26 13 4
24 12 3
22 10 2
20 9 1
18 7 1
15 6 0
13 5 0
11 4 0
9 3 0
48 51 63
43 46 60
38 42 58
34 38 56
30 34 54
26 30 52
22 26 49
19 22 47
16 19 45
13 16 43
10 13 41
8 12 38
7 10 36
5 9 34
4 8 32
3 7 30
2 6 28
1 5 25
1 5 23
0 4 21
0 3 19
0 3 17
43 56 39
39 53 35
36 51 32
32 48 28
29 46 25
26 44 23
23 41 20
20 39 17
18 36 15
15 34 12
13 31 10
11 29 9
9 27 7
8 25 6
6 23 5
5 21 3
3 19 2
2 16 1
1 14 1
1 12 0
0 10 0
0 8 0
0 6 0
63 61 52
62 58 43
61 56 35
60 55 27
59 53 20
58 51 13
57 50 5
56 49 0
54 47 8
52 44 7
50 40 6
47 38 6
45 35 6
42 31 5
39 28 4
37 25 3
34 22 3
31 19 2
29 17 2
26 15 0
24 12 0
21 10 0
19 8 0
57 51 62
54 47 59
50 42 57
48 39 54
45 35 52
42 31 49
39 28 47
36 25 45
33 22 42
30 19 40
28 17 37
25 14 35
23 12 32
20 10 30
18 8 27
16 6 25
14 5 23
11 2 20
8 1 17
6 0 14
4 0 11
45 61 63
42 58 60
40 56 58
37 54 56
34 51 53
32 49 51
30 46 49
28 44 47
25 42 44
23 39 42
22 37 40
20 35 37
18 32 35
16 29 32
14 26 29
12 24 27
10 21 24
8 19 22
7 16 19
5 14 16
4 11 14
3 9 11
2 7 9
63 57 57
61 52 52
60 47 47
58 43 43
57 39 39
55 35 35
54 31 31
52 27 27
51 23 23
49 20 20
48 17 17
47 14 14
46 11 11
45 9 9
42 8 8
39 6 6
36 4 4
33 3 3
30 2 2
27 1 1
24 0 0
21 0 0
18 0 0
63 57 39
62 54 35
61 52 31
60 49 28
59 46 24
58 43 20
57 40 17
56 36 14
56 33 11
51 29 8
46 25 6
41 22 4
37 18 2
32 15 1
27 12 0
23 10 0
63 22 3
55 13 1
48 5 0
41 0 0
63 63 0
63 51 0
48 35 0
35 18 0
41 52 0
37 47 0
33 43 0
30 39 1
26 35 1
23 30 1
19 26 1
16 22 1
13 18 1
10 30 52
6 26 49
1 18 45
0 14 43
3 21 47
0 14 43
0 16 45
33 56 63
0 38 63
0 20 57
0 0 41
35 35 47
28 28 39
21 21 31
15 15 23
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
0 0 0
</textarea>
