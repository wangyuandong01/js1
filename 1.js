/**
 * Created by ������ on 2017/7/11.
 */

function cloneObj(obj) {
    var newObj = {};
    for (var p in obj) {
        if (typeof obj[p] === 'object') {//�ж�Ԫ�����Ƿ��ж���
            newObj[p] = arguments.callee(obj[p]);//����н��ݹ�����Լ�argument.callee
            //newObj[p] = cloneObj(obj[p]);
        } else {
            newObj[p] = obj[p];
        }
    }
    return newObj;
}