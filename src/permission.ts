/**
 * @name permission
 * @description 全局路由过滤
 */

import router from './router';
import { useUserStore } from './store/modules/user';
import { getToken } from './utils/auth';

const whiteList = ['/login']; // no redirect whitelist

router.beforeEach(async (to: any, _from, next) => {
  // set page title
  //  document.title = getPageTitle(to.meta.title) //设置网页标题
  const hasToken = getToken();
  if (hasToken) {
    // 已登录
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      //是否获取过用户信息
      const store = useUserStore()
      const hasGetUserInfo = store.info //获取vuex中的name
      if (hasGetUserInfo) {
        next();
      } else {
        // 没有获取，请求数据
        await store.getUserInfo();
        // 不使用 next() 是因为，在执行完 router.addRoute 后，
        // 原本的路由表内还没有添加进去的路由，会 No match
        // replace 使路由从新进入一遍，进行匹配即可
        next({ ...to, replace: true });
      }
    }
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login');
    }
  }
});
