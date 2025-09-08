class Exercise1 {
 public static void main(String[] args) {
        // TODO: Validate age input
        // 1. Create an int variable named 'age' with value 25
        int age = 25;
        // 2. Create a boolean method or logic to check if age is valid (1-120)
        System.out.println("Age: " + age);
        System.out.println("Is valid age: " + isValidAge(age));

        // 3. Print the age and validation result

        // TODO: Test invalid ages
        // 1. Test age -5 (should be invalid)
        age = -5;
        System.out.println("Age: " + age);
        System.out.println("Is valid age: " + isValidAge(age));

        // 2. Test age 150 (should be invalid)
        age = 150;
        System.out.println("Age: " + age);
        System.out.println("Is valid age: " + isValidAge(age));

        // 3. Print results for each test

        // TODO: Validate email format
        // 1. Create a String variable named 'email' with value "user@example.com"
        String email = "user@example.com";
        // 2. Create logic to check if email contains "@" and "."
        System.out.println("Email: " + email);
        System.out.println("Is valid email: " + isValidEmail(email));

        // 3. Print the email and validation result

        // TODO: Test invalid email
        // 1. Test email "invalid-email" (should be invalid)
        email = "invalid-email";
        // 2. Print the result
        System.out.println("Email: " + email);
        System.out.println("Is valid email: " + isValidEmail(email));

        // Expected output:
        // Age: 25
        // Is valid age: true
        // Age: -5
        // Is valid age: false
        // Age: 150
        // Is valid age: false
        //
        // Email: user@example.com
        // Is valid email: true
        // Email: invalid-email
        // Is valid email: false
    }

    // Method to check valid age
    public static boolean isValidAge(int age) {
        return age >= 1 && age <= 120;
    }

    // Method to check valid email
    public static boolean isValidEmail(String email) {
        return email.contains("@") && email.contains(".");
    }
}
