export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string' && stringArrayOrObject.length){
      return false
    }
  else if (Object.prototype.toString.call(stringArrayOrObject) === '[object Array]' && stringArrayOrObject.length){
    return false
  }
  else if (Object.prototype.toString.call(stringArrayOrObject) === '[object Object]' && Object.keys(stringArrayOrObject).length){
    return false
  }
  else{
    return true
  }
}
