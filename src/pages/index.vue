<template>
  <main class="min-h-screen w-screen flex flex-col items-center">
    <section class="w-full min-h-screen pt-[30dvh] lg:px-[10dvw]">
      <div class="w-10/12 mfy-5 px-[2dvw] max-w-[1920px] h-full">
        <h1 class="mb-4 text-4xl max-w-[10ch] font-bold leading-tight">
          Get your <span class="text-accent italic">alexgutierrez.dev</span> shorted url
        </h1>
        <UrlShortenerCard />
      </div>
    </section>

    <section class="py-[10dvh] w-10/12 text-center flex flex-col items-center bg-terciary">
      <h1 class="font-bold text-3xl">Hey there! 👋</h1>
      <p class="text-xl mt-4 font-semibold text-black">
        Recently, I embarked on a journey to create something cool, and voila, I present to you my latest creation – an
        awesome URL shortener app! 🚀 What makes it stand out? Well, it's not just your average link shrinker; it always
        points to my personal domain (can be yours if needed 😉), adding a personal touch to every link you share. Built
        with the dynamic duo of Nuxt and Express.js, spiced up with the goodness of TypeScript, and relying on
        <a
          href="https://supabase.com/"
          class="text-accent"
          target="_blank"
          >Supabase</a
        >
        for the database, this stack ensures a smooth and robust experience. The frontend tools in the mix add that
        extra flair, making the user interface sleek and intuitive. So, whether you're sharing your latest project or
        just want to impress your friends with snappy links, give it a spin! 🌐✨
      </p>
    </section>
  </main>
</template>
