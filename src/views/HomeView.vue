<template>
  <main>
    <h1 class="flex justify-content-center ">DND Damage Calculator</h1>
    <div class="flex flex-row flex-wrap justify-content-center gap-7">
      <SimpleDPS ref="simpleDPSComponent"/>
      <div class="flex align-items-start ">
        <DmgCalculation v-if="isMounted" :AC="simpleDPSComponent?.AC" :accuracy="simpleDPSComponent?.accuracy"
                        :dmg-bonus="simpleDPSComponent?.dmgBonus" :dmg-dice="simpleDPSComponent?.dmgDice"/>
      </div>

      <!--      <DmgCalculation :AC="AC" :accuracy="accuracy" :dmg-bonus="dmgBonus" :dmg-dice="dmgDice"/>-->

    </div>
  </main>
</template>


<script lang="ts" setup>
import SimpleDPS from "@/components/SimpleDPS.vue";
import DmgCalculation from "@/components/DmgCalculation.vue";
import {onMounted, ref} from "vue";

const simpleDPSComponent = ref<any>(null)
const isMounted = ref(false)
onMounted(() => {
  // const [AC, accuracy, dmgBonus, dmgDice] = simpleDPSComponent.value
  // console.log(simpleDPSComponent.value)
  isMounted.value = true;
})
</script>

