<template>
  <div class="flex flex-row gap-3 ml-2 mr-2 flex-wrap justify-content-center ">
    <div class="mobile-display">
      <h1>Attack Info</h1>
      <div>
        <h2>Target AC</h2>
        <InputNumber v-model="AC" inputId="integeronly"></InputNumber>
      </div>
      <div>
        <h2>Accuracy (Hit/DC)</h2>
        <InputNumber v-model="accuracy" inputId="integeronly"></InputNumber>
      </div>
      <div>
        <h2>Modifier (Dex/Str)</h2>
        <InputNumber v-model="dmgBonus"/>
      </div>
    </div>
    <div class="flex flex-column  align-items-center  mobile-display">
      <div class="flex flex-row  align-items-center ">
        <h1>Damage</h1>
        <Button class="ml-3" size="small" @click="increaseDieCount">Add Die</Button>
      </div>
      <div class="die-choices ">
        <div class="" v-for="die in dmgDice.length">
          <h2>Dmg Die Type {{ die }}</h2>
          <!--        it starts at index 1 for whatever reason-->
          <div class="flex align-items-center gap-4">
            <Dropdown v-model="dmgDice[die - 1]" :options="dieChoice" option-label="name" option-value="value"
                      @change="(event: any) => { changeDieValue(event, die -1 )}"/>
            <Button @click="()=> {removeDie(die-1)}" severity="danger" size="small" icon="pi pi-times"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script lang="ts" setup>
import {ref} from "vue";
import DmgCalculation from "@/components/DmgCalculation.vue";

const dieChoice = [
  {name: "D20", value: 20},
  {name: "D12", value: 12},
  {name: "D10", value: 10},
  {name: "D6", value: 6},
  {name: "D4", value: 4},
];
const accuracy = ref(0)
const AC = ref(0)
const dmgDice = ref([10])
const dmgBonus = ref(0)


function increaseDieCount() {
  dmgDice.value.push(10)
  console.log(dmgDice.value)
}

function changeDieValue(event: any, dieIndex: number) {
  dmgDice.value[dieIndex] = event.value
}

function removeDie(index:number) {
  console.log("removing die", index)
  if(dmgDice.value.length > 1) {
    dmgDice.value.splice(index, 1)
  }
}

defineExpose({
  accuracy,
  AC,
  dmgDice,
  dmgBonus
})
</script>

<style scoped>
.die-choices {
  margin-top: -1.3rem;
}

@media (max-width:500px) {
  .mobile-display {
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content:center;
  }
}
</style>