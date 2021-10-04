<template>
  <div class="canvas">
    <div class="border-8 border-black rounded-xl phone">
      phone
      <div class="nested">Nested content</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 10px;
}
</style>

<style lang="postcss">
.canvas {
  @apply flex justify-center items-center;
}
.phone {
  width: 380px;
  height: 700px;

  @apply bg-gray-100;

  .nested {
    @apply text-indigo-700 bg-gray-300;
  }
}
</style>
