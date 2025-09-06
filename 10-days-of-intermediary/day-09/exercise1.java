import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 9: Basic Design Patterns ===\n");
        
        System.out.println("Exercise: Implement Observer Pattern for News Notifications");
        System.out.println("=========================================================");
        
        // TODO: Implement a simple news notification system using the Observer pattern
        // This exercise will help you understand:
        // 1. How the Observer pattern works
        // 2. How to implement loose coupling between objects
        // 3. How to create a publish-subscribe system
        
        /*
        // Example usage of your completed system:
        NewsAgency newsAgency = new NewsAgency();
        
        // Create different types of news channels
        NewsChannel tvChannel = new TVChannel();
        NewsChannel radioChannel = new RadioChannel();
        NewsChannel onlineChannel = new OnlineChannel();
        
        // Subscribe channels to news agency
        newsAgency.subscribe(tvChannel);
        newsAgency.subscribe(radioChannel);
        newsAgency.subscribe(onlineChannel);
        
        // Publish news - all subscribed channels should receive it
        newsAgency.publishNews("Breaking News: Major tech announcement!");
        newsAgency.publishNews("Sports Update: Championship results");
        
        // Unsubscribe one channel
        newsAgency.unsubscribe(radioChannel);
        newsAgency.publishNews("Radio channel won't receive this news");
        */
    }
    
    // TODO: Implement NewsAgency class (Subject)
    // This class should:
    // - Keep track of subscribed channels
    // - Allow channels to subscribe and unsubscribe
    // - Notify all subscribed channels when news is published
    static class NewsAgency {
        // TODO: Add private fields for storing subscribed channels
        // TODO: Implement subscribe(channel) method
        // TODO: Implement unsubscribe(channel) method
        // TODO: Implement publishNews(news) method to notify all channels
    }
    
    // TODO: Implement NewsChannel interface (Observer)
    // This interface should define how channels receive news updates
    interface NewsChannel {
        // TODO: Add update(news) method that channels must implement
    }
    
    // TODO: Implement TVChannel class
    // This class should implement NewsChannel and display news on TV
    static class TVChannel implements NewsChannel {
        // TODO: Implement the update method to show news on TV
        // TODO: Add a method to display current news
    }
    
    // TODO: Implement RadioChannel class
    // This class should implement NewsChannel and broadcast news on radio
    static class RadioChannel implements NewsChannel {
        // TODO: Implement the update method to broadcast news on radio
        // TODO: Add a method to show current news
    }
    
    // TODO: Implement OnlineChannel class
    // This class should implement NewsChannel and publish news online
    static class OnlineChannel implements NewsChannel {
        // TODO: Implement the update method to publish news online
        // TODO: Add a method to show current news
    }
    
    // TODO: Test your Observer pattern implementation
    // Make sure:
    // - Subscribed channels receive news updates
    // - Unsubscribed channels don't receive updates
    // - Multiple channels can be subscribed at once
}
