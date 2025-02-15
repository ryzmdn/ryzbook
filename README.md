# RyzBook  

**RyzBook** is a simple and open guestbook web application where visitors can leave messages without the need to log in or create an account. Built with **React.js**, **Vite** **Tailwind CSS**, and **Firebase**, RyzBook allows anyone to share their thoughts, feedback, or greetings permanently.  

## Features  

- **Anonymous Messaging** – Users can submit messages without signing in.  
- **Optional Username** – If no username is provided, a default name like `anonym-message#<random>` is assigned.  
- **Permanent Messages** – All messages are stored indefinitely and visible to everyone.  
- **Message Queue System** – A maximum of **100 messages** is stored at a time. When a new message is added beyond this limit, the oldest message is automatically removed.  
- **Rate Limiting** – Users can send only **one message per hour** from the same device.  
- **Timestamps** – Each message displays the sender's name, the message, and the date in the format: _Example:_ `Month/DD/YYYY`  

## Technology Used  

1. **Framework:**
    - [React.js](https://react.dev/)  
    - [Vite](https://vite.dev/)  
2. **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
3. **Database & Backend:** [Firebase](https://firebase.google.com/)  

## How It Works

1. A user enters a **username (optional)** and a **message (required)**.  
2. If the username is empty, it defaults to `anonym-message#<random>`.  
3. The message is saved in Firebase and displayed instantly.  
4. The system ensures:  
   - Users can send **only one message per hour** from the same device.  
   - A maximum of **100 messages** is stored, using a **queue system** where older messages are deleted when new ones arrive.  

## License  

RyzBook is licensed under the **MIT License**.  
