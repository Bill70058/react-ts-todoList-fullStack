const request = require('request')
const express = require("express");
const Address = require('../models/address.model')
const template = require('../utils/msgTemplate')
const router = express.Router();

const headers = {
  headers: {
    token: 'NJlVbBU8LFd9Ps5e'
  }
}
// request.get('https://v2.alapi.cn/api/dog', headers, function(err, response, body) {
//   console.log(response)
// })

// router.get('/', function(req, res) {
//   request('https://v2.alapi.cn/api/springTravel/risk/city', headers, function(err, response, body) {
//     const data = JSON.parse(body)
//     if (data.code === 200) {
//       res.json(template.msgTemplate({
//         msg: '成功',
//         data: data
//       }))
//     } else {
//       res.json(data)
//     }
//   })
// })

/**
 * 
 * @param {*} data 当前item数据
 * @param {*} isLeaf 是否有子节点数组
 * @returns 
 */
function Serialization(data, isLeaf) {
  let obj = {
    code:data.code,
    name:data.name,
    key:data.key,
    parent_code:data.parent_code,
    child: []
  }
  !isLeaf && (delete obj.child)
  return obj
}
router.get('/', function(req, res) {
  let provinceObj = {} // 省
  let cityObj = {} // 市
  let areaList = [] // 区
  Address.find()
    .then(address => {
      address.forEach(item => {
        // 省
        if (item.parent_code == 0) {
          provinceObj[item.code] = Serialization(item, true)
        }
        // 市
        if (item.key == '地级') {
          cityObj[item.code] = Serialization(item, true)
        }
        // 区
        if (item.key == '县级') {
          areaList.push(Serialization(item, false))
        }
      })
      areaList.forEach(item => {
        cityObj[item.parent_code].child.push(item)
      })
      Object.values(cityObj).forEach(item => {
        provinceObj[item.parent_code].child.push(item)
      })
      res.json(template.msgTemplate({
        msg: '成功',
        data: Object.values(provinceObj)
      }))
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
// 分页搜索
router.post('/splitPage', function(req, res) {
  let page = req.body.page
  let limit = req.body.pageSize || 5
  Address.find({},function (err, data) {
      if(err) return res.status(500).json({
          result: 1,
          error_info: '请求失败！'
      })
      let count = data.length
      Address.find({}).skip((page - 1)*parseInt(limit)).limit(parseInt(limit)).exec(function (err, data) {
        if(err) return res.status(500).json(template.msgTemplate({
          msg: '服务器繁忙，请稍后重试！',
          code: 1
        }))
        return res.status(200).json(template.msgTemplate({
            msg: '成功',
            data: {
              total: count,
              list: data,
              page: page,
              pageSize: limit
            }
          }))
      })
  })
})

module.exports = router;