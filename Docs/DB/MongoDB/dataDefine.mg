db.post.insert([
{
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by: 'eamon chen',
   url: 'localhost',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   title: 'NoSQL Database', 
   description: 'NoSQL database does not have tables',
   by: 'eamn test',
   url: '127.0.0.1',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 20, 
   comments: [	
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2013,11,10,2,35),
         like: 0 
      }
   ]
}
])

db.mycol.insert([
{"title":"MongoDB Overview 1"},
{"title":"NoSQL Overview 1"},
{"title":"Eamon Overview 1"}
])





db.mycol.insert([
{
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'eamon chen1',
   url: 'locolhost',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'Sally chen',
   url: 'locolhost',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},
{
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'locolhost',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
}
])