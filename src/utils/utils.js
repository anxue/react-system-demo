export default {
    // 时间转换
    formateDate (time) {
        if (!time) return ''
        let date = new Date(time);
        return date.getFullYear() + '-' + 
        ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0'+ (date.getMonth() + 1)) + '-' + 
        (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + ' ' +
        (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + ':' + 
        (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())  + ':' +
        (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())
    },
    // 分页封装
    pagination(data, callback) {
        console.log(data)
        return {
            onChange: (current) => {
                callback(current)
            },
            current: data.page,
            pageSize: data.page_size,
            total: data.total,
            showTotal: ()=> {
                return `共${data.total}条`
            },
            showQuickJumper: true
        }

    }
}