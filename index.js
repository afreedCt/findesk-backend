const jsonserver=require('json-server')
const cors = require('cors'); // ✅ add this

const mpServer=jsonserver.create()
// opening all middlewares (cors,etc)
const middleware=jsonserver.defaults()
// path to data.json(datbase)
const route=jsonserver.router('data.json')
// PORT from webservice || 3000
const PORT=process.env.PORT || 3000

// Enable CORS and preflight
mpServer.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
mpServer.options('*', cors()); // Preflight support

// using all middleares
mpServer.use(middleware)
mpServer.use(route)

// calling the server
mpServer.listen(PORT,()=>console.log(`server running in ${PORT}`))