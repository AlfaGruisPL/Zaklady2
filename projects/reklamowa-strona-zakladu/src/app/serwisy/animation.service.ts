import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  animationTime = 3000;
  animationTimePayMethod = 1700;
  animationTimeBanner = 400;
  animationTimeBannerPanels = 1400;
  animationTimeRegisterAndClock = 1200;

  constructor() {}
}
