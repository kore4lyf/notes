# CSS Scroll Animation

# Type 1

Find an Element you want to animate, assign it a class.

```css
.autoRotate {
  animation: autoRotateAnimation;
  animation-timeline: view();
}

@keyframes autoRotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Type 2

Is usually used for content, where it stay still when its at the middle of the screen for people to read.

If view() is used for animation timeline, the animation would complete at the top of the screen, which make the text hard to read.

view() can take two arguments (by default view(auto auto). The first argument is used to specify when the animation should complete. The second argument is used to specify when the animation should start.

The screen height can be measured in percentages.

Both is used to prvent the text from being visible before it starts animating.

```css
.autoShow {
  animation: autoShowAnimation both;
  animation-timeline: view(70% 5%);
}

@keyframes autoShowAnimation {
  from {
    transform: translateY(200px) scale(0.3);
  }
  to {
    transform: translateY(0px) scale(1);
  }
}
```

## Type 3

```css
.autoBlur {
  animation: autoBlurAnimation;
  animation-timeline: view();
}

@keyframes autoBlurAnimation {
  0% {
    filter: blur(40px);
  }
  45%, 55% {
    filter: blur(0px);
  }
  100% {
    filter: blur(0);
  }
}
```

