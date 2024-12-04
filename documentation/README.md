---
description: >-
  This page provides an overview of the LuckySports Betting Entertainment Tools
  documentation.
---

# Getting Started

## Add Widgets on a Page

In this section, we will show how to add a widget to a HTML page.

### Step 1: Initialize Widgets

First, initialize widgets via code snippet by adding it inside `<body>` tag. By default Widgets will use English language.

```html
<script type="text/javascript">
  if (location.hash === "") location.hash = "#/";
  // widget loader
  (function (a, b, c, d, e, f, g, h, i) {
    a[e] ||
      ((i = a[e] =
        function () {
          (a[e].q = a[e].q || []).push(arguments);
      }),
      (g = b.createElement(c)),
      (h = b.getElementsByTagName(c)[0]),
      (g.async = 1),
      (g.src = d),
      h.parentNode.insertBefore(g, h));
  })(
    window,
    document,
    "script",
    `https://sprodm.uni247.xyz/international/international-pro.js?v="${Date.now()}"`,
    "CRIC"
  );
</script>
```

### Step 2: Add a Widget <a href="#step-2-3a-add-a-widget" id="step-2-3a-add-a-widget"></a>

Next, add HTML element.

```html
<head>
  <!-- widget container style -->
  <style>
    .app .app-home, body {
      background: #111;
      background-image: initial;
      background-position: initial;
      background-size: initial;
      background-repeat: initial;
      background-attachment: initial;
      background-origin: initial;
      background-clip: initial;
      background-color: rgb(17, 17, 17);
    }

    body,
    html {
      text-size-adjust: none;
      margin: 0;
    }

    .sport-page-wrapper {
      background-color: rgb(0, 0, 0);
      height: 100vh;
      position: absolute;
      width: 100%;
      z-index: 5;
    }

    .sport-page-wrapper .sport-widgets {
      bottom: 0;
      left: 0;
      overflow: auto;
      padding-bottom: 0;
      position: fixed;
      right: 0;
      top: 0;
    }
    #loading {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100vh;
      background-color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      color: #fff;
    }
  </style>
</head>
<body>  
  <!-- sample template -->
  <div id="root">
    <div id="cricket-page-wrapper" class="sport-page-wrapper">
      <div id="loading">
        Loading...
      </div>
      <div class="sport-widgets">
        <div id="sport-root"  data-ck-props='{"theme":{"pbgc":"000","sbgc":"1a1a1a","pc":"D2B79E","sc":"333","tc":"333","tpc":"fff","tsc":"999","qlbc":"333","primaryColorLinearGradientParams":{"deg":"","color1":"F4E7D6","opacity1":"","color2":"D2B79E","opacity2":"","color3":"","opacity3":""},"quickLink":{"sponsor":true},"burger":false,"eventList":{"statementLink":true}},"displayHeader":true,"autoBetSuffix":"https://sprodm.uni247.xyz/"}'></div>
      </div>
    </div>
  </div>
  
  <script type="text/javascript">
    // Replace the below token with your token
    CRIC({
      token: null,
    });
  </script>
</body>
```
