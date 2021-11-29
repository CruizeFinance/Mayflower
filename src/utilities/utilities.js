export const _getCurrentDatetime = () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
  }
export const Convert_toWei =(_value,_pow=0)=>{
  
  return (_value *Math.Pow(10,18))
}