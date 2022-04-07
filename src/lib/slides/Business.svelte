<script>
  import Slide from "$lib/Slide.svelte";
</script>

<Slide>
  <div class="flex flex-col w-full h-full items-center">
    <h1 class="flex flex-col items-start">
      <span class="block"> Great </span>

      <span class="block">
        <span class="h1"> Good </span>
        <span class="h1"> Financing Business </span>
      </span>
    </h1>
    <div
      class="flex justify-between px-10 py-6 w-full max-w-4xl h-full max-h-1xl"
    >
      <div class="flex flex-col items-center">
        <div class="rounded-full border-black border-[1px]">
          Understand<br />customers
        </div>
        <div class="h-20">
          <img
            src="/arrow.svg"
            alt="arrow"
            class="origin-top w-20 h-auto rotate-90"
          />
        </div>
        <div class="rounded-full border-black border-[1px]">
          Multiple<br />financing<br />products
        </div>
      </div>
      <div class="flex flex-col items-evenly">
        <img src="/arrow.svg" alt="arrow" class="w-full h-auto rotate-45" />
        <div class="rounded-full border-black border-[1px]">
          Accurate <br /> pricing & risk
        </div>
        <img src="/arrow.svg" alt="arrow" class="w-full h-auto -rotate-45" />
      </div>
      <div class="flex items-center">
        <img src="/arrow.svg" alt="arrow" class="w-full h-auto " />
      </div>
      <div class="flex flex-col">
        <div class="rounded-full border-black border-[1px]">
          Understand<br />customers
        </div>
      </div>
    </div>
  </div>
</Slide>
