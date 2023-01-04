package com.noburo.chatserver.controller;

import com.noburo.chatserver.controller.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message") // /app/message   because app destination is /app
    @SendTo("/chatroom/public")
    private Message recievePublicMessage(@Payload Message message){
        return message;
    }
    @MessageMapping("private-message")
    public Message recievePrivateMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getRecieverName(), "/private", message); // /user/David/private
        return message;
    }
}
