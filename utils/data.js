const userData = [
    {
      username: "john_doe",
      email: "john@example.com",
      friends: [],
      thoughts: [] 
    },
    {
      username: "jane_smith",
      email: "jane@example.com",
      friends: [],
      thoughts: []
    },
    
  ];
  
  const thoughtData = [
    {
      thoughtText: "I love coding!",
      username: "john_doe",
      reactions: [
        {
          reactionBody: "Me too!",
          username: "jane_smith"
        }
      ]
    },
    {
      thoughtText: "Node.js is awesome!",
      username: "jane_smith",
      reactions: [
        {
          reactionBody: "Absolutely!",
          username: "john_doe"
        }
      ]
    },

  ];
  
  module.exports = { userData, thoughtData };
  