import { createStore, action, thunk, computed } from "easy-peasy";
import api from "../utils/api";
export default createStore({
    genre: [],
    setGenre: action((state, payload) => {
        state.genre = payload;
    }),
    genreCount: computed((state) => state.genre.length),
    saveGenre: thunk(async (actions, { url, data } , helpers, id) => {
        const fetchData = async () => {
            try {
                const response = await api.get(url, data)
                return response;
            } catch (error) {
                console.log(error)
            }
        }
        return fetchData();
    }),
    genreId: [],
    setGenreId: action((state, payload) => {
        state.genreId = payload;
    }),
    saveGenreId : thunk (async (actions, {url},) => {
        const fetchGenreId = async () => {
            try{
                const response = await api.get(url)
                return response;
            } catch(error) {
                console.log(error)
            }
        }
        return fetchGenreId();
    }),
    searchGenre: [],
    setSearchGenre: action((state, payload) => {
        state.searchGenre = payload;
    }),
    saveSearchGenre : thunk (async (actions, {url},) => {
        const fetchSearchGenre = async () => {
            try{
                const response = await api.get(url)
                return response;
            } catch(error) {
                console.log(error)
            }
        }
        return fetchSearchGenre();
    }),
    userInfo :{},
    setUserInfo: action ((state,payload) => {
        state.userInfo = payload;
    })
})