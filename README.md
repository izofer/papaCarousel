  ## **Navigation**
  
  
  * [**About**](#about)
  * [**Working Demo**](#working-demo)
  * [**API**](#api)
      - [**Animation Types**](#animation-types)
      - [**Remove Listeners**](#remove-listeners)
        * [Bundler](#bundler)
        * [No Bundler](#no-bundler)
  * [**Usage**](#usage)
      - [**Bundler**](#bundler)
      - [**No Bundler**](#no-bundler)
  * [**Styles**](#styles)
  * [**License**](#license)


## **About**

Simple Carousel library written in vanilla JS, without any other dependencies!
Just remember to use **required** functions from [API](#api)

*Recomended by* ![alt text](http://www.avatarsdb.com/avatars/papa_smurf.gif "Papa smurf")

## **Working Demo**

Link to working demo ( **will add it soon** ) - [Demo](https://zgrybus.github.io/papaCarousel/)

**The use example is below.**

## **API**

| Function             | Reason for use                                        | Argument Type         | Options                                               | Default value | Required | Example                          |
| -------------------- | ----------------------------------------------------- | --------------------- | ----------------------------------------------------- | ------------- | -------- | -------------------------------- |
| `setParent()`        | Set reference to carousel container               | string or HTMLElement | -                                                     | -             | true     | `setParent('.papa-container')`   |
| `setElements()`      | Set reference to carousel slides                  | string or HTMLElement | -                                                     | -             | true     | `setElements('.papa-item')`      |
| `getPapa()`          | Starting carousel - **Use this function as last one** | -                     | -                                                     | -             | true     | `getPapa()`                      |
| `setButtons()`      | Show navigation                                | boolean               | true false                                            | false         | false    | `setButtons(true)`               |
| `setProgressBar()`  | Show progress bar                                     | boolean               | true false                                            | false         | false    | `setProgressBar(true)`           |
| `setTimePerSlide()` | Changing the visibility time of a single slide        | number                | any number in miliseconds                             | 5000ms        | false    | `setTimePerSlide(1000)`          |
| `setTimingFn()`     | Changing the animation time                           | number                | any number in miliseconds                             | 250ms         | false    | `setTimingFn(200)`               |
| `setTransitionFn()` | Changing the animation function                       | string                | ease, linear, ease-in, ease-out, ease-in-out          | ease-in       | false    | `setTransitionFn('ease-in-out')` |
| `setType()`         | Change animation type                                  | string                | [**Animation Types**](#animation-types) | fading         | false   | `setType('fading')`              |

#### **Animation Types**

1. `fading` - simple FadeIn <-> FadeOut
2. `slidingY` - slide from 100% to -100% on the Y axis
3. `slidingX` - slide from 100% to -100% on the X axis

*more will come..* :)

#### **Remove Listeners**

The library uses the [listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on elements that require it. If you want to stop carousels or remove its elements - **use the function below**

##### Bundler

```javascript
import { PapaFascade } from 'papacarousel';
    const listener = new PapaFascade();
    listener.destroyListeners();
```

##### No Bundler

```html
<script src="node_modules/papacarousel/bundles/papacarousel.min.umd.js"></script>
<script>
  const listener = new Papacarousel.PapaFascade(); 
  listener.destroyListeners();
</script>
```

## **Usage**

Install package by npm

```npm
  npm install --save-dev papacarousel
```

#### **Bundler**

```javascript
import { PapaFascade } from 'papacarousel';

const myCarousel = new PapaFascade()
                        .setParent('.papa-container')
                        .setElements('.papa-item')
                        .setButtons(true)
                        .setProgressBar(true)
                        .setTimePerSlide(5000)
                        .setTimingFn(300)
                        .setTransitionFn('linear')
                        .setType('slidingX')
                        .getPapa()
```

#### **No Bundler**

```html
    <html>
        <head></head>
        <body>
            <div class="papa-container">
              <div class="papa-item">1</div>
              <div class="papa-item">2</div>
              <div class="papa-item">3</div>
            </div>
        </body>
        <script src="node_modules/papacarousel/bundles/papacarousel.min.umd.js"></script>
        <script>
            const myCarousel = new Papacarousel.PapaFascade()
                                    .setParent('.papa-container')
                                    .setElements('.papa-item')
                                    .setButtons(true)
                                    .setProgressBar(true)
                                    .setTimePerSlide(5000)
                                    .setTimingFn(300)
                                    .setTransitionFn('linear')
                                    .setType('slidingX')
                                    .getPapa();
        </script>
    </html>
```

## **Styles**

There are **certain styles that are required**. Check this file: [Required Styles](https://github.com/zgrybus/papaCarousel/blob/master/papaCarousel.css)

## **License**

[MIT](https://en.wikipedia.org/wiki/MIT_License) License
