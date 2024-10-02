<template>
  <section class="hero w-screen h-screen relative">
    <div class="wrapper flex flex-col items-center text-center py-8 pt-[20dvh] text-white z-10">
      <h1 class="text-4xl font-bold max-w-96 text-center">Transform Your Links, Simplify Your Sharing</h1>
      <h2 class="max-w-lg text-sm mt-2 mb-10 w-fit">
        Make sharing easier by turning long, cumbersome URLs into concise, manageable links. Experience the convenience
        of quick sharing and tracking with our user-friendly URL shortener.
      </h2>
      <UrlShortenerCard />
    </div>

    <WavesBackground class="absolute bottom-[-2px]" />
  </section>

  <section class="wrapper text-center flex flex-col items-center pt-20">
    <h1 class="text-3xl">One short link, infinite posibilities</h1>
    <p class="mt-10">
      Transform long, cumbersome URLs into concise links that are easy to share. Experience enhanced tracking and
      analytics with every click.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 mt-10">
      <BenefitCard
        icon="world.svg"
        title="Easy Sharing"
        text="Share links effortlessly across platforms without the hassle of lengthy URLs."
      >
        <img src="~/assets/images/icons/world.svg" />
      </BenefitCard>

      <BenefitCard
        icon="performance.svg"
        title="Track Performance"
        text="Gain insights with click statistics to optimize your sharing strategy."
      >
        <img src="~/assets/images/icons/rocket.svg" />
      </BenefitCard>
      <BenefitCard
        icon="rocket.svg"
        title="Your own url"
        text="Easily personalize your links with custom aliases to enhance brand recognition."
      >
        <img src="~/assets/images/icons/performance.svg" />
      </BenefitCard>
    </div>

    <div class="mt-20">
      <button class="button-grad">
        <a
          href="https://alexgutierrez.dev/#contact"
          target="_blank"
        >
          Contact me for your own personalized url</a
        >
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background: hsla(236, 52%, 38%, 1);
  background: linear-gradient(to right, #2b5876 0%, #4e4376 51%, #2b5876 100%);
}

.button-grad {
  background-image: linear-gradient(to right, #2b5876 0%, #4e4376 51%, #2b5876 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  display: block;
}

.button-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
