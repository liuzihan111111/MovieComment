const tools = require('../utils/tools.js')

// 正在热映
function getMovieHot(cb){
  tools.getFetch('https://api-m.mtime.cn/Showtime/LocationMovies.api', { locationId: 290 }, cb)
} 
// 电影详情
function getMovieDetail(id,cb){
  tools.getFetch('https://ticket-api-m.mtime.cn/movie/detail.api', {locationId:290,movieId:id},cb)
}
// 电影预告或花絮
function getVideoList(id,cb){
  tools.getFetch('https://api-m.mtime.cn/Movie/Video.api', { pageIndex:1 ,movieId:id}, cb)
}

// 电影职员
function getMovieActorsList(id, cb) {
  tools.getFetch('https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api', {movieId: id }, cb)
}
// 电影图片
function getMovieImageList(id, cb) {
  tools.getFetch('https://api-m.mtime.cn/Movie/ImageAll.api', { movieId: id }, cb)
}
// 影评少量
function getHotComment(id, cb) {
  tools.getFetch('https://ticket-api-m.mtime.cn/movie/hotComment.api', { movieId: id }, cb)
}
// 影评列表
function getHotCommentList(id,cb){
  tools.getFetch('http://m.mtime.cn/Service/callback.mi/Movie/HotLongComments.api', { movieId: id }, cb)
}

module.exports = {
  getMovieHot,
  getMovieDetail,
  getVideoList,
  getMovieActorsList,
  getMovieImageList,
  getHotComment,
  getHotCommentList
}