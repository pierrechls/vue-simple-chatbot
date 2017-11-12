<template>
  <svg :style="`fill:${color}`" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 500 500"><g><g><polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"></polygon></g></g></svg>
</template>

<script>

    export default {
        props: {
          color: {
            type: String,
            required: true
          }
        }
    }

</script>

<style lang="scss" scoped>

</style>
