import * as types from '../types'
import dComps from '@/components/data.js'
import { getNewComp } from '@/api/actions'
import { deepClone } from '@/utils'

const state = {
  lists: [],
  curCompId: null
}

const getters = {
  getComplistsByPageId: (state) => (pageId) => {
    return state.lists.filter((cp) => cp.parentId === pageId)
  },
  curComp: (state) => {
    return state.lists.find((cp) => cp.id === state.curCompId)
  },
  getCompConfigByCompid: (state) => (compid) => {
    return state.lists.find((cp) => cp.id === compid)
  }
}

const actions = {
  addNewComp ({ commit, getters }, name) {
    getNewComp()
      .then((comp) => {
        const compData = dComps[name] && dComps[name]()
        if (compData) {
          const newCompData = Object.assign(deepClone(compData), comp, { parentId: getters.curPageId })
          commit('ADD_COMP_TO_PAGES', newCompData)
          commit('ADD_COMP', newCompData)
        }
      })
  }
}

const mutations = {
  [types.TOGGLE_COMP] (state, id) {
    state.curCompId = id
  },
  [types.EDIT_COMP] (state, { type, value, compid }) {
    const comp = state.lists.find((cp) => cp.id === compid || cp.id === state.curCompId)
    if (comp) {
      let compProp = comp[type]
      // 简单处理对象，默认为纯对象（没有数组等类型）
      for (let key in value) {
        if (compProp[key] === undefined) {
          continue
        }
        if (typeof value[key] === 'object') {
          Object.assign(compProp[key], value[key])
        } else {
          compProp[key] = value[key]
        }
      }
    }
  },
  [types.ADD_COMP] (state, compData) {
    state.lists.push(compData)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
