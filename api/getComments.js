const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getCommments = async(postId) => {
    const response = await fetch(`${URL}/${postId}/comments`);
    const comments = await response.json();
    return comments;
}