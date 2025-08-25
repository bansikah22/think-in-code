public class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: String Creation and Basic Operations
        
        // TODO: Create strings
        // 1. Create a String variable named 'firstName' and assign it the value "John"
        String firstName = "John";
        // 2. Create a String variable named 'lastName' and assign it the value "Doe"
        String lastName = "Doe";
        
        // TODO: Perform basic operations
        // 1. Concatenate firstName and lastName with a space in between, store in 'fullName'
        String fullName = firstName + " "+ lastName;
        // 2. Get the length of fullName and store in 'nameLength'
        int nameLength = fullName.length();
        
        // 3. Get the first character of fullName and store in 'firstChar'
        char firstChar = fullName.charAt(0);
        // 4. Get the last character of fullName and store in 'lastChar'
        char lastChar = fullName.charAt(fullName.length() - 1);
        
        // TODO: Display results
        // 1. Print "First name: " followed by firstName
        System.out.println("First name: " + firstName);
        // 2. Print "Last name: " followed by lastName
        System.out.println("lastName name: " + firstName);
        // 3. Print "Full name: " followed by fullName
        System.out.println("Full name:" + fullName);
        // 4. Print "Name length: " followed by nameLength
       System.out.println("Name length: " + nameLength);
        // 5. Print "First character: " followed by firstChar
        System.out.println("First character: " + firstChar);
        // 6. Print "Last character: " followed by lastChar
        System.out.println("Last character: " + lastChar);
        
        // Expected output:
        // First name: John
        // Last name: Doe
        // Full name: John Doe
        // Name length: 8
        // First character: J
        // Last character: e
    }
}
