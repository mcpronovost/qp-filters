# qp-filters &middot; [![npm version](https://img.shields.io/npm/v/@mcpronovost/qpfilters.svg?style=flat)](https://www.npmjs.com/package/@mcpronovost/qpfilters)

An easy-to-use collection of filters, mostly created to be used with Vue.js 3.

## Install

```
  $ npm install @mcpronovost/qpfilters --save
```

## Available Filters

* [qpcode](#qpcode)
* [qpdate](#qpdate)
* [qprhex](#qprhex)
* [qpslug](#qpslug)
* [qpunit](#qpunit)

## Usage

### Direct include (Vue.js 3)

``` vue
<script setup>
  import { qpdate } from "@mcpronovost/qpfilters";
  // ...
</script>

<template>
  <span v-text="qpdate(props.topic.created_at)"></span>
</template>
```

### Global include (Vue.js 3)

``` javascript
    import { createApp } from "vue";
    import qpfilters from "@mcpronovost/qpfilters";

    const app = createApp(App);

    app.config.globalProperties.$f = qpfilters;
```

``` vue
    <script setup>
        // ...
    </script>

    <template>
        <span v-text="$f.qpdate(props.topic.created_at)"></span>
    </template>
```

--------------------------------------------------------------------

## qpcode

A light and simple way to format user-made text.

| | |
| :-- | :-- |
| method | `qpcode(text)` |
| example | `qpcode("This is a [g]bold text[/g] and \n this is an [i]italic text[/i].")` |
| return | `This is a <span style="font-weight:bold;">bold text</span> and <br /> this is an <span style="font-style:italic;">italic text</span>.` |
| | |

| code | description | css/html |
| :-- | :-- | :-- |
| [g] text [/g] | Bold text | `font-weight:bold` |
| [i] text [/i] | Italic text | `font-style:italic` |
| [s] text [/s] | Underline text | `text-decoration:underline` |
| [b] text [/b] | Strikethrough text | `text-decoration:line-through` |
| [ag] text [/ag] | Left align text | `text-align:left` |
| [ac] text [/ac] | Center align text | `text-align:center` |
| [ad] text [/ad] | Right align text | `text-align:right` |
| [c=#ff0000] text [/c] | Colour text (hexadecimal) | `color:#ff0000` |
| [c=variable] text [/c] | Colour text (variable) | `color:var(--c-variable)` |
| [url=https://...] text [/url] | Link | `<a href="https://...">text</a>` |
| [urlo=https://...] text [/urlo] | Link on new tab | `<a href="https://..." target="_blank">text</a>` |
| [img=https://...] | Image | `<img src="https://..." alt="" />` |
| [ico=mdi-leaf] | Icon (default material icon) | `<i class="mdi mdi-leaf"></i>` |

## qpdate

A way to format aware datetime to localized human-friendly date with, without or only time.

| | |
| :-- | :-- |
| method | `qpdate(value, lang, tz, show)` |
| default | `qpdate(null, "fr", "America/Toronto", "full")` |
| example | `qpdate("2022-10-31T13:50:14.836475-04:00")` |
| return | 31 octobre 2022 à 13:50 |
| | |

| | |
| :-- | :-- |
| example | `qpdate("2022-10-31T13:50:14.836475-04:00", "pl", "Europe/Warsaw", "date")` |
| return | 31 października 2022 |
| | |

| | |
| :-- | :-- |
| example | `qpdate("2022-10-31T13:50:14.836475-04:00", "pl", "Europe/Warsaw", "time")` |
| return | 18:50 |
| | |

--------------------------------------------------------------------

## qprhex

Return a random hexadecimal colour.

| | |
| :-- | :-- |
| method | `qprhex()` |
| example | `qprhex()` |
| return | #89a411 |
| | |

--------------------------------------------------------------------

## qpslug

A way to slugify text.

| | |
| :-- | :-- |
| method | `qpslug(value)` |
| example | `qpslug("Au royaume empoisonné feat. Seðem")` |
| return | au-royaume-empoisonne-feat-sedem |
| | |

--------------------------------------------------------------------

## qpunit

A way to format number to metric-unit version, with or without decimal.

| | |
| :-- | :-- |
| method | `qpunit(num, digits)` |
| default | `qpunit(num, 2)` |
| example | `qpunit(4928)` |
| return | 4.93k |
| | |

| | |
| :-- | :-- |
| example | `qpunit(4928, 0)` |
| return | 5k |
| | |

--------------------------------------------------------------------

## History

* See [qp-filters release](https://github.com/mcpronovost/qp-filters/releases) list.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mcpronovost/qp-filters/blob/main/LICENSE) file for details.
