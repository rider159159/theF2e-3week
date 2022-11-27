<script setup>
const props = defineProps({
  ProgressValue:{
    type: Number,
  }
})

const ProgressComputed = computed(() => `w${props.ProgressValue}%` );
</script>

<template>
  <div class="flex h-24px overflow-hidden bg-#E0E0E0 rounded-24px">
    <div :class="`w${ProgressValue}%`" class="progress-bar bg-secondaryYellow flex flex-col justify-center overflow-hidden whitespace-nowrap"></div>
  </div>
</template>

<style>
.w10\%{
width: 10%;
}

.w20\%{
width: 20%;
}
</style>