import { PostContentModel } from "./PostContentModel";
import { PostImageModel } from "./PostImageModel";

export class ObjectValuePost {
    typePage?: string;
    position?: string;
    positionContent?: string;
    contentModels?: PostContentModel[];
    imageModels?: PostImageModel[]
}