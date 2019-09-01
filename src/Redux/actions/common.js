export const GET_CONFIG = 'GET_CONFIG';
export const GET_LANGLIST = 'GET_LANGLIST';
export const GET_TRANSLATIONS = 'GET_TRANSLATIONS';
export const GET_MENUS = 'GET_MENUS';

export function getConfigs() {
    return {
        type: GET_CONFIG,
        request: {
            method: 'get',
            url: '/config/getconfigs'
        }
    };
}
export function getLangList() {
    return {
        type: GET_LANGLIST,
        request: {
            method: 'get',
            url: '/config/getlanglist'
        }
    };
}

export function getTranslations(lang) {
    return {
        type: GET_TRANSLATIONS,
        request: {
            method: 'post',
            url: '/config/getlangtags'
        },
        body: { lang }
    };
}

export function getMenus(lang) {
    return {
        type: GET_MENUS,
        request: {
            method: 'post',
            url: '/config/getmenus'
        },
        body: { lang }
    };
}