export const GET_POST = 'GET_POST';
export const GET_POSTS_LIST = 'GET_POSTS_LIST';

export function getPost(lang, slug) {
    return {
        type: GET_POST,
        request: {
            method: 'post',
            url: '/posts/getpostbyslug',
        },
        body: { lang, slug }
    }
}

export function getPostList(lang, slug, page = 1) {
    return {
        type: GET_POSTS_LIST,
        request: {
            method: 'post',
            url: '/posts/getpostlist',
        },
        body: { lang, slug, page }
    }
}
