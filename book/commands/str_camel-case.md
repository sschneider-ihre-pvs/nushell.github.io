---
title: str camel-case
categories: |
  strings
version: 0.71.0
strings: |
  Convert a string to camelCase
usage: |
  Convert a string to camelCase
---

# <code>{{ $frontmatter.title }}</code> for strings

<div class='command-title'>{{ $frontmatter.strings }}</div>

## Signature

```> str camel-case ...rest```

## Parameters

 -  `...rest`: optionally convert text to camelCase by column paths

## Examples

convert a string to camelCase
```shell
>  'NuShell' | str camel-case
```

convert a string to camelCase
```shell
> 'this-is-the-first-case' | str camel-case
```

convert a string to camelCase
```shell
>  'this_is_the_second_case' | str camel-case
```

convert a column from a table to camelCase
```shell
> [[lang, gems]; [nu_test, 100]] | str camel-case lang
```
