class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: String Case Operations
        
        // TODO: Create a string and perform case operations
        // 1. Create a String variable named 'text' with value "Hello World"
        String text = "Hello World";
        // 2. Print the original text
        System.out.println(text);
        
        // TODO: Change case using string methods
        // 1. Convert to uppercase and store in 'uppercase'
        String uppercase = text.toUpperCase();
        // 2. Convert to lowercase and store in 'lowercase'
        String lowercase = text.toLowerCase();
        // 3. Create title case (first letter of each word uppercase) and store in 'titleCase'
        String[] words = text.split(" ");
        StringBuilder sb = new StringBuilder();

        for(String word : words){
            sb.append(Character.toUpperCase(word.charAt(0))) // first letter uppercase
                    .append(word.substring(1).toLowerCase())
                    .append(" ");
        }

        String titleCase = sb.toString().trim();


        // 4. Create reversed case (swap upper and lower) and store in 'reversedCase'
        StringBuilder reversedCase = new StringBuilder();

        for (char c : text.toCharArray()) {
            if (Character.isUpperCase(c)) {
                reversedCase.append(Character.toLowerCase(c));
            } else if (Character.isLowerCase(c)) {
                reversedCase.append(Character.toUpperCase(c));
            } else {
                reversedCase.append(c); // keep spaces, numbers, punctuation
            }
        }
        
        // TODO: Display results
        // 1. Print "Uppercase: " followed by uppercase
        System.out.println("Uppercase: " + uppercase);
        // 2. Print "Lowercase: " followed by lowercase
        System.out.println("Lowercase: " + lowercase);
        // 3. Print "Title case: " followed by titleCase
        System.out.println("Title case: " + titleCase);
        // 4. Print "Reversed case: " followed by reversedCase
        System.out.println("Reversed case:" + reversedCase.toString());
        
        // Expected output:
        // Original: Hello World
        // Uppercase: HELLO WORLD
        // Lowercase: hello world
        // Title case: Hello World
        // Reversed case: hELLO wORLD
    }
}
