  * [About](#about)
  * [Working Demo](#working-demo)
  * [Usage](#usage)
      - [Bundler](#bundler)
      - [No Bundler](#no-bundler)
  * [Styles](#styles)
  * [API](#api)
      - [Options](#options)
      - [Remove Listeners](#remove-listeners)
        * [Bundler](#bundler)
        * [No Bundler](#no-bundler)
  * [License](#license)
 
## **About**

Simple Carousel library written in vanilla JS, without any other dependencies!
Just remember to use **required** functions from [API](#api).  
*Recomended by* ![alt text](http://www.avatarsdb.com/avatars/papa_smurf.gif "Papa smurf")

## **Working Demo**

Link to working demo ( **will add it soon** ) - [Demo](https://zgrybus.github.io/papaCarousel/).  
**The use example is below.**

## **Usage**

Install package by npm

```npm
  npm install --save-dev papacarousel
```

#### **Bundler**

```javascript
import { PapaFascade } from 'papacarousel';

// use with default options
new PapaFascade().getPapa();

// override default options
new PapaFascade()
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
            // use with default options
            new Papacarousel.PapaFascade().getPapa();
            
            // override default options
            new Papacarousel.PapaFascade()
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

There are **certain styles that are required**. Check this file: [Required Styles](https://github.com/zgrybus/papaCarousel/blob/master/papaCarousel.css).

## **API**

PapaCarousel has several options. To change any option, use the function presented below.

#### **Options**

* `getPapa()`  
**Action**: Initialize and start carousel  
**Required**: true - **important**  
**Example**: getPapa();  
**Note**: Use this function as last one  

* `setParent()`  
**Action**: Setting new element as parent of Carousel  
**Default value**: .papa-container  
**Argument type**: string or HTMLElement  
**Required**: false   
**Example**: setParent('.my-class')  

* `setElements()`  
**Action**: Setting new elemenets as Carousel's items  
**Default value**: .papa-item  
**Argument type**: string or HTMLElement  
**Required**: false  
**Example**: setElements('.my-class')  

* `setButtons()`  
**Action**: Show navigation of Carousel  
**Default value**: false  
**Argument options**: true / false  
**Required**: false  
**Example**: setButtons(true)  

* `setProgressBar()`  
**Action**: Show progress bar  
**Default value**: false  
**Argument options**: true / false  
**Required**: false    
**Example**: setProgressBar(true)    

* `setTimePerSlide()`  
**Action**: Changes the time of switching the slides   
**Default value**: 5000    
**Argument options**: number in milliseconds    
**Required**: false    
**Example**: setTimePerSlide(2000)    

* `setTimingFn()`  
**Action**: Changes the duration of the animation  
**Default value**: 250  
**Argument options**: number in milliseconds  
**Required**: false  
**Example**: setTimingFn(150)  

* `setTransitionFn()`  
**Action**: Changes the animation function  
**Default value**: ease-in  
**Argument options**: ease, linear, ease-in, ease-out, ease-in-out  
**Required**: false  
**Example**: setTransitionFn('ease-in-out')  

* `setType()`  
**Action**: Changes the animation function  
**Default value**: fading  
**Argument options**: fading, slidingX, slidingY,  **more will come.. :)**  
**Required**: false  
**Example**: setType('slidingX')  

#### **Remove Listeners**

The library uses the [listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on elements that require it. If you want to stop carousels - **use the function below**.

##### Bundler

```javascript
import { PapaFascade } from 'papacarousel';

new PapaFascade().destroyListeners();
```

##### No Bundler

```html
<script src="node_modules/papacarousel/bundles/papacarousel.min.umd.js"></script>
<script>
  new Papacarousel.PapaFascade().destroyListeners();
</script>
```

## **License**

[MIT](https://en.wikipedia.org/wiki/MIT_License) License
