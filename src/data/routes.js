
const routes = [
    {
        pattern: "posts/([a-z-]+)/([a-z0-9-_]+)/view/([a-zA-Z0-9]{1,150})",
        pageType: 'postView'
    },
    {
        pattern: "posts/([a-z-]+)/([a-z0-9-_]+)/page/([0-9]+)",
        pageType: 'categoryPostList'
    },
    {
        pattern: "posts/([a-z-]+)/page/([0-9]+)",
        pageType: 'typePostList'
    }
];

export default routes;