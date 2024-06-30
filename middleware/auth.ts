//  命名路由中间件
function isAuthenticated(): boolean { 
  console.log('用户是否登录');
  return true
 }
// ---cut---

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  // console.log(to,'to');
  // console.log(from,'from');
  // do something to validate 
  if (isAuthenticated() === false) {
    return navigateTo('/about')
  }
})
