# Create Your First TON Telegram WebApp

## Agenda

- TON users != ETH users
- TG Bot evolution: chat = website
- Getting started with a TG webapp
- Best practices
- Examples
- Resources

## Links 

[https://github.com/ton-community/twa-template](https://github.com/ton-community/twa-template)
[http://tonhelloworld.com](http://tonhelloworld.com)
[https://core.telegram.org/bots/webapps](https://core.telegram.org/bots/webapps)
[https://core.telegram.org/bots/tutorial](https://core.telegram.org/bots/tutorial)
[https://github.com/ton-defi-org/tonstarter-twa](https://github.com/ton-defi-org/tonstarter-twa)


## TON users != ETH users

- The next billion users don't understand crypto
- They should enjoy its benefits without having to know how it works
- How do we hide all the piping from the user
- Meet Telegram web apps

## Getting started with a TG webapp

3 components:

  1. Smart contracts - FunC, deployed on-chain
  2. Web frontend - React
  3. Telegram bot - see @Botfather


## Design guidelines

- Telegram look and feel: so that people feel like it's a native part of telegram.
- Snappy, smooth and following a consistent cross-platform design
- Responsive elements for different screen sizes and platforms (iOs, Android, web)
- Smooth animations, ideally 60fps
- Labels for accessibility

## Sample Repo

Boilerplate starter templae for a new Telegram Web App (TWA) interacting with the TON blockchain

Link: [https://github.com/ton-community/twa-template](https://github.com/ton-community/twa-template)


In this Repo (twa-template) we have 

- twa-template/src
  - components
  - contracts
  - hooks
  - App.css
  - App.tsx
  - index.css
  - index.css
  - main.tsx
  - vite-env.d.ts

In the contracts we are relaying on previously deployed contracts.

- twa-template/src/contract
  - counter.ts : It does two main things to get counter value and to increase counter value.
  - faucetJetton.ts : Provide Jetton to a user.
  - fauceJettonWallet.ts

We also have some hooks that we can use:

- twa-template/src/hooks
  - useTonClient.ts : It is an HTTP client that interacts with the TON blockchain to create data.
  - useTonConnect.ts : It exposes any Ton compatible wallet and lets you connect your wallet to your app.
  - useCounterContract.ts
  - useAsyncInitialize.ts
  - useFaucetJettonContract.ts


## Styling (App.css)

- App.css

```css
:root {
  --tg-theme-bg-color: #efeff3;
  --tg-theme-button-color: #2eaddc;
  --tg-theme-button-text-color: white;
}
```

Using this css variables works pretty well with telegram.


> Don't forget to include the twa-dev/sdk library

```ts
import "@twa-dev/sdk";
```

## Tonswap example

### Resources

- [https://core.telegram.org/bots/webapps](https://core.telegram.org/bots/webapps)
- [https://core.telegram.org/bots/tutorial](https://core.telegram.org/bots/tutorial)
- [https://github.com/ton-defi-org/tonstarter-twa](https://github.com/ton-defi-org/tonstarter-twa)


