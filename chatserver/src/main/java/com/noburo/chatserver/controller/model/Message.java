package com.noburo.chatserver.controller.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Message {
    private String senderName;
    private String recieverName;
    private String message;
    private String date;
    private Status status;
}
