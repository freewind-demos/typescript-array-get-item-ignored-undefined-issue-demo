const users: string[] = ['aaa', 'bbb', 'ccc'];

const user: string | undefined = users[5]?.toUpperCase();

// No compilation error
console.log(user.trim())