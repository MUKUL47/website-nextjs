// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    category: "Applications",
    titles: [
      {
        name: "Course Program System",
        img: "/cards/erp-system.jpg",
        link: "https://github.com/Course-Program-management-system",
        description:
          "Made a side project for one of the university in bangalore where students marks data need to be analysed and where they stand",
        tech: "Typescript, React, Express, MongoDb, NodeJs, NodeMailer, heroku for deployment & Node Mailer for SMTP",
        info: `
            Course Program Management System a full stack javascript application with one command deployment in heroku.
            <br/>
            Objective : Design a course marks management system where 3 major entities are involved, (1) Super Admin i.e DEAN of the university under super admin (2) HOD i.e head of department
            under HOD (3) teachers.
            <br/>
            Roles are as follows DEAN will create departments such as Computer Science, LAW, Mechanical etc, HOD will be under DEAN and will be responsible for managing subjects under various department(s) and teacher will be 
            responsible for uploading students marks sheets results for marks analysis.
            <br/>
            This is my personal favourite project because I had chance to play and implement various designs challenges and also lot of room to improve upon.
            <br/>
            For frontend i have used plain ReactJs with dynamic routing and automatic breadcrumb design based on routing, for server side nodejs, express, mongodb with OOP concepts with typescript and with router -> controller -> service,
            for deployment heroku (later plan is to migrate to AWS EC2) is used where whole application can be deployed with one simple command.
            <br/>
            Students marks are analysed using xlsx library, whenever students marks sheets are uploaded then are later processed with university/college specific marks calculator.
          `,
      },
      {
        name: "Messenger",
        img: "/cards/chat-messenger.jpg",
        description: "Simple Full Stack social media chat application.",
        link: "https://github.com/MUKUL47/messenger",
        tech: "React, Express, TypeScript, MySql, MongoDB & Redis",
        demo: "/demo/social-messenger.png",
        info: `
                    A simple messenger, where you can create an account by email, mobile or even google signIn.
                    Create Profile, add friends and start chatting and real time communications such a typing, status wether online or offline etc.
                    <br/>
                    This application is under development.
                    `,
      },
      {
        name: "Live Poll Voter",
        img: "/cards/live-poll.jpg",
        description: "Live poll voter with realtime vote updates",
        link: "https://github.com/MUKUL47/live-poll-voter",
        tech: "React, Express, Socket.io & Firebase",
        demo: "/demo/live-poll.gif",
        info: `
                    Create a poll by entering title, options (atleast 2), Description (optional) etc
                    <br/>
                    Adjust vote settings
                    <br/>
                    - Unique IP : each vote will be unique to an IP address
                    <br/>
                    - Unique browser session : each vote will be unique to a browser
                    <br/>
                    Enter voting area just by entering poll ID
                    <br/>
                    View real time updates of a specific poll.
                    `,
      },
      {
        name: "Quizzer",
        img: "/cards/quizzer.jpg",
        description:
          "Dynamic quiz application, where users can create quiz with various settings and user authentication.",
        link: "https://github.com/mukul47/quizzer",
        tech: "HTML, SCSS, React, Express & Firebase",
        demo: "/demo/quizzer.gif",
        info: `Quizzer is a flexible quiz application having 2 modes</br> 
                    1) <b>Quiz Maker</b> : This mode allow users to create quiz from scratch by filling basic user information i.e name, email, quiz duration, expiry etc and later preparing the actual MCQ (multiple choice questions) where a specific question can have multiple choices quiz structure can be updated with the help of email authentication, quiz id can be shared among friends students etc. 
                    <br/>
                    <br/>
                    2) <b>Quiz Taker</b> : This mode allow users to take quiz with a specific id, user is allowed to take only one quiz at a time, actual quiz interface is pretty simple and straightforward with flag and show attempted question feature.
                    <br/>
                    <br/>
                    Frontend is coded in reactJS, materialUI and backend routing is done in express with firebase as noSQL database, for results subscription nodemailer nodeJS library is used.`,
      },
      {
        name: "Calculator",
        img: "/cards/calculator.jpg",
        description: "A simple operator precedence calculator.",
        link: "https://github.com/MUKUL47/Operator-Precedence-Calculator",
        tech: "HTML, CSS & Javascript",
        demo: "https://camo.githubusercontent.com/dc84aff5b5ef4ee77d4ab2c08a56c7cbb0ee3e84cd9cc9595624656d0e179467/68747470733a2f2f692e696d67666c69702e636f6d2f3271676c336c2e676966",
        info: `Simple javascript calculator with operator precedence parsing with allows complex operations such as "9*10/2*200-1+1"`,
      },
      {
        name: "Auto word suggestor",
        img: "/cards/auto-word-suggestor.png",
        description:
          "This application suggest / auto-complete word based on Trie datastructure.",
        link: "https://github.com/MUKUL47/Auto-word-suggester",
        tech: "HTML, CSS, Javascript & Express",
        demo: "/demo/auto-word-suggestor.png",
        info: `
                    A unique application which suggests words based on TRIE datastructure.
                    <br/>
                    <br/>
                    How it works : First a huge list of words is filtered then a TRIE datastructure is created now from the client side as soon as a word is typed a prefix is stored / considered for instance "Ind" is typed by a user this Ind is the starting prefix now from the TRIE dataset all different types of words are constructed using BFS algo which goes though each TRIE node and returns prefix match word.
                    `,
      },
      {
        name: "Multiplayer Typing Test",
        img: "/cards/typing-test.jpg",
        description: "Multiplayer typing test application.",
        link: "https://github.com/MUKUL47/MultiplayerTypingTest",
        tech: "HTML, CSS, Javascript, Express & Socket.Io",
        demo: "https://github.com/MUKUL47/MultiplayerTypingTest/raw/master/typeracer-client/public/typeracer-demo.gif",
        info: `Typing game where 2 or more players can join a room to battle an intense typing game!
                    <br/>
                    <br/>
                    A room is created where users can join, once all users are ready to start real time progress is shared among users using web sockets.
                    <br/>
                    <br/>
                    Features : Lock Room - won't allow any user to join until room is unlocked by the admin, Custom paragraph - admin can mention custom paragraph during room creation, Max participants - admin can set how many participants can be in the type race.
                    <br/>
                    <br/>
                    If admin left the room, his / her ownership will be moved to next participant who joined later. 
                    `,
      },
      {
        name: "University ERP system",
        img: "/cards/erp-system.jpg",
        description: "University ERP system with admin and student portal.",
        link: "https://github.com/MUKUL47/ANDROID-ERP-SYSTEM",
        tech: "HTML, CSS, Javascript, Express, ElectronJS, Java, Android & Firebase",
        info: `University ERP portal where students can download seating arrangents, mark sheet result and view admin notices. This all can be controlled from admin panel which is build on electron framework.
                    <br/>
                    <br/>
                    <b>Student</b> : Student related info is authenticated and user data is stored in real time firebaseDB. Notice and mark sheet files are stored in firebaseStorage and user is provided with simple interface.
                    <br/>
                    <br/>
                    <b>Admin</b> : Admin can control any student details, can perfrom full CRUD such as remove user, update password, update/ remove mark sheet or notices and this admin application can be installed on admin PC.
                    `,
      },
    ],
  },
  {
    category: "Others",
    titles: [
      {
        name: "Node-Threader library",
        img: "/cards/electron-thread.jpg",
        description: "A simple multi-thread library for nodejs run time.",
        link: "https://github.com/MUKUL47/node-threader",
        tech: "Javascript",
        demo: "assets/demo/node-threader.png",
        info: `
                    Inspired from electron-boiler-plate where we can execute heavy synchronous function in a separate thread,
                    <br/>
                    node-threader library helps us to utilize N number of threads for multi-threading execution, use cases can be for electron app where we don't want 
                    to freeze the UI thread any heavy computation we can just execute in a separate thread once callback is invoked from that worker thread just pass the data
                    to frontend IPC.
                     `,
      },
      {
        name: "JSON Validator",
        img: "/cards/json-validator.jpg",
        description: "A simple and easy to use JSON validator.",
        link: "https://github.com/MUKUL47/jsonvalidator",
        tech: "Javascript",
        demo: "assets/demo/json-validator.png",
        info: `
                    JSON validator library where json object is validated based on schema syntax provided by user, each and every key and value is validated with respect to schema if something doesn't match error is throw.
                    <br/>
                    Optional custom parameters such as regex string, max-min number range, strict boolean value are also supported.
                    `,
      },
      {
        name: "Programming Problems",
        img: "/cards/question-mark.png",
        description: "Data Structures and Algorthim in Java.",
        link: "https://github.com/MUKUL47/LOGICS",
        tech: "Java & JavaScript",
        demo: "assets/demo/logics.png",
        info: `
                    Datastructures and algorithms coded in java such as Stack, Graph, Encryption, String, hackerrank problem solutions and various other programming solutions.
                    `,
      },
      {
        name: "Electron with threads",
        img: "/cards/electron-thread.jpg",
        description: "Simple boiler plate for electron using worker thread",
        link: "https://github.com/MUKUL47/electron-thread-boilderplate",
        tech: "Javascript",
        demo: "assets/demo/electron-thread.gif",
        info: `
                    Electron-main process is by default running on single thread, so from render process if there's request to process/ load/ CRUD huge amount of synchronous data from OS UI freezes since browser window is also running on the same thread.
                    <br/>
                    <br/>
                    Before even creating window fork a worker thread once worker thread is forked inform master thread to initialize browser window now whenever there's a request from render-process to process synchronous data which might lead UI to freeze, just call the worker thread and wait untill work is processed later foward the data to render process.
                    `,
      },
      {
        name: "Website Tour Library",
        img: "/cards/yatra-tour.jpg",
        description:
          "A simple light weight and easy to use website tour library.",
        link: "https://github.com/MUKUL47/yatra-tour-js",
        tech: "HTML, CSS & JavaScript",
        demo: "https://github.com/MUKUL47/yatra-tour-js/raw/main/test/tour-demo.gif",
        info: `
                    Website tour library like Tour.js allows users guiding through the application destinations or hotspots with various configurations.
                    `,
      },
    ],
  },
  {
    category: "Games",
    titles: [
      {
        name: "Sudoku",
        img: "https://github.com/MUKUL47/sudoku/raw/main/demo.png",
        description: "A simple sudoku clone",
        link: "https://github.com/MUKUL47/sudoku",
        tech: "JavaScript",
        demo: "https://github.com/MUKUL47/sudoku/raw/main/demo.png",
        info: `Sudoku made in plain javascript, supports on click theme color change and invalid block detection.\n Currently a puzzle can have more than 1 solution will optimize the backtrack algorithm more efficiently to produce only 1 solution with unexpected randomness`,
      },
      {
        name: "2048",
        img: "https://github.com/MUKUL47/2048/raw/main/2048.png",
        description: "A simple 2048 clone",
        link: "https://github.com/MUKUL47/2048",
        tech: "JavaScript",
        demo: "https://github.com/MUKUL47/2048/raw/main/2048.png",
        info: `2048 clone made with javascript, with tile animations`,
      },
      {
        name: "Minesweeper",
        img: "/cards/minesweeper.jpg",
        description: "Minesweeper made with React Native.",
        link: "https://github.com/MUKUL47/Minesweeper",
        tech: "React Native",
        demo: "/demo/minesweeper.gif",
        info: `Minesweeper made with Reactnative. Supports multiple grid configs & flag`,
      },
      {
        name: "Solitare",
        img: "/cards/solitare.jpg",
        description: "Solitare Clone made with ReactJs.",
        link: "https://github.com/MUKUL47/Solitare",
        tech: "ReactJs",
        demo: "/demo/solitare-gif.png",
        info: `Beautiful Solitare clone made with React, special thanks to cardmeister(https://github.com/cardmeister) for quality deck SVG images. <br/> Give it a try!`,
      },
      {
        name: "Connect Four",
        img: "/cards/connect-four.jpg",
        description: "Simple Connect Four javascript game.",
        link: "https://github.com/MUKUL47/Connect-Four",
        tech: "HTML, CSS, Javascript",
        demo: "/demo/connect-four.png",
        info: `
                    Simple connect four clone written in plain js with 7x6 configuration.
                    Give it a try ! https://mukul47.github.io/Connect-Four/
                    `,
      },
      {
        name: "Pacman",
        img: "/cards/pacman.jpg",
        description:
          "Classic dynamic pacman clone where map can be randomly or user generated with save data support.",
        link: "https://github.com/MUKUL47/pacman",
        tech: "HTML, CSS, Javascript, Express, P5js & Firebase",
        demo: "/demo/pacman.gif",
        info: `
                    My personal favourite javascript game I have ever coded, just because this game has almost everything such as Random map generation, AI with pathfinding algorithm, creation center, save custom map online.
                    <br/>
                    <br/>
                    This pacman game follows tile based map movement, where each block 20*20 is tile and both AI and player have free will to move around it,
                    just like the old school classic this game also follows the same old rules such as survive from ghosts, collect berries to become invincible for few seconds and have control over ghosts and if any ghost comes in contact with player its game over!.
                    <br/>
                    <br/>
                    Random map generation : Default gameplay will run on randomly generated pacman map. Empty area that allows ghosts and pacman to move freely, obstacle(wall), cherry to boost pacman, 4 ghosts and a pacman.
                    Ghost behaviour : ghosts follow BFS algorithm and try to reach pacman in shortest path possible, with each pacman movement ghost path is re-calculated determing source and destination. 
                    If pacman have control over ghost for few seconds they scatter in random direction and start from initial spawn location.
                    <br/>
                    <br/>
                    Creation center : This mode allows user to create map of any configuration i.e can place obstacles, ghosts, berries, food, pacman at a valid position if map is valid this configuration can be later stored in user's system in an encrypted format, later this same config can be retrieved and reused again,
                    Not only this config can be saved in firebaseDB with user save limit of 5.
                    `,
      },
      {
        name: "Tetris",
        img: "/cards/tetris.png",
        description: "A simple tetris game.",
        link: "https://github.com/MUKUL47/Tetris",
        demo: "assets/demo/tetris.gif",
        tech: "HTML, CSS & Javascript",
        info: `Simple tetris clone made entirely in javascript and utilized classes concepts as an objects such as Playground which will hold all the pieces together, Blocks for various tetris formations such as S-Block, H-Block etc and Brain class which maintains the whole rendering draw function controlling user actions and overall game logic.
                    `,
      },
      {
        name: "Snake",
        img: "/cards/snake.png",
        description: "A simple snake game.",
        link: "https://github.com/MUKUL47/SNAKE",
        tech: "HTML, CSS, Javascript & P5js",
        demo: "https://camo.githubusercontent.com/ffdba5d32010adddf64cff99f3d748e5366511e8fc2a24f2d19681e111c77075/68747470733a2f2f692e696d67666c69702e636f6d2f3330793435352e676966",
        info: `Snake game coded in javascript with the help of P5js library which handles draw and render behind the scenes, this game follows simple logic i.e push stack, snake will be running through the x*x block tile map on food discovery snake array will be incremented and if snake touches itself its gameover!`,
      },
      {
        name: "Tic-Tac-Toe",
        img: "/cards/tic-tac-toe.png",
        description: "Tic-Tac-Toe game improved with mini-max algorithm.",
        link: "https://github.com/MUKUL47/TICTACTOE",
        tech: "HTML, CSS & Javascript",
        demo: "https://camo.githubusercontent.com/30bf70f688a714bb5122413a4cd08b36e98cf4b678bfe06518c7efa5e45f8ce5/68747470733a2f2f692e696d67666c69702e636f6d2f3271613565372e676966",
        info: `Simple tic-tac-toe game coded in plain javascript with mini-max algorithm i.e after every user input AI detects best next possible move i.e win then draw.`,
      },
      {
        name: "Racer",
        img: "/cards/racer.jpg",
        description: "A simple 2D racer game.",
        link: "https://github.com/MUKUL47/race",
        tech: "Processing (Java)",
        demo: "/demo/racer.png",
        info: `Simple 2D racer coded in java processing framework
                    <br/>
                    Objective : Dodge incoming traffic cars on a busy road, speed(points) of the car increases with respect to the distance convered.
                    `,
      },
      {
        name: "Frogger",
        img: "/cards/frogger.png",
        description: "Old school frogger clone.",
        link: "https://github.com/MUKUL47/pacman",
        tech: "Processing (Java)",
        demo: "https://camo.githubusercontent.com/95d1fc0f3e9c28735e03c5a7978160f6e28ccc6d6ca0cda6d72c4c540d370519/68747470733a2f2f692e696d67666c69702e636f6d2f3330697074382e676966",
        info: `Simple 2D old school frogger game in java processing framework
                    <br/>
                    The objective of the game is to guide a frog to each of the empty i.e at the top of the screen crossing a busy interstate.
                    `,
      },
      {
        name: "Breakout",
        img: "/cards/breakout.jpg",
        description: "A simple Breakout game made with P5js library",
        link: "https://github.com/MUKUL47/Breakout",
        tech: "HTML, CSS, Javascript & P5js",
        demo: "https://camo.githubusercontent.com/dd53e8fef8001e6331871cc38a4141d1ff59a06c37574d254e8bc4a831c4de6f/68747470733a2f2f692e696d67666c69702e636f6d2f33336a6b6c342e676966",
        info: `Simple breakout game coded in javascript with the help of P5js visual library, game is divided with OOP based object classes and all are bundled together in a render function.
                    <br/>
                    <br/>
                    Whole game is divided up as classes such as ball, player(bar) & block all these 3 objects are controlled in main brain.js file inside a render block.
                    `,
      },
      {
        name: "Pong",
        img: "/cards/pong.jpg",
        description: "Pong game made in unity.",
        link: "https://github.com/MUKUL47/UNITY-PINGPONG",
        tech: "Unity & C#",
        info: `Simple 2D Pong game made with unity engine`,
      },
    ],
  },
];
