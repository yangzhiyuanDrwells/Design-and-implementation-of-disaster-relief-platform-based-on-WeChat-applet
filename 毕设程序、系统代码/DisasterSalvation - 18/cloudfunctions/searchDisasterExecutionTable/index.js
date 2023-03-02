// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:"yzy886-8g1aur8cfbced426" //云开发环境id
})
// 云函数入口函数  db.collection('p_user').orderBy('totalStep', 'desc')
exports.main = async (event, context) => {
  try{
    return  cloud.database().collection('disasterExecutionTable').orderBy('disasterGrade', 'desc')
    .get()
  } catch (e) {
    console.error(e);
  }
}