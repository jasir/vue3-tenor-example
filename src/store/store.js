import { createStore } from 'vuex'
import axios from 'axios'

function mapResultToImages (result) {
  return result?.data?.results?.map(obj => {
    const gif = obj.media[0].gif
    return {
      id: obj.id,
      url: gif.url,
      width: `${gif.dims[0]}px`,
      height: `${gif.dims[1]}px`,
      title: obj?.content_description || 'no title'
    }
  }) || []
}

const createImageModule = () => {
  return {
    namespaced: true,

    state () {
      return {
        images: [],
      }
    },

    mutations: {
      setImages (state, images) {
        state.images = images
      },
    },

    actions: {
      async fetchData ({ commit }, url) {
        try {
          const response = await axios(url)
          commit('setImages', mapResultToImages(response))
        } catch (err) {
          /// @todo - better error handling
          console.error(err)
        }
      }
    }
  }
}

export const store = createStore({
  modules: {
    search: { ...createImageModule() },
    trends: { ...createImageModule() }
  }
})
