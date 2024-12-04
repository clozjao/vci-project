---
description: >-
  Integrating our Widgets on your page gives you some control of style
  variations for some products on the component level.
---

# Widgets Customization

This allows you to:

1. set up our widgets to better match your corporate identity,
2. easier integration with the overall design of your existing products,
3. differentiate the integration from your competitors,
4. add custom styling to components.

## data-ck-props

1. add data-ck-props in html root position

```html
<div id="sport-root"  data-ck-props='{"theme":{"pbgc":"000","sbgc":"1a1a1a","pc":"D2B79E","sc":"333","tc":"333","tpc":"fff","tsc":"999","qlbc":"333","primaryColorLinearGradientParams":{"deg":"","color1":"F4E7D6","opacity1":"","color2":"D2B79E","opacity2":"","color3":"","opacity3":""},"quickLink":{"sponsor":true},"burger":false,"eventList":{"statementLink":true}},"displayHeader":false,"displayPCLeftSidebar":true,"displayPCNavbar":true,"displayPCNavHome":true,"displayPCNavSearch":true,"loginCart":false,"displaySports": "1,4"}'>
```

2. widget default settings

```json
{
  "theme": {
      "pbgc": "000",
      "sbgc": "1a1a1a",
      "pc": "D2B79E",
      "sc": "333",
      "tc": "333",
      "tpc": "fff",
      "tsc": "999",
      "qlbc": "333",
      "primaryColorLinearGradientParams": {
          "deg": "",
          "color1": "F4E7D6",
          "opacity1": "",
          "color2": "D2B79E",
          "opacity2": "",
          "color3": "",
          "opacity3": ""
      },
      "quickLink": {
          "sponsor": true
      },
      "burger": false,
      "eventList": {
          "statementLink": true
      }
  },
  "displayHeader": false,
  "displayPCLeftSidebar": true,
  "displayPCNavbar": true,
  "displayPCNavHome": true,
  "displayPCNavSearch": true,
  "displayPCBanner": true,
  "displayPCScoreboard": true,
  "displayHomepage": false,
  "displaySports": "1,4",
  "autoBetSuffix":"https://sprodm.uni247.xyz/",
  "loginCart": false,
}
```

| Props                |                                  |               | Origin                       | Default                    | Default settings in PC | Default settings in MB | Description                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | -------------------------------- | ------------- | ---------------------------- | -------------------------- | ---------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme                | pbgc                             |               | primary\_background\_color   | 'f5f6fa'                   |                        |                        | mainly color settings                                                                                                                                                                                                                                                                                                                                          |
|                      | sbgc                             |               | secondary\_background\_color | 'fff'                      |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | pc                               |               | primary\_color               | '6cc1ff'                   |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | sc                               |               | secondary\_color             | 'fff'                      |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | tc                               |               | third\_color                 | '333'                      |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | tpc                              |               | text\_primary\_color         | '333'                      |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | tsc                              |               | text\_secondary\_color       | 'c4c4c4'                   |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | qlbc                             |               | quick\_link\_border\_color   | 'eaeaea'                   |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | primaryColorLinearGradientParams | deg           |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      |                                  | color1        |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      |                                  | opacity1      |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      |                                  | color2        |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      |                                  | opacity2      |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      |                                  | color3        |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      |                                  | opacity3      |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | quickLink                        | sponsor       |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
|                      | burger                           |               |                              |                            |                        |                        | display burger                                                                                                                                                                                                                                                                                                                                                 |
|                      | eventList                        | statementLink |                              |                            |                        |                        |                                                                                                                                                                                                                                                                                                                                                                |
| displayHeader        |                                  |               |                              | true                       | V                      | V                      |                                                                                                                                                                                                                                                                                                                                                                |
| displayPCLeftSidebar |                                  |               |                              | true                       | V                      |                        | LeftSidebar                                                                                                                                                                                                                                                                                                                                                    |
| displayPCNavbar      |                                  |               |                              | true                       | V                      |                        | Navbar                                                                                                                                                                                                                                                                                                                                                         |
| displayPCNavHome     |                                  |               |                              | true                       | V                      |                        | Home button on Navbar                                                                                                                                                                                                                                                                                                                                          |
| displayPCNavSearch   |                                  |               |                              | true                       | V                      |                        | Search button on  Navbar                                                                                                                                                                                                                                                                                                                                       |
| displayPCBanner      |                                  |               |                              | true                       | V                      |                        | Banner                                                                                                                                                                                                                                                                                                                                                         |
| displayPCScoreboard  |                                  |               |                              | true                       | V                      |                        | Scoreboard                                                                                                                                                                                                                                                                                                                                                     |
| displayHomepage      |                                  |               |                              | false                      |                        |                        | only display Homepage                                                                                                                                                                                                                                                                                                                                          |
| displaySports        |                                  |               |                              | "1,4"                      |                        |                        | only display selection Sports                                                                                                                                                                                                                                                                                                                                  |
| autoBetSuffix        |                                  |               |                              | https://sprodm.uni247.xyz/ |                        |                        | after add auto\_bet into orderslip will redirect to setting url                                                                                                                                                                                                                                                                                                |
| loginCart            |                                  |               |                              | false                      |                        |                        | Upon setting the system to require login for placing bets (originally, it allows placing bets and prompts for login after each bet until placing an order requires mandatory login due to the guest mode wallet being 50, and default minimum bet to place an order is 100, accounting for the possibility of a minimum bet of 1 due to currency constraints). |

## Props in url

1. auto\_bet
   * add bet to orderslip automatically
   * ex: https://sprodm.uni247.xyz?auto\_bet=
2. access\_token
   * user token setting
   * ex: https://sprodm.uni247.xyz?access\_token=

## Tracking options

1. requiredLogin
   * When detected as a guest login and upon clicking to add a bet, this function will be invoked; hence, it requires specifying the login function.

```javascript
window.requiredLogin = () => alert('login')
```

2. onclickMarkets
   * When entering and exiting the market page (event details page), this function will be called.

```javascript
window.onclickMarkets = (isGoToMarket) => {
  console.log('isGoToMarket', isGoToMarket)
  return isGoToMarket
}
```
