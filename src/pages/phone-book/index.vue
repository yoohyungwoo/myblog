<script setup lang="ts">
import { books, getPhoneBooks } from '~/pages/phone-book/phoneBookList'

/**
 * 1. phoneBook
 * seq, 성, 이름, 전화번호, 주소1, 주소2, 나이, 이메일
 * seq, 성, 이름, 전화번호는 필수
 * 타입은 생각나는대로
 * phoneBooks 는 배열 형태 phoneBook의 extends
 *
 * 1. 이름을 보여주는 목록 컴포넌트
 * 2. 상세 컴포넌트, seq 를 기준으로 상세 페이지 조회
 */
import type { IPhoneBook, IPhoneBooks } from '~/types/PhoneBook'

const router = useRouter()

const itemList = ref<IPhoneBooks>()
const roadData = async () => {
  try {
    itemList.value = await getPhoneBooks()
  }
  catch (e) {
    console.log(e)
  }
}

const goDetail = (sequence: number) => {
  router.push({ name: 'phone-book-sequence', params: { sequence } })
}

onMounted(() => {
  roadData()
})
</script>

<template>
  <div>
    <h1>Phone Book List</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>Sequence</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="info in itemList" :key="info.sequence" @click="goDetail(info.sequence)">
            <td>{{ info.sequence }}</td>
            <td>{{ info.firstName }}</td>
            <td>{{ info.lastName }}</td>
            <td>{{ info.phone }}</td>
            <td>{{ info.address1 }}</td>
            <td>{{ info.address2 }}</td>
            <td>{{ info.age }}</td>
            <td>{{ info.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr>
  </div>
</template>

<style scoped>

</style>
