function palindrome(message) {
    // wirte your code here
    let length = message.length;
    if (length <= 1) {
        return true;
    }
    return message.charAt(0) === message.charAt(length - 1) ? palindrome(message.substring(1, length - 1)) : false;
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true