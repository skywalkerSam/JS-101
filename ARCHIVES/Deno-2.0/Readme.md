# introduction to [Deno 2.0](https://deno.com)

Uncomplicate JavaScript.)

Deno is the open-source JavaScript runtime for the modern web.

<!-- [Deno 2.0 Launch Event](https://www.youtube.com/watch?v=d35SlRgVxT8) -->

[Deno in 100s](https://www.youtube.com/watch?v=pcC4Dr6Wj2Q)

[Docs](https://docs.deno.com/runtime/)

&emsp;

## Deno 2.0 Features

- A modern JavaScript runtime

- Performance

- Secure by default

- Native TypeScript Support

- No *node_modules*, no package installations, it's magic...🪄

- JSR package manager

- Jupyter Notebook Kernel

- Legacy support (backward compatible.)

&emsp;

## Getting started

```bash
deno install 
```

## Initialize

```bash
deno init
```

## Run

```bash
deno main.ts 
```

```bash
deno run main.ts 
```

*Optional*, **--allow-read/-R** like tags for permissions! (*better security.)

## Add packages

```bash
deno add
```

## Remove packages

```bash
deno remove
```

## Task

```bash
deno task
```

## Format

```bash
deno fmt
```

## Lint

```bash
deno lint
```

## tsc

```bash
deno check main.ts
```

## nodemon

```bash
deno run --watch
```

## Test

```bash
deno test
```

## Compile (*yeah, really.)

The executable file sizes are huge* because it comes with the minified deno runtime because, JavaScript is a "dynamic language". And If the difference between KB and MB matters to you, you shouldn't be using JavaScript in the first place.)

```bash
deno compile ./main.ts
```

### Cross-compile

```bash
deno compile --target=x86_64-unknown-linux-gnu ./main.ts
```

`Tip:` **--target** for compile options.

## Upgrade

```bash
deno upgrade
```

&emsp;

Until next time...✌️
