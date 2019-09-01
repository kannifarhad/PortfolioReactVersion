export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';

export function getCategory(lang, slug) {
    return {
        type: GET_CATEGORY,
        request: {
            method: 'post',
            url: '/posts/getcategoryinfo',
        },
        body: { lang, slug }
    }
}

export function getCategoryList(lang, slug) {
    return {
        type: GET_CATEGORY_LIST,
        request: {
            method: 'post',
            url: '/posts/getcategories',
        },
        body: { lang, slug }
    }
}