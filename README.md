![Drawing of a rocket launching with Pleo logo on the side](https://repository-images.githubusercontent.com/255552950/c9991080-ff11-11ea-8706-5d40322f68fe)

# ¡Space·Rockets! app

[DEMO](https://ephemeral-dodol-c55846.netlify.app/)

This represents the latest state of the challenge.

## Challenge

I have completed a total of 4 Pull Requests.

[PR#1 Testing Setup](https://github.com/mobregozo/space-rockets-challenge/pull/1) - Add testing setup. I did this first in order to make the testing coverage incremental as I was developing the others tasks.

[PR#2 Task 1](https://github.com/mobregozo/space-rockets-challenge/pull/2) - Fix the issue with the launch local dates.

[PR#3 Task 2](https://github.com/mobregozo/space-rockets-challenge/pull/3) - Add "Favorites" new feature to the app.

[PR#4 Task 3](https://github.com/mobregozo/space-rockets-challenge/pull/4) - Update main external libraries.

### Comments and considerations

In terms of testing, as I shared on my first PR, it might be worth iterating on doing e2e testing, covering more edge cases for the unit/integration tests, and having some sort of coverage analysis to see where we are.

I have used conventional commits, as it helps me to scope the changes I do.

In terms of the modularity of my technical decisions, I prioritized simplicity over modularising everything just in case we need it in the future. In other words, my approach was, let’s make it simple for now, and we can refactor and abstract functionality if needed.

Some of the questions and comments I have included in the different PRs I would have raised before working on these items, but to make it as real as possible I decided to leave them there.

Scaffolding of the Chakra UI components could have been improved, as I don’t have much experience with this framework.

Side note: The v3 version of SpaceX API is officially deprecated. This can be updated, but the data has changed a bit, so as the visualization might change I thought it was not the right moment for this, but maybe something you may consider in the future. Plus, based on the documentation, they are not adding more entries to this API.

____

### [👉 Go to the challenge 👈](./CHALLENGE.md)

### [🚀 See the app in action 🚀](https://spacerockets.netlify.app)

## Develop

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn start` to start development environment

## Testing

- run `yarn test` to run the tests.

## Build

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn build` to build app for production
- output is in `build` directory,
  [ready to be deployed](https://create-react-app.dev/docs/deployment/)

## Data

All data is fetched from the unofficial SpaceX API V3 at
[spacexdata.com](https://docs.spacexdata.com/?version=latest).

## Technologies

> This project was bootstrapped with
> [Create React App](https://github.com/facebook/create-react-app). You can
> learn more in the
> [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- [React](https://reactjs.org/) - UI library
- [Chakra UI](https://chakra-ui.com/) - Design system and component library,
  with [Emotion](https://emotion.sh), its peer dependency
- [SWR](https://swr.now.sh/) - Data fetching and caching library
- [React Router v6](https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/installation/getting-started.md) -
  routing library
- [React Feathers](https://github.com/feathericons/react-feather) - Icons
  ([Feather icons](https://feathericons.com/) wrapper for React)
- [timeago.js](https://timeago.org/) - Tiny library to display human-readable
  relative time difference
