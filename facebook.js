

let facebookProfile = {
  name: "Jack",
  friends: 100,
  messages: [
    "I like dogs",
    "I am Korean",
    "I am a lighthouse student!"
  ],
  postMessage: function (message) {
    facebookProfile.messages.push (message);
    return facebookProfile.messages;
  },

  deleteMessage: function (index) {
    facebookProfile.messages.splice (index, 1);
    return facebookProfile.messages;
  },

  addFriend: function () {
    facebookProfile.friends += 1;
    return facebookProfile.friends;
  },

  removeFriend: function () {
    facebookProfile.friends -= 1;
    return facebookProfile.friends;
  }

};


console.log (facebookProfile.postMessage ("I have girlfriend"));
console.log (facebookProfile.deleteMessage(0));
console.log (facebookProfile.addFriend());
console.log (facebookProfile.removeFriend());