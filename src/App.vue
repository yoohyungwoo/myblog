<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const router = useRouter()

// header nav click
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const goPhoneBookMenu = () => {
  router.push({ name: 'phone-book' })
}

const goAccountsMenu = () => {
  router.push({ name: 'accounts' })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-container>
        <el-header>
          <nav>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
            >
              <el-menu-item index="1" @click="$router.push('/')">
                Home
              </el-menu-item>
              <el-menu-item index="2" @click="goPhoneBookMenu">
                phone book
              </el-menu-item>
              <el-menu-item index="3" @click="goAccountsMenu">
                Accounts
              </el-menu-item>
            </el-menu>
          </nav>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
