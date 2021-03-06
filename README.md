# Random image generator

This repository contains a simple image generation tool written in node and using [Lorem Picsum](https://picsum.photos/) service.

## Set up environment

Clone this repository.

```sh
git clone https://github.com/nipunravisara/random-image-generator.git
```

Move into projet directory.

```sh
cd random-image-generator
```

Install dependencies.

```sh
yarn install
```

## Run project

```sh
yarn start
```

or with arguments

```
yarn start  --firstImageId=20  --secondImageId=50 --width=100 --height=100
```

after a successful execution, program will create an `image` directory to save images.

## Arguments

| Argument        | Type     | Description                                                                           |
| --------------- | -------- | ------------------------------------------------------------------------------------- |
| `firstImageId`  | `number` | ID of the first image you want to use. [Explore images](https://picsum.photos/images) |
| `secondImageId` | `number` | ID of the second image you want to use.                                               |
| `width`         | `number` | Should be a positive integer.                                                         |
| `height`        | `number` | Should be a positive integer.                                                         |

## Test project

Testings fo main functionalites are written in `jest` library.

Run test

```sh
yarn test
```
