
 // Users (add author data)
       const userData = [
        {
          fname: "John", // Replace with actual fname
            lname : "Doe",
          username:
          email: "johndoe@example.com",
          slug: "johndoe",
          name: "John Doe",
          password: "hashed_password", // Replace with actual hashed password
          bio: "I'm a passionate web developer and blogger.",
          role: "admin",
          @phone,
          @address,
          @city,
          @state,
          @zip,
          @company
          @website,
          @bio,
          
          
        },
        {
            email: "janetdoe@example.com",
            slug: "janetdoe",
            name: "Janet Doe",
            password: "hashed_password", // Replace with actual hashed password
            bio: "I'm a passionate web developer and blogger.",
            role: "admin",
          },
        // ... 1 more user
      ];
   
      //users table

    db.prepare(`
    CREATE TABLE IF NOT EXISTS Users (
    userid INTEGER PRIMARY KEY AUTOINCREMENT, 
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    phone TEXT ,
    bio TEXT,
    website TEXT,
    company INTEGER
    )
    `).run();


    async function initData() {
    const stmt = db.prepare(`
    INSERT INTO users VALUES (
        null,
        @fname,
        @lname,
        @username,
        @email,
        @password,
        @address,
        @city,
        @state,
        @zip,
        @phone,
        @bio,
        @website,
        @company
    )
    `);

    for (const users of usersData) {
    stmt.run(users);
    }
    }

    initData();




//categories table
db.prepare(`
CREATE TABLE catagories (
    catagoryid INTEGER PRIMARY KEY AUTOINCREMENT,
    catagory TEXT NOT NULL,
    description TEXT

 );

 `).run();

 async function initData() {
    const stmt = db.prepare(`
        INSERT INTO images VALUES (
           null,
           @filename,
           @alt_text,
           @description,
           @published_at, 
           @updated_at
        )
     `);
 
     for (const images of imageData) {
       stmt.run(images);
     }
   }
 



db.prepare(`
 CREATE TABLE Companiess (
    companyid INTEGER PRIMARY KEY AUTOINCREMENT,
    contact INTEGER,
    website TEXT,
    company TEXT NOT NULL
 );
 `).run();

// Images (update path and descriptions)
    const imageData = [
        {
        filename: "project1.jpg",
        path: "/images/project1.jpg",
        alt_text: "Project 1 screenshot",
        description: "A screenshot of the project's homepage.",
        published_at: "2024-01-01",
        updated_at: "2024-01-01",
        },
        {
            filename: "project2.jpg",
            path: "/images/project2.jpg",
            alt_text: "Project 1 screenshot",
            description: "A screenshot of the project's homepage.",
            published_at: "2024-01-01",
            updated_at: "2024-01-01",
        },
        {
            filename: "project3.jpg",
            path: "/images/project31.jpg",
            alt_text: "Project 1 screenshot",
            description: "A screenshot of the project's homepage.",
            published_at: "2024-01-01",
            updated_at: "2024-01-01",
        },
        {
            filename: "project4.jpg",
            path: "/images/project4.jpg",
            alt_text: "Project 1 screenshot",
            description: "A screenshot of the project's homepage.",
            published_at: "2024-01-01",
            updated_at: "2024-01-01",
        },
    
    ];

    db.prepare(`
    CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        alt_text TEXT,
        description TEXT NOT NULL,
        published_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME
    )
    `).run();

    async function initData() {
    const stmt = db.prepare(`
        INSERT INTO images VALUES (
            null,
            @filename,
            @alt_text,
            @description,
            @published_at, 
            @updated_at
        )
        `);

        for (const images of imageData) {
        stmt.run(images);
        }
    }
    
    initData();    

//  db.prepare(`
//  CREATE TABLE images (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     filename TEXT NOT NULL,
//     alt_text TEXT,
//     description TEXT NOT NULL,
//     published_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME
//  );
//  `).run();


 db.prepare(`
 CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image_id INTEGER NOT NULL,
    FOREIGN KEY (image_id) REFERENCES images(id)

 );
 `).run();

//     db.prepare(`
//  CREATE TABLE users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     fname TEXT NOT NULL,
//     lname TEXT NOT NULL,
//     username TEXT NOT NULL UNIQUE,
//     email TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL,
//     phone TEXT ,
//     website TEXT,
//     company INTEGER
//  );
//     `).run();

   
     initData(); 

