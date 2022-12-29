export function NormalizeObj(arr) {
    const result = arr.map(obj => {
        return {
            imgSmall: obj.urls.regular,
            imgBig: obj.urls.full,
            id: obj.id,
            authorFirstName: obj.user.first_name,
            authorLastName: obj.user.last_name,
            authorInst: obj.user.instagram_username,
            description: obj.alt_description,
        }
    });
    

    return result;
};
