db.prepare(`
   CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       fname TEXT NOT NULL,
       lname TEXT NOT NULL,
       username TEXT NOT NULL UNIQUE,
       email TEXT NOT NULL UNIQUE,
       password TEXT NOT NULL,
       phone TEXT ,
       website TEXT,
       company INTEGER
    )
`).run();

// table users

// images table

// projects table

// categories table


// //users table
//                 db.prepare(`
//                 CREATE TABLE IF NOT EXISTS users (
//                     id INTEGER PRIMARY KEY AUTOINCREMENT,
//                     fname TEXT NOT NULL,
//                     lname TEXT NOT NULL,
//                     username TEXT NOT NULL UNIQUE,
//                     email TEXT NOT NULL UNIQUE,
//                     password TEXT NOT NULL,
//                     phone TEXT ,
//                     website TEXT,
//                     company INTEGER
//                  )
//              `).run();
             
             
//              async function initData() {
//                  const stmt = db.prepare(`
//                      INSERT INTO users VALUES (
//                         null,
//                          @fname,
//                          @lname,
//                          @username,
//                          @email,
//                          @password,
//                          @phone,
//                          @website,
//                          @company
//                      )
//                   `);
               
//                   for (const users of usersData) {
//                      stmt.run(users);
//                    }
//                  }
                 
//                  initData(); 

//portfolio table
db.prepare(`
            protfolio table
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                categories INTEGER [array],
                client INTEGER,
                FOREIGN KEY (client) REFERENCES clients(id),
                title TEXT NOT NULL,
                slug TEXT NOT NULL UNIQUE,
                images INTEGER [array],
                FOREIGN KEY (image) REFERENCES images(id),
                summary TEXT NOT NULL,
                description TEXT NOT NULL,
                links TEXT [array],
                creator INTEGER NOT NULL,
                FOREIGN KEY (creator) REFERENCES users(id)

                )
                `).run();



//clients table

db.prepare(`
   CREATE TABLE IF NOT EXISTS clients (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       contact INTEGER,
       website TEXT,
       name TEXT NOT NULL
    )
`).run();


async function initData() {
    const stmt = db.prepare(`
        INSERT INTO clients VALUES (
           null,
           @contact,
            @name,
            @website
        )
     `);
  
     for (const clients of clientsData) {
        stmt.run(clients);
      }
    }
    
    initData(); 

