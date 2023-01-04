const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async(userId) => {
    const response = await fetch(URL);
    const allPosts = await response.json();
    return allPosts.filter(post => post.userId === userId);
}