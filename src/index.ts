import { PapaCarouselBuilder } from './lib/papaCarouselBuilder'

const fading = new PapaCarouselBuilder()
  .setParent('.papa-container')
  .setElements('.papa-item')
  .setButtons(true)
  .setProgressBar(true)
  .setTimePerSlide(5000)
  .setTimingFn(300)
  .setTransitionFn('linear')
  .setType('slidingX')
  .getPapa()
