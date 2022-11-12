# qp-filters &middot; [![npm version](https://img.shields.io/npm/v/@mcpronovost/qpfilters.svg?style=flat)](https://www.npmjs.com/package/@mcpronovost/qpfilters) [![npm license](https://img.shields.io/npm/l/@mcpronovost/qpfilters?color=%231081c2)](https://github.com/mcpronovost/qp-filters/blob/main/LICENSE)

An easy-to-use collection of filters, originally created for use in a roleplaying project build with Vue.js 3.

## Install

```
  $ npm install @mcpronovost/qpfilters --save
```

## Available Filters

* [qpabbr](https://github.com/mcpronovost/qp-filters/wiki/qpabbr)
* [qpcode](https://github.com/mcpronovost/qp-filters/wiki/qpcode)
* [qpdate](https://github.com/mcpronovost/qp-filters/wiki/qpdate)
* [qprhex](https://github.com/mcpronovost/qp-filters/wiki/qprhex)
* [qpslug](https://github.com/mcpronovost/qp-filters/wiki/qpslug)
* [qpunit](https://github.com/mcpronovost/qp-filters/wiki/qpunit)

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

## Examples

### qpabbr

``` javascript
qpabbr("Pachu'a Wapi Qatlaalawsiq")
```

`PWQ`

### qpcode

``` javascript
qpcode("This is a [g]bold text[/g] and \n this is an [i]italic text[/i].")
```

`This is a <span style="font-weight:bold;">bold text</span> and <br /> this is an <span style="font-style:italic;">italic text</span>.`

### qpdate

``` javascript
qpdate("2022-10-31T13:50:14.836475-04:00")
```

`31 octobre 2022 à 13:50`

### qprhex

``` javascript
qprhex()
```

`#89a411`

### qpslug

``` javascript
qpslug("Au royaume empoisonné feat. Seðem")
```

`au-royaume-empoisonne-feat-sedem`

### qpunit

``` javascript
qpunit(4928)
```

`4.93k`

--------------------------------------------------------------------

## History

* See [qp-filters release](https://github.com/mcpronovost/qp-filters/releases) list.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mcpronovost/qp-filters/blob/main/LICENSE) file for details.
