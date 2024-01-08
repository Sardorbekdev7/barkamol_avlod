import axios from "axios"
export const url = 'https://barkamol-avlod-tago.onrender.com/api/v1'
// export const url = 'http://192.168.1.108:9099/api/v1'

export const getData=(a)=>{
  return(axios.get(`${url}/${a}`))
}

export const postData=(a)=>{
  return(axios.post(`${url}/${a}`))
}

export const getDataId = (token, id) => {
  return(axios.get(`${url}/${token}/${id}`))
}



export function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}

export const slugify = str => 
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

