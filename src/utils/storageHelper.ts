import AsyncStorage from '@react-native-async-storage/async-storage';


 export const storageHelper = {
    async setItem(key: string, value: any) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }
    },
    async getItem(key: string) {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null) {
                return JSON.parse(value)
            }
        } catch (e) {
            console.log(e)
        }
    }
}