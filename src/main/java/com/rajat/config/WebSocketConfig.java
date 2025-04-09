package com.rajat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    //2 default methods:
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        //WebSocketMessageBrokerConfigure.super.configureMessageBroker(config);

        //update msg's channel:->end-PTS

        /*
            2 end-points
             prefix(topic): Broadcasting msg's
            prefix(app): client->access the end-pts
        */

        config.enableSimpleBroker("/status");
        config.setApplicationDestinationPrefixes("/app");

    }
    //End-pts

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        //WebSocketMessageBrokerConfigure.super.registerStompEndpoints(registry);
        /*
            Idea is:
            create ws(websocket) endpoints and with origins, and we use sockjs for:
                Fallback(allow you to provide an alternative result for a failed execution)
         */

        //web-socket connection via client
        registry.addEndpoint("/websocket")
                .setAllowedOrigins("http://localhost:63342")
                .withSockJS();
    }
}
