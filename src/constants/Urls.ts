const API_URL = 'http://194.87.98.202:8000/api/'

const Urls = {
    login: `${API_URL}login`,
    registration: `${API_URL}registration`,
    user: (id: Number) => `${API_URL}user/${id}`,
    characterBaseClothes: `${API_URL}user/character/base_clothes`,
    characterSave: `${API_URL}user/character/change-equipment`
}

export default Urls
export { API_URL }