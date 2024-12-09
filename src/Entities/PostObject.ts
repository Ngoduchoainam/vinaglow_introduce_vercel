export class PostObject {
    id?: number;
    order?: number;
    fileDetail?: FileDetail;
    title?: string;
    describe?: string;
    content?: string;
    groupNew?: string;
    seoUrl?: string;
}

class FileDetail {
    fileUrl?: string;
}