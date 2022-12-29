const URL = "https://api.unsplash.com/photos/"
const CLIENT_ID  = "client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
export async function getPhoto(page) {
    try {
        const photoList = await fetch(`${URL}?page=${page}&${CLIENT_ID}`);
        return photoList.json();
    } catch(error) {
        throw new Error('Error')
    }
};
