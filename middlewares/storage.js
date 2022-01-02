import AsyncStorage from '@react-native-async-storage/async-storage';

const saveItem = async (item, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(item, jsonValue)
    } catch (e) {
        console.log(e)
        // saving error
    }
}

const getItem = async (item) => {
    try {
        const jsonValue = await AsyncStorage.getItem(item)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
        
    } catch (e) {
        console.log(e)
        // error reading value
    }
}

const deleteItem = async (item) => {
    try {
        await AsyncStorage.removeItem(item);
        return true;
    }
    catch (exception) {
        return false;
    }
}

export const addToFav = (item) => {
    // const lastFav = getItem("favs")
    // console.log("lastFav",lastFav)
    // console.log("new",item)
    console.log([item])
    saveItem("favs", [item])
}
export const getFavs = () => getItem("favs")
export const deleteFromFav = () => getItem("favs")
// const deleteFromFav = () => deleteItem("employee")