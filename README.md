# qp-filters

## Install

```
  $ npm install @mcpronovost/qpfilters --save
```

## Usage

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
