const currentUser = 'John Doe';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;


const firstInitial = currentUser[0];
const shortGreeting = `Welcome, ${firstInitial}!`;

// Export the variables
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};