import axios from "axios"

const url = 'http://185.65.202.40:4327/api'

export const getData=(token)=>{
  return(axios.get(`${url}/${token}/`))
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

