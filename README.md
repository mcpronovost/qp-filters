# qp-filters &middot; [![npm version](https://img.shields.io/npm/v/@mcpronovost/qpfilters.svg?style=flat)](https://www.npmjs.com/package/@mcpronovost/qpfilters) [![npm license](https://img.shields.io/npm/l/@mcpronovost/qpfilters?color=%231081c2)](https://github.com/mcpronovost/qp-filters/blob/main/LICENSE)

An easy-to-use collection of filters, originally created for use in a roleplaying project build with Vue.js 3.

## Install

```
  $ npm install @mcpronovost/qpfilters --save
```

## Available Filters

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

## History

* See [qp-filters release](https://github.com/mcpronovost/qp-filters/releases) list.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mcpronovost/qp-filters/blob/main/LICENSE) file for details.
