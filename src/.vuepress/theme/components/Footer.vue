<template>
  <div class="border-t-0 py-8 border-opacity-25 w-full">
    <div class="m-auto md:flex lg:w-1/2">
      <div class="p-8">
        <p class="py-6">
          This is a TU Delft initiative funded by the
          <strong>European Open Science Cloud</strong> co-creation grant in 2020.
        </p>
        <div class="flex gap-x-4">
        <a href="https://tudelft.nl"
          ><img
            class="py-4 w-24"
            :src="$withBase('/TUD.png')"
            alt="TU Delft image"
          />
        </a>
        <div>
        <a href="https://delftopenhardware.nl"
          ><img
            class="py-4 w-16"
            :src="$withBase('/delftoh.png')"
            alt="Delft Open Hardware"
          />
        </a>
        <!-- <p>Delft <strong>Open</strong> Hardware</p> -->
        </div>

        </div>
        <p>Copyright 2020</p>
      </div>
      <!-- <div class="m-auto"> -->
      <div class="md:w-1/2">
        <a href="https://www.eosc-portal.eu/"
          ><img
            class="m-auto py-4"
            :src="$withBase('/EOSC.png')"
            alt="big_logo"
          />
        </a>
        <a href="https://www.eoscsecretariat.eu/node"
          ><img
            class="m-auto py-4 w-3/4"
            :src="$withBase('/eoscsecretariat.png')"
            alt=""
          />
        </a>
        <!-- <div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>