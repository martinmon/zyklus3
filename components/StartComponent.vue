<template>
   <VCard variant="outlined">
     <template v-slot:title>
       Wilkommen bei deinem Zyklus
     </template>

     <template v-slot:subtitle>
       This is a subtitle
     </template>

     <template v-slot:text>
       This is content
     </template>
   </VCard>

</template>

<script>
export default {
  name: 'startComponent'
}
</script>

<style scoped>

</style>
