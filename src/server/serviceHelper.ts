import api from "./api";
import http from "./http";

export const postVisitor = (data: { "phone": string }) => {
    return http.post(api.visitor, data);

}
export const getVisitorInfo = (params: any) => {
    return http.get(api.assistantPk.replace('/:pk',`/${params.assist_id||params.pk}`),  {params});

}
export const getDataList = (params: any) => {
    return http.get(api.messageList, {params});
}
export const postChatData = (data: any) => {
    let {assist_id,pk}=data
    return http.post(api.assistantChat(assist_id||pk), data);
}
export const getAssistantInfo = (params: any) => {
    let {assist_id,pk}=params
    return http.get(api.assistantInfo(assist_id||pk), {params});
}