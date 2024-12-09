export default class ApiUrl {
    static GetListNews = (categoryId?: number, page?: number, pageSize?: number, keyword?: string) => {
        let url = "http://42.96.40.247:8041/api/News/List?categoryId=" + categoryId + "&page=" + page + "&pageSize=" + pageSize + "&keyword=" + keyword;
        return url;
    };

    static GetNewsByUrl = (urlName: string) => {
        let url = "http://42.96.40.247:8041/api/News/Detail?url=" + urlName;
        return url;
    };

    static GetListMenu = (type: number) => {
        let url = "http://42.96.40.247:8041/api/Menu/ListParent?type=" + type;
        return url;
    };

    static GetMenuByUrl = (urlName: string) => {
        let url = "http://42.96.40.247:8041/api/Menu/GetByUrl?url=" + urlName;
        return url;
    };

    static SendContact = "http://42.96.40.247:8041/api/Contact/Add";
    static GetConfig = "http://42.96.40.247:8041/api/Config/GetFirst";

    static GetNewsHighlight = (top: number) => {
        let url = "http://42.96.40.247:8041/api/News/ListHighLight?top=" + top;
        return url;
    };

    static GetNewsHome = (top: number) => {
        let url = "http://42.96.40.247:8041/api/News/ListHome?top=" + top;
        return url;
    };

    static GetListNewsHomeBySearch = (page?: number, pageSize?: number, keyword?: string) => {
        let url = "http://42.96.40.247:8041/api/News/ListHomeSearch?page=" + page + "&pageSize=" + pageSize + "&keyword=" + keyword;
        return url;
    };

    static GetListSlideBanner = (type?: number, page?: number) => {
        let url = "http://42.96.40.247:8041/api/SlideBanner/List?type=" + type + "&page=" + page;
        return url;
    };

    static GetPageContent = (type?: number) => {
        let url = "http://42.96.40.247:8041/api/PageContent/GetByType?type=" + type;
        return url;
    };
}