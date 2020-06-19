function alphabetSort(message) {
    // wirte your code here
    let array = message.split('');
    array = array.sort();
    return array.join('');
}

alphabetSort('hello'); // should return 'ehllo'