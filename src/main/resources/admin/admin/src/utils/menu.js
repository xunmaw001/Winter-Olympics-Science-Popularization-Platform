const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除","查看评论"],"menu":"冬奥会项目","menuJump":"列表","tableName":"dongaohuixiangmu"}],"menu":"冬奥会项目管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","查看评论"],"menu":"精彩视频","menuJump":"列表","tableName":"jingcaishipin"}],"menu":"精彩视频管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"冬奥论坛","tableName":"forum"}],"menu":"冬奥论坛"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"冬奥新闻","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"冬奥会项目列表","menuJump":"列表","tableName":"dongaohuixiangmu"}],"menu":"冬奥会项目模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看"],"menu":"精彩视频列表","menuJump":"列表","tableName":"jingcaishipin"}],"menu":"精彩视频模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"冬奥会项目列表","menuJump":"列表","tableName":"dongaohuixiangmu"}],"menu":"冬奥会项目模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看"],"menu":"精彩视频列表","menuJump":"列表","tableName":"jingcaishipin"}],"menu":"精彩视频模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;