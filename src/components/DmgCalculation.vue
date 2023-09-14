<template>
  <div class="flex flex-column">

  <h1>Probability</h1>
  <div class="surface-0 calculation-container">
    <h2 class="stat-headers">Chance To Hit</h2>
    <span class="stat  "> {{ chanceToHit }}%</span>
    <h2 class="stat-headers">Avg. Damage per hit</h2>
    <span class="stat"> {{ avgDmgPerHit }}</span>
    <h2 class="stat-headers">Avg. Dmg Expected</h2>
    <span class="stat">{{ avgDmgPerHit * chanceToHit / 100 }}</span>
  </div>
  </div>

</template>

<script lang="ts" setup>
import {computed } from "vue";
import {PropType} from "vue"

let props = defineProps({
  accuracy: {type: Number, required: true},
  dmgDice: {type: Object as PropType<number[]>, required: true},
  dmgBonus: {type: Number, required: true},
  AC: {type: Number, required: true},
})

const chanceToHit = computed(() => {
  let hit = ((21 - (props.AC - props.accuracy)) / 20) * 100
  if (hit > 95) {
    return 95
  }
  if (hit < 5) {
    return 5
  }
  return hit
})

const avgDmgPerHit = computed(() => {
  // need to do for each here
  // let dieCount = props.dmgDice.length
  let avgDmg = 0;
  props.dmgDice.forEach((die) => {
    avgDmg += .5 * (die + 1)
  })
  // let maxDieValue = props.dieValue ?? 1
  // console.log((dieCount / 2) * (maxDieValue + 1) + props.dmgBonus)

  return avgDmg + props.dmgBonus
})
</script>


<style scoped>
.calculation-container {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom:1rem;
  border-radius: 1.5rem;
}
.stat-headers {
  color: var(--primary-400)

}
.stat {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>