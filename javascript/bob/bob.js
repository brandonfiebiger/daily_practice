/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const newMessage = message.split(' ').join('');
  const allCaps = /^[A-Z]*$/.test(newMessage.slice(0, newMessage.length - 2));

  if (allCaps && newMessage[newMessage.length - 1] === '?') {
    return 'Calm down, I know what I\'m doing!';
    
    } else if (allCaps) {
      return 'Whoa, chill out!';
    } else if (newMessage[newMessage.length - 1] === '?') {
      return 'Sure.'
    } else {
      return 'Whatever.'
    }

};
