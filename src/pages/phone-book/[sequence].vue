<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getPhoneBook } from '~/pages/phone-book/phoneBookList'
import type { IPhoneBook } from '~/types/PhoneBook'

const route = useRoute()

const currentDate = ref(new Date())
const sequence = ref(route.params.sequence)
const phoneBookInfo = ref<IPhoneBook>()

const getInfo = async () => {
  phoneBookInfo.value = await getPhoneBook(sequence)
}

onMounted(() => {
  getInfo()
})
</script>

<template>
  <div>
    <h1>
      {{ sequence }}
    </h1>
    <hr>
    <el-row>
      <el-col
        v-for="(o, index) in 1"
        :key="o"
        :span="8"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <h1> INFO : {{ phoneBookInfo }} </h1>
              <el-button text class="button">
                Operating
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}
</style>
