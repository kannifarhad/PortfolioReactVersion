export const LANG_CHANGE = 'LANG_CHANGE';
export const PORTFOLIO_CATEGORY_CHANGE = 'PORTFOLIO_CATEGORY_CHANGE';
export const PHONE_MENU_TOGGLE = 'PHONE_MENU_TOGGLE';

export function langChange(lang) {
    return {
        lang,
        type:LANG_CHANGE
    }
}

export function portfolioCategoryChange(lang, slug) {
    return {
        lang,
        type:PORTFOLIO_CATEGORY_CHANGE
    }
}
export function menuToggle(){
    return {
        type:PHONE_MENU_TOGGLE
    }
}

export function requiredVariables(massive){

}