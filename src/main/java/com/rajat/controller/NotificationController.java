package com.rajat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {

    //Server Side

    //pref url endPt + end pts(app/sendMessage)
    @MessageMapping("/sendMessage")
    @SendTo("/status/notification")
    public String sendMessage(String message) {
        return message;
    }
}
