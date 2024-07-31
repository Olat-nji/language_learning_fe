# Language Learning AI Game

## Overview

Welcome to the Language Learning AI Game! This repository contains the source code for our interactive language learning game.

## Introduction

The Language Learning AI Game aims to create an engaging and effective language learning experience through interactive 3D games and advanced AI technology. Our goal is to make language acquisition enjoyable for users of all ages and backgrounds.

## Features

- Interactive Dialogues with 3D Avatars: Practice speaking with avatars and receive real-time feedback on grammar and pronunciation.

- Dramatic Storylines: Immerse yourself in engaging storylines with customizable quests like adventure, mystery, or romance.

- Cultural Insights: Learn idiomatic expressions and cultural nuances while progressing through the game.

## Installation

In order to run this app locally, you should have the following programs installed on your computer:

- [nodejs](https://nodejs.org/) >= 20.0.0
- [pnpm](https://yarnpkg.com/) >= 9.4.0


To get started with the project, follow these steps:
#### Clone this repository

```
git clone https://github.com/hngprojects/language_learning_fe.git
cd language_learning_fe
```

#### Install dependencies

```
pnpm install
```

#### Start the server

```
pnpm dev
```

Open ``` http://localhost:3000 ``` with your browser to see the result.

## Access Style Guides and Components
Open ``` http://localhost:3000/guides ``` to see the components and style guides available for you.

## Usage

Once the development server is running, you can start exploring the game and developing new features. The main entry point of the application is ``` (landing-routes)/(home)/pages.tsx ```.

### Project Structure
- ```app/ ```: Contains the Next.js pages.
    - auth-routes/
    - landing-routes/
      - legal/
    - guides/
    - dashboard/
      - products/
      - settings/
    - admin/
    - game/
- ```components/ ```: Contains React components used throughout the application.
    - common/
    - game/
    - admin/
    - landing/
    - forms/
- ``` styles/ ```: Contains the CSS and styling files.
- ```fonts/ ```
- ```hooks/ ```
- ``` utils/ ```: Contains utility functions and helpers.
- ``` test/ ```

### Scripts
- ```pnpm dev```: Runs the development server.
- ``` pnpm build ```: Builds the application for production.
- ``` pnpm lint ```: Runs ESLint to check for linting errors.

## Contributing
Read our [contributing guide](./CONTRIBUTING.md)  to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to the Learning Language AI Game.