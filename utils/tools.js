function add(a,b) {
  return a+b
}

function getFetch(url,data,cb){
  wx.request({
    url: url,
    method: 'get',
    data: data,
    success(res) {
    //  console.log(res)
      cb(res)
    },
    fail(err) {
      console.log(err)
    }
  })
}


module.exports = {
  add,
  getFetch
}