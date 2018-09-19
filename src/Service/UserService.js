import axios from 'axios';



var baseurl="http://localhost:8080/FundooNotes/";

module.exports = {
    ajaxPost: function(url,postdata){  return axios({
        method: 'post',
        url: baseurl+url,
        data: postdata
      })
     },
     ajaxPut:function(url,putData){
       return axios({
         method:'put',
         url:baseurl+url,
         data:putData
       })
     }
  }