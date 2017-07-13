/**
 * Created by 东东哥 on 2017/7/11.
 */

function cloneObj(obj) {
    var newObj = {};
    for (var p in obj) {
        if (typeof obj[p] === 'object') {//判断元素中是否还有对象
            newObj[p] = arguments.callee(obj[p]);//如果有将递归调用自己argument.callee
            //newObj[p] = cloneObj(obj[p]);
        } else {
            newObj[p] = obj[p];
        }
    }
    return newObj;
}