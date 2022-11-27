<script setup>
const ProgressValue = ref(10)
const pageStatus = ref(0)

function statusChange(statusNum,progressNum){
  ProgressValue.value = progressNum
  pageStatus.value = statusNum
}
</script>

<template>
  <div>
    <section v-if="pageStatus===0" class="px-120px pt-58px min-h-100vh relative">
      <CusProgress :ProgressValue="ProgressValue" class="mb-56px"></CusProgress>
      <div class="h-[calc(100vh-300px)] bg-#2B2B2B flex flex-col justify-between px-100px py-64px rounded-36px">
        <div class="text-white text-28px c11Font">
          <p>勇者！歡迎來到TT資訊王國，我是TT King</p>
          <div class="mb-28px">在正式加入王國的敏捷騎士團以前，需要請你先了解騎士團的
            <span class="text-secondaryYellow">Scrum流程與精神</span>
          </div>
          <p>請跟隨我一起通過Scrum新手村的挑戰任務吧！</p>
        </div>
        <div class="w-full flex justify-center">
          <Btn @click="statusChange(1,20)"></Btn>
        </div>
      </div>
      <img src="@/assets/images/king.png" class="absolute bottom-0 right-0" alt="">
    </section>

    <section v-if="pageStatus===1" class="px-120px pt-58px min-h-100vh relative">
      <CusProgress :ProgressValue="ProgressValue" class="mb-56px"></CusProgress>
      <div class="h-[calc(100vh-300px)] bg-#2B2B2B flex flex-col justify-between px-100px py-64px rounded-36px">
        <div class="text-white text-28px c11Font">
          <p class="mb-28px">我是TT資訊王國．敏捷騎士團的軍師小敏</p>
          <div class="mb-28px">
            <div class="inline">用你們的話來說就是</div>
            <span class="text-secondaryYellow">PO</span>
            <div class="inline">，也就是</div>
            <span class="text-secondaryYellow">產品負責人 Product Owner </span>
          </div>
          <div>
            <p class="inline">PO會負責評估產品代辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標，最後排出</p>
            <span class="text-secondaryYellow">產品待辦清單 Product Backlog</span>
            <p class="inline">。</p>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <img @click="statusChange(2,20)" class="cursor-pointer" src="@/assets/images/arrow.svg" alt="">
        </div>
      </div>
      <img src="@/assets/images/po.png" class="absolute bottom-0 right-0" alt="">
    </section>

    <section v-if="pageStatus===2" class="px-120px pt-58px min-h-100vh relative">
      <CusProgress :ProgressValue="ProgressValue" class="mb-56px"></CusProgress>
      <div class="h-[calc(100vh-300px)] bg-#2B2B2B flex flex-col justify-between px-100px py-64px rounded-36px">
        <div class="text-white text-28px c11Font">
          <p class="mb-28px">剛好我手邊有一個「人才招募系統」的案子，我才剛列出了「產品需求清單」</p>
          <div>
            <p class="inline">既然你都來了，來試試看</p>
            <span class="text-secondaryYellow">調整產品優先度，排出產品代辦清單</span>
            <p class="inline">吧！</p>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <Btn @click="statusChange(3,30)"></Btn>
        </div>
      </div>
      <img src="@/assets/images/po_hand.png" class="absolute bottom-0 right-0" alt="">
    </section>

    <section>
      <CusDraggble></CusDraggble>
    </section>
  </div>
</template>

<style lang="scss" scoped>

</style>