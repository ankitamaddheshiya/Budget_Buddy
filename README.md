
<div align="center"  width="65" height="75">
  <img src="https://github.com/ankitamaddheshiya/honorable-furniture-4728/blob/main/Frontend/images/BBlogo1.PNG" alt="html" width="120" height="120"/>
</div>

Budget Buddy is a software application that you may access from your computer, tablet or mobile device to track your finances, such as income, savings, debt payoff, or investing.  

## Tech Stacks Used

<p align = "center">
<img src="https://github.com/PrinceCorwin/Useful-tech-icons/blob/main/images/HTML.png" alt="html" width="55" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="50" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>
<hr>

## Features 
-  Authentication
-  Google Authorization
-  Redis (for Caching)
-  APIValidation
-  Responsive
-  Cross Platform
-  Signup/signin/Logout
-  Income Add/Delet/Edit 
-  Expense Add/Delet/Edit
-  Filter by date 


## Run Locally
### Clone this Project

```
[https://github.com/ankitamaddheshiya/honorable-furniture-4728]
```

### Install npm Packages

```javascript
npm i --global
```

### Go to Backend Folder
```javascript
cd backend
```

### Run Server
```javascript
npx nodemon index.js
```

### Runs the project in the development mode
```
[http://localhost:4500]
```

### Environment Variables Required
`mongoURL`

`key`

`PORT`

`Redis Password`

`google_secrate_id`

`google_secrate_key`

## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>
<img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wNmFkMDUxNjc0NDA0NTVjOTQzYzE4NWIwNmM4NjBmMD9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.fJ4Me0BC-QzMrHKVqZzMx9CzgTcYb06jEt9nk9NxC2c" alt="otpgen.png" width="50" height="50"/>
</p>
   
## API Endpoints
   #### Home
```javascript
GET  /
```
   #### User Signup
```javascript
POST  /user/signup
```
  #### User Signin
```javascript
POST  /user/login
```
  #### User Logout
```javascript
POST  /user/logout
```
  #### User Edit Profile 
```javascript
POST  /user/editprofile
```
   #### Income Operation 
```javascript
POST /income/addincome
```

 ```javascript
 GET /income/
 ```
 
 ```javascript
 PATCH  /income/editincome/:id
 ```
 
 ```javascript
 DELETE /income/delete/:id
 ```
 
 ```javascript
 POST /income/filterdata
 ```
 
   #### Expense Operation 
```javascript
POST /expense/addincome
```

 ```javascript
 GET /expense/
 ```
 
 ```javascript
 PATCH  /expense/editincome/:id
 ```
 
 ```javascript
 DELET /expense/delete/:id
 ```
 
 ```javascript
 POST /expense/filterdata
 ```


 ### 
`USERS DATA...`

   { fname:{type:String},
    lname:{type:String},
    email:{type:String,require:true},
    password:{type:String,required:true},
    mobile:{type:Number},
    avatar:{type:String},
    address:{type:String},
    dob:{type:Date},
    createdAt:{type: Date,default: Date.now} }


 ### 
`Income/Expense DATA...`

    {
    title:{type:String,required:true},
    type:{type:String,required:true},
    amount:{type:Number,require:true},
    userID:{type:String},
    method:{type:String},
    createdAt:{type: Date,default: Date.now}
}
  


 <div align = "center">
 
| `Project Highlights` |
| :------------------: | 

 <img src="https://user-images.githubusercontent.com/112817197/229363692-70efa206-019e-4d17-91f0-372fe1a2fbcd.png" width="600" height="250"/>
 <img src="https://user-images.githubusercontent.com/112817197/229363889-d5b816b9-6dbf-4cf0-839d-fd4e233fc1c4.png" width="600" height="250"/>
 <img src="https://user-images.githubusercontent.com/112817197/229363794-409253a7-ccf7-4ffa-b6b3-1b7c2d874ed4.png" width="600" height="250"/>
 <img src="https://user-images.githubusercontent.com/112817197/229364421-6c4bc408-1a08-4f42-8050-0189becd89c2.png" width="600" height="250"/>
 <img src="https://user-images.githubusercontent.com/112817197/229364080-e4f8f2d5-a67c-45f4-99fd-c63c169accee.png" width="600" height="250"/>
  <img src="https://user-images.githubusercontent.com/112817197/229366183-29dd2338-ef6d-4da3-9246-c820a790623d.png" width="600" height="250"/>
  <img src="https://user-images.githubusercontent.com/112817197/229364616-6b80a814-0d2f-4332-94ca-f49dfdacdf6d.png" width="600" height="250"/>
  <img src="https://user-images.githubusercontent.com/112817197/229365054-ae41d2c0-eb87-47b3-bc0d-49af3eef2bb3.png" width="600" height="250"/>
 
<div/>
  

| `Demo` |
| :----: | 
   
 Deployed Link: Frontend 
  
 [https://budgetbuddy-nu.vercel.app]

 Deployed Link: Backend
  
 [https://periwinkle-catfish-cuff.cyclic.app/] 

 
| `Authors` |
| :-------: | 

[@Akashfw](https://github.com/Akashfw) 
 

