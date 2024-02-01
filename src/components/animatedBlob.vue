<template>
  <div class="blob"></div>
</template>

<style scoped>
.blob {
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  width: max(250px, 60%);
  height: max(250px, 140%);
  background: #2e86ab;
  background-image: #2e86ab;
  box-shadow: -10vmin 10vmin 0 rgba(64, 152, 224, 0.192);
  animation: animateBlob 10s linear infinite alternate;

  position: fixed;
  /* z-index: -1; */
  right: -30%;
  top: -20%;
}

.blob {
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  width: max(250px, 60%);
  height: max(250px, 140%);
  background: #2e86ab;
  background-image: #2e86ab;
  box-shadow: -10vmin 10vmin 0 rgba(64, 152, 224, 0.192);
  animation: animateBlob 11s linear infinite alternate;

  position: fixed;
  /* z-index: -1; */
  left: -14dvw;
  top: -40dvh;
  width: 120dvw;
  height: 80dvh;
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
