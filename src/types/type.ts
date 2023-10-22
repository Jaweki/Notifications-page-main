export interface UserDataTypesAnotation  {
    id: number;
    name: string;
    case: CaseObjTypesAnotation;
    seen: boolean;
    dateOfAction: string;
}
export type CaseObjTypesAnotation = {
    type: string,
    post: string,
    group: string,
    message: string,
    picture: string
}