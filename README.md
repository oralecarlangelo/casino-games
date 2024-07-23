
# Casino Games (Dice Game & Coin Flip Game)

## Overview

This project includes two simple casino-style games: a Dice Game and a Coin Flip Game. The games are built using **Next.js** for the frontend framework and **Three.js** for rendering 3D animations.

## Project Structure

The project is organized as follows:

```
.
├── .next
├── node_modules
├── public
├── src
│   ├── app
│   │   ├── game
│   │   │   ├── coin
│   │   │   │   ├── components
│   │   │   │   │   ├── animated-coin.tsx
│   │   │   │   ├── context
│   │   │   │   │   ├── coin-context.tsx
│   │   │   │   ├── coin.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   ├── dice
│   │   │   │   ├── components
│   │   │   │   │   ├── animated-mesh.tsx
│   │   │   │   ├── context
│   │   │   │   ├── hooks
│   │   │   │   ├── dice.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   ├── context
├── favicon.ico
```

### Folder and File Descriptions

- **`public/`**: Static assets such as images, icons, etc.
- **`src/app/game/coin/`**: Contains files related to the coin flip game.
  - **`components/`**: React components specific to the coin flip game.
    - `animated-coin.tsx`: Component responsible for the coin flip animation using Three.js.
  - **`context/`**: Context API for state management in the coin flip game.
    - `coin-context.tsx`: Provides context and state management for the coin flip game.
  - `coin.tsx`: Main component for the coin flip game.
  - `layout.tsx`: Layout component for the coin flip game.
  - `page.tsx`: Page component for the coin flip game.
- **`src/app/game/dice/`**: Contains files related to the dice game.
  - **`components/`**: React components specific to the dice game.
    - `animated-mesh.tsx`: Component responsible for the dice animation using Three.js.
  - **`context/`**: Context API for state management in the dice game.
  - **`hooks/`**: Custom hooks for the dice game.
  - `dice.tsx`: Main component for the dice game.
  - `layout.tsx`: Layout component for the dice game.
  - `page.tsx`: Page component for the dice game.
- **`src/context/`**: Shared context providers for the app.
- `favicon.ico`: Favicon for the application.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/your-username/casino-games.git
   cd casino-games
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server:**

   \`\`\`bash
   npm run dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Coin Flip Game

Navigate to the Coin Flip Game by going to `/game/coin`.

- **Flip Coin**: Click the "Flip Coin" button to see the coin flip animation and get the result (Heads or Tails).

### Dice Game

Navigate to the Dice Game by going to `/game/dice`.

- **Roll Dice**: Click the "Roll Dice" button to see the dice roll animation and get the result (1 to 6).

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Three.js**: A JavaScript library for creating 3D graphics in the web browser.
- **React**: A JavaScript library for building user interfaces.
- **Context API**: For state management across the application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
