import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constant"
export const setJobs = (payload) => ({
    type: SET_JOB,
    payload
})
export const addJobs = (payload) => ({
    type: ADD_JOB,
    payload
})
export const deleteJobs = (payload) => ({
    type: DELETE_JOB,
    payload
})

