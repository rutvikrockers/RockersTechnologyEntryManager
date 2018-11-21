
import {doFetch} from './fetch';

export function onFollow(token,compId){
return function (dispatch) {
return doFetch('POST', `/company/follow`, {
company_id: compId
}, token, function(err, res){
if(err || res.success === false){ 
var e = res.message || err;
return dispatch(error(e))
};
alert(res.message); 

})
}
}