<script setup>
const confettiCount = 500
const props = defineProps({
  duration: Number
})
</script>

<template>
  <div class="celebration-animation" :style="{ '--duration': `${props.duration}ms` }">
    <div class="celebration-animation__emoji">🍸</div>
    <span
      class="celebration-animation__confetti"
      v-for="(item, index) in confettiCount"
      :key="`confetti-${index}`"
    ></span>
    <div class="celebration-animation__progress"></div>
  </div>
</template>

<style lang="scss">
$colors: #a020f0, #d90429, #ff5800, #007fff;

@mixin sizer($width, $height: $width) {
  height: $height;
  width: $width;
}

body.success {
  overflow: hidden;
}

.celebration-animation {
  --duration: 500ms;

  &__emoji {
    bottom: 20px;
    font-size: 3.75em;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    z-index: 1;

    @media (min-width: 700px) {
      font-size: 7.5em;
    }
  }

  &__confetti {
    animation: pop 4s infinite ease-in;
    border-radius: 50%;
    bottom: 60px;
    @include sizer(10px);
    left: calc(50% - 5px);
    position: absolute;

    @media (min-width: 700px) {
      bottom: 100px;
      @include sizer(15px);
    }

    @for $i from 1 through 500 {
      &:nth-child(#{$i}) {
        animation-delay: random() * -6s;
        animation-duration: random() * 4s + 2s;
        background-color: nth($colors, random(length($colors)));
        opacity: 0;
        $originX: (random() * 40vw + 20vw);

        @if (random() > 0.5) {
          transform: translate3d(random() * 50vw, 0px, 0px) rotate(250deg);
        } @else {
          transform: translate3d(random() * -50vw, 0px, 0px) rotate(-250deg);
          $originX: $originX * -1;
        }

        transform-origin: $originX 5vh;
      }
    }
  }

  &__progress {
    height: 1rem;
    width: 1px;
    position: absolute;
    background-color: var(--outline-color);
    animation: load var(--duration) linear;
    bottom: 0;
    left: 0;
  }
}

@keyframes load {
  to {
    width: 100%;
  }
}

@keyframes pop {
  from {
    opacity: 1;
    transform: translate3d(0, 0px, 0px) rotate(0deg);
  }
}
</style>
