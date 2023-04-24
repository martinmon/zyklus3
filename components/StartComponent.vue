<template>
   <VCard variant="outlined">
     <VCardTitle>
       Wilkommen bei deinem Zyklus
     </VCardTitle>

     <VCardSubtitle>
       Dies ist eine App um deinen Zyklus zu tracken
     </VCardSubtitle>

     <VCardText>
       Hier kannst du deinen Zyklus tracken
       <NuxtLink to="/tracking">
         Zum Tracking
       </NuxtLink>
     </VCardText>
   </VCard>

</template>

<script>
export default {
  name: 'startComponent'
}
</script>

<style scoped>

</style>
