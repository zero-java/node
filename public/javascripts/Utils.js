/**
 *
 * Created by Administrator on 2016/12/7.
 */


function parseClass(clazz,splitor){
    var classMap = {};
    if(clazz){
        splitor = splitor||" ";
        if(clazz.indexOf(splitor)===-1){
            console.error('没有找到可以分割的分割器');
        }
        clazz.split().forEach(function(e){
            classMap[e]=true;
        })
    }

    return classMap;
}

