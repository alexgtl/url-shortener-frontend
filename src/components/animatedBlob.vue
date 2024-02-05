<template>
  <div class="blob shadow-black bg-accent"></div>
</template>

<style scoped>
.blob {
  /*   border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  width: max(250px, 60%);
  height: max(250px, 140%);
/*   background: #2e86ab;
  background-image: #2e86ab;
  /* box-shadow: -10vmin 10vmin 0 rgba(64, 152, 224, 0.192);
  animation: animateBlob 10s linear infinite alternate;

  position: fixed;
  /* z-index: -1;
  right: -30%;
  top: -20%; */
}

.blob {
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  width: max(120px, 60%);
  height: max(120px, 60%);
  /*   background: #2e86ab;
  background-image: #2e86ab; */
  /* box-shadow: -10vmin 10vmin 0 rgba(64, 152, 224, 0.192); */
  animation: animateBlob 11s linear infinite alternate;

  position: fixed;
  /* z-index: -1; */
  left: 85dvw;
  top: -60dvh;
  width: 50dvw;
  height: 100dvh;
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
