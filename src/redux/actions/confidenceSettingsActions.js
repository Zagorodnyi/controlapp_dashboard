import axios from 'axios'
import { SET_DEVICE_LIST, SET_ACTIVE_DEVICE, SET_SCALE, SET_SOURCE } from '../types/dataTypes'

export const getAlldevices = () => async (dispatch) => {
    const response = await axios.get('https://fierce-sierra-99883.herokuapp.com/api/confidence/settings/')
    dispatch({ type: SET_DEVICE_LIST, payload: response.data })
}

export const postNewSettings = (settings) => async (dispatch) => {
    const newSettings = {
        scale: settings.scale,
        currentDevice: settings.currentDevice
    }
    await axios.post(`https://fierce-sierra-99883.herokuapp.com/api/confidence/settings/${settings.deviceId}`, newSettings)
}

export const setActiveDevice = (id) => (dispatch) => {
    dispatch({ type: SET_ACTIVE_DEVICE, payload: id })
}

export const setScale = (scale) => (dispatch) => {
    dispatch({ type: SET_SCALE, payload: scale })
}

export const setSource = (source) => (dispatch) => {
    dispatch({ type: SET_SOURCE, payload: source })
}