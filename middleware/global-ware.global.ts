// 全局路由中间件
export default defineNuxtRouteMiddleware((to,from)=>{
  // do somo thing in global 
  // console.log(to,'to');
  // console.log(from,'from');
  return true
})
