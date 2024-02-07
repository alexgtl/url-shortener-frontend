<template>
  <div class="blob shadow-black bg-accent"></div>
</template>

<style scoped lang="scss">
.blob {
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  animation: animateBlob 11s linear infinite alternate;
  position: absolute;

  top: -20rem;
  right: -20rem;

  width: 40rem;
  height: 40rem;

  @media screen and (max-width: (668px)) {
    top: -7rem;
    right: -7rem;
    width: 20rem;
    height: 20rem;
  }
}

@keyframes animateBlob {
  0% {
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  }

  100% {
    border-radius: 40% 80%;
  }
}
</style>
