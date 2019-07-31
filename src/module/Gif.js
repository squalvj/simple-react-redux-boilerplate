import {
   list,
   call
} from './../services/index'

export const getPaginationGif = (searchCriteria, offset, limit = 15) => {
   return call({
      url: list.gifSearch,
      method: 'get',
      params: {
         q: searchCriteria,
         offset,
         limit
      }
   })
}

export const getTrendingGif = (offset, limit = 15) => {
   return call({
      url: list.gifTrending,
      method: 'get',
      params: {
         offset,
         limit
      }
   })
}

export const getRandomGif = (tag) => {
   return call({
      url: list.gifRandom,
      method: 'get',
      params: {
         tag
      }
   })
}