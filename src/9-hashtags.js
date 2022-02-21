export const hashtags = (text) => {
  let splitArray = text.split(" ")
  let hastagsArray = []
  for(let i = 0; i < splitArray.length; i++){
    if (splitArray[i].charAt(0) === '#'){
      hastagsArray.push(splitArray[i])
    }
  }
  return(hastagsArray)
}
