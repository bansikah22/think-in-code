import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 3: Object-Oriented Programming - Inheritance & Polymorphism ===\n");
        
        System.out.println("Exercise: Building a Class Hierarchy for Library Management");
        System.out.println("=========================================================");
        
        // TODO: Implement all the classes below
        // Then uncomment this demo code to test your implementations
        
        /*
        System.out.println("Library System Initialization:");
        System.out.println("Creating library items...");
        System.out.println("Creating users...");
        System.out.println("Setting up operations...\n");
        
        // Create library items
        LibraryItem book = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565");
        LibraryItem magazine = new Magazine("National Geographic", "2024-01", "ISSN-0027-9358");
        LibraryItem dvd = new DVD("The Matrix", 1999, "Warner Bros.");
        
        // Create users
        Person member = new Member("John Doe", "M001", "Active");
        Person librarian = new Librarian("Jane Smith", "L001", "Senior");
        
        // Create operations
        LibraryOperation borrowOp = new BorrowOperation();
        LibraryOperation returnOp = new ReturnOperation();
        
        System.out.println("Library Items Created:");
        System.out.println("- Book: \"" + book.getTitle() + "\" by " + ((Book) book).getAuthor() + " (" + book.getStatus() + ")");
        System.out.println("- Magazine: \"" + magazine.getTitle() + "\" Issue " + ((Magazine) magazine).getIssue() + " (" + magazine.getStatus() + ")");
        System.out.println("- DVD: \"" + dvd.getTitle() + "\" (" + ((DVD) dvd).getYear() + ") (" + dvd.getStatus() + ")\n");
        
        System.out.println("Users Created:");
        System.out.println("- Member: " + member.getName() + " (ID: " + ((Member) member).getId() + ", Status: " + ((Member) member).getStatus() + ")");
        System.out.println("- Librarian: " + librarian.getName() + " (ID: " + ((Librarian) librarian).getId() + ", Level: " + ((Librarian) librarian).getLevel() + ")\n");
        
        System.out.println("Demonstrating Inheritance & Polymorphism:\n");
        
        // 1. Display Item Information (Polymorphic)
        System.out.println("1. Displaying Item Information (Polymorphic):");
        displayItemInfo(book);
        displayItemInfo(magazine);
        displayItemInfo(dvd);
        
        // 2. Demonstrating Method Overriding
        System.out.println("2. Demonstrating Method Overriding:");
        System.out.println("Calculating fees for different items:");
        System.out.println("- Book (5 days): $" + book.calculateFee(5));
        System.out.println("- Magazine (3 days): $" + magazine.calculateFee(3));
        System.out.println("- DVD (2 days): $" + dvd.calculateFee(2));
        
        // 3. Demonstrating Polymorphic Operations
        System.out.println("\n3. Demonstrating Polymorphic Operations:");
        System.out.println("Borrowing items:");
        System.out.println("- " + member.getName() + " borrowing \"" + book.getTitle() + "\": " + borrowOp.perform(book, member));
        System.out.println("- " + member.getName() + " borrowing \"" + magazine.getTitle() + "\": " + borrowOp.perform(magazine, member));
        System.out.println("- " + member.getName() + " borrowing \"" + dvd.getTitle() + "\": " + borrowOp.perform(dvd, member));
        
        System.out.println("\nReturning items:");
        System.out.println("- " + member.getName() + " returning \"" + book.getTitle() + "\": " + returnOp.perform(book, member) + ", Fee: $" + book.calculateFee(5));
        System.out.println("- " + member.getName() + " returning \"" + magazine.getTitle() + "\": " + returnOp.perform(magazine, member) + ", Fee: $" + magazine.calculateFee(3));
        System.out.println("- " + member.getName() + " returning \"" + dvd.getTitle() + "\": " + returnOp.perform(dvd, member) + ", Fee: $" + dvd.calculateFee(2));
        
        // 4. Demonstrating Access Control
        System.out.println("\n4. Demonstrating Access Control:");
        System.out.println("Librarian operations:");
        System.out.println("- " + librarian.getName() + " can add new items: " + ((Librarian) librarian).canAddItems());
        System.out.println("- " + librarian.getName() + " can remove items: " + ((Librarian) librarian).canRemoveItems());
        System.out.println("- " + librarian.getName() + " can override fees: " + ((Librarian) librarian).canOverrideFees());
        
        System.out.println("\nMember operations:");
        System.out.println("- " + member.getName() + " can add new items: " + ((Member) member).canAddItems());
        System.out.println("- " + member.getName() + " can remove items: " + ((Member) member).canRemoveItems());
        System.out.println("- " + member.getName() + " can override fees: " + ((Member) member).canOverrideFees());
        
        // 5. Error Handling
        System.out.println("\n5. Error Handling:");
        System.out.println("Attempting invalid operations:");
        System.out.println("- Borrowing unavailable item: " + borrowOp.perform(book, member));
        System.out.println("- Returning item not borrowed: " + returnOp.perform(book, member));
        System.out.println("- Invalid user operation: " + borrowOp.perform(book, null));
        
        // Class Hierarchy Summary
        System.out.println("\nClass Hierarchy Summary:");
        System.out.println("LibraryItem (Abstract)");
        System.out.println("├── Book");
        System.out.println("├── Magazine");
        System.out.println("└── DVD");
        System.out.println();
        System.out.println("Person");
        System.out.println("├── Member");
        System.out.println("└── Librarian");
        System.out.println();
        System.out.println("LibraryOperation (Abstract)");
        System.out.println("├── BorrowOperation");
        System.out.println("└── ReturnOperation");
        System.out.println();
        System.out.println("Polymorphism demonstrated:");
        System.out.println("- Different item types handled uniformly through base class references");
        System.out.println("- Method overriding provides specific behavior for each derived class");
        System.out.println("- Runtime type determination enables flexible operations");
        */
        
        System.out.println("\nTODO: Implement all classes below");
        System.out.println("Then uncomment the demo code above to test your implementations.");
    }
    
    // Helper method to demonstrate polymorphism
    public static void displayItemInfo(LibraryItem item) {
        System.out.println(item.getType() + " Information:");
        System.out.println("  Title: " + item.getTitle());
        if (item instanceof Book) {
            System.out.println("  Author: " + ((Book) item).getAuthor());
        } else if (item instanceof Magazine) {
            System.out.println("  Issue: " + ((Magazine) item).getIssue());
        } else if (item instanceof DVD) {
            System.out.println("  Year: " + ((DVD) item).getYear());
        }
        System.out.println("  Type: " + item.getType());
        System.out.println("  Status: " + item.getStatus());
        System.out.println("  Fee: $" + item.getDailyFee() + " per day\n");
    }
    
    // TODO: Implement abstract base class for library items
    abstract static class LibraryItem {
        // TODO: Add protected fields for title, status, dailyFee
        // TODO: Add constructor to initialize these fields
        // TODO: Add abstract method getType() that derived classes must implement
        // TODO: Add concrete methods: getTitle(), getStatus(), getDailyFee(), calculateFee(days)
        // TODO: Add methods: setStatus(), isAvailable()
        
        // Example structure:
        // protected String title;
        // protected String status;
        // protected double dailyFee;
        // 
        // public LibraryItem(String title, double dailyFee) {
        //     this.title = title;
        //     this.status = "Available";
        //     this.dailyFee = dailyFee;
        // }
        // 
        // public abstract String getType();
        // public String getTitle() { return title; }
        // public String getStatus() { return status; }
        // public double getDailyFee() { return dailyFee; }
        // public double calculateFee(int days) { return dailyFee * days; }
        // public void setStatus(String status) { this.status = status; }
        // public boolean isAvailable() { return "Available".equals(status); }
    }
    
    // TODO: Implement Book class inheriting from LibraryItem
    static class Book extends LibraryItem {
        // TODO: Add private field for author and ISBN
        // TODO: Add constructor calling super constructor
        // TODO: Override getType() to return "Book"
        // TODO: Add getter methods for author and ISBN
        // TODO: Override calculateFee to apply book-specific logic (e.g., max fee cap)
    }
    
    // TODO: Implement Magazine class inheriting from LibraryItem
    static class Magazine extends LibraryItem {
        // TODO: Add private fields for issue and ISSN
        // TODO: Add constructor calling super constructor
        // TODO: Override getType() to return "Magazine"
        // TODO: Add getter methods for issue and ISSN
        // TODO: Override calculateFee to apply magazine-specific logic
    }
    
    // TODO: Implement DVD class inheriting from LibraryItem
    static class DVD extends LibraryItem {
        // TODO: Add private fields for year and studio
        // TODO: Add constructor calling super constructor
        // TODO: Override getType() to return "DVD"
        // TODO: Add getter methods for year and studio
        // TODO: Override calculateFee to apply DVD-specific logic
    }
    
    // TODO: Implement base Person class
    static class Person {
        // TODO: Add protected fields for name
        // TODO: Add constructor to initialize name
        // TODO: Add getter method for name
        // TODO: Add abstract method getRole() that derived classes must implement
    }
    
    // TODO: Implement Member class inheriting from Person
    static class Member extends Person {
        // TODO: Add private fields for id and status
        // TODO: Add constructor calling super constructor
        // TODO: Override getRole() to return "Member"
        // TODO: Add getter methods for id and status
        // TODO: Add methods: canAddItems(), canRemoveItems(), canOverrideFees() (all return false)
    }
    
    // TODO: Implement Librarian class inheriting from Person
    static class Librarian extends Person {
        // TODO: Add private fields for id and level
        // TODO: Add constructor calling super constructor
        // TODO: Override getRole() to return "Librarian"
        // TODO: Add getter methods for id and level
        // TODO: Add methods: canAddItems(), canRemoveItems(), canOverrideFees() (all return true)
    }
    
    // TODO: Implement abstract base class for library operations
    abstract static class LibraryOperation {
        // TODO: Add abstract method perform(LibraryItem item, Person person)
        // TODO: Add protected method validateOperation(LibraryItem item, Person person) for common validation
    }
    
    // TODO: Implement BorrowOperation class inheriting from LibraryOperation
    static class BorrowOperation extends LibraryOperation {
        // TODO: Override perform method to handle borrowing logic
        // TODO: Check if item is available and person is valid
        // TODO: Update item status to "Borrowed"
        // TODO: Return "Success" or appropriate error message
    }
    
    // TODO: Implement ReturnOperation class inheriting from LibraryOperation
    static class ReturnOperation extends LibraryOperation {
        // TODO: Override perform method to handle returning logic
        // TODO: Check if item can be returned by the person
        // TODO: Update item status to "Available"
        // TODO: Return "Success" or appropriate error message
    }
    
    // TODO: Test your implementations
    // Make sure:
    // - All classes compile and run correctly
    // - Inheritance relationships work properly
    // - Polymorphic behavior functions as expected
    // - Method overriding provides correct implementations
    // - Edge cases and error handling work properly
}
