
export default {
    visitor: "/api/user/open/visitor",
    assistantPk:`/api/assistant/:pk`,
    messageList:'/api/message/list',
    assistantChat:(assist_id:string)=>`/api/assistant/chat/${assist_id}`,
    assistantInfo:(pk)=>`/api/assistant/${pk}`
}