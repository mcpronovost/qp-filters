# qp-filters &middot; [![npm version](https://img.shields.io/npm/v/@mcpronovost/qpfilters.svg?style=flat)](https://www.npmjs.com/package/@mcpronovost/qpfilters)

An easy-to-use collection of filters, mostly created to be used with Vue.js.

## Install

```
  $ npm install @mcpronovost/qpfilters --save
```

## Available Filters

* [qpdate](#qpdate)
* [qpslug](#qpslug)
* [qpunit](#qpunit)

## Usage

### Direct include (Vue.js 3)

``` vue
<script setup>
  import { qpdate } from "@mcpronovost/qpfilters";
  const props = defineProps({
      topic: {
          type: Object,
          required: true
      }
  })
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

## qpdate

| | |
| :-- | :-- |
| method | `qpdate(value, lang, tz, show)` |
| default | `qpdate(null, "fr", "America/Toronto", "full")` |
| example | `qpdate("2022-10-31T13:50:14.836475-04:00")` |
| return | 31 octobre 2022 à 13:50 |
| | |

| | |
| :-- | :-- |
| example | `qpdate("2022-10-31T13:50:14.836475-04:00", "en", "America/Toronto", "date")` |
| return | October 31, 2022 |
| | |

| | |
| :-- | :-- |
| example | `qpdate("2022-10-31T13:50:14.836475-04:00", "en", "Europe/Paris", "time")` |
| return | 18:50 |
| | |

--------------------------------------------------------------------

## qpslug

| | |
| :-- | :-- |
| method | `qpslug(value)` |
| example | `qpslug("Au royaume empoisonné feat. Seðem")` |
| return | au-royaume-empoisonne-feat-sedem |
| | |

--------------------------------------------------------------------

## qpunit

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
