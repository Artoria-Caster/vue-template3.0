//请求的示例

// import HttpApi from "@/utils/https";
// import global from "@/utils/global";
// import store from "@/store";

// const http = new HttpApi({baseURL: global.api.API_ADDR})

//一个登录的示例
// //内网登录
// export const userLogin = (params, success, failed) => {
//     http.post({}, "/admin-system/auth/login", params, (res) => {
//         //内网登录成功
//         if (res.code === 200) {
//             success && success()
//         } else {
//             failed && failed()
//         }
//
//     }, () => {
//         // 如果内网登录不成功，执行本地登录
//         failed && failed()
//     })
// }

// export default http
