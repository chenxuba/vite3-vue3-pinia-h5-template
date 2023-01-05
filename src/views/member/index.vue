<template>
  <div class="avatar-wrap">
    <nut-avatar class="avatar" size="large" :icon="getUserInfo.avatar" />
    <div class="member-detail">
      <p class="nickname" style="display: flex;align-items: center;"> 昵称
        <nut-button v-if="getUserInfo" shape="square" size="small" type="default"> {{ getUserInfo.nickname }}
        </nut-button>
        <nut-button v-if="!getUserInfo" shape="square" size="small" type="default" @click="goLogin"> 去登录 </nut-button>
      </p>
      <p class="info"> 个人其他信息，后续补充.... </p>
    </div>
  </div>
  <nut-grid>
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
  </nut-grid>
  <br>
  <nut-button block type="info" @click="logout"> 退出登录 </nut-button>
</template>

<script lang="ts" setup name="MemberPage">
import { useUserStore } from '/@/store/modules/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const getUserInfo = computed(() => {
  const { nickname = '', avatar = '' } = userStore.getUserInfoFun || {};
  return { nickname, avatar }
});
const goLogin = () => {
  router.push('/login');
};
const logout = async () => {
  await userStore.logout()
  router.push('/login')
};
</script>

<style lang="scss">
.avatar-wrap {
  display: flex;
  margin: 0 10px 40px;
  align-items: center;

  .member-detail {
    margin-left: 20px;

    .nickname {
      font-size: 16px;
      font-weight: bold;

      .nut-button {
        margin-left: 10px;
      }
    }

    .info {
      margin-top: 10px;
      font-size: 16px;
    }
  }
}
</style>
