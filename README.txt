*****PART 1 - Setting up MySQL Database******************
1. Download MySQL community edition
   Configure it however you want in terms of user name and password.
   Make sure you remember what your username and password are for later though.
   in my case I use really weak password for development but in production, I would tighten that up.

2. Using the MySQL Workbench Create a schema. Mine is named fzj_store

3. Set that schema as the default schema

4. Create a table in MySQL WorkBench

5. CREATE TABLE 
   product(id VARCHAR(20), name VARCHAR(20),
   description VARCHAR(150), price DECIMAL(5,2), qty INTEGER)

6. In the mySql workbench insert some data into the product table

insert into product
 values('000001', 'post it notes', 'multi colored post its', 5.95, 100);

insert into product
 values('000002', 'hammer', 'little hammertime', 5.95, 100);

insert into product 
values('000003', 'pliers', 'silver heavy duty', 7.95, 80);

insert into product
 values('000004', 'tape', 'clear tape', 25.00, 100);

insert into product
 values('000005', 'gummy bears', 'neon sour', 3.00, 70);
insert 
into product 
values('000006', 'mousse', 'herbal essence', 5.95, 20);

insert into product
 values('000007', 'wood planks', 'fence wood plans 4in', 3.95, 1000);

insert into product 
values('000008', 'hair', 'virgin synthetic bundle 1 oz', 29.95, 100);
insert into product
 values('000009', 'magnets', 'refrigerator magnets', 3.95, 300);
insert into product 
values('000010', 'feathers', 'craft', 1.95, 100);

*****PART 2 - Setup your project**********
1. Create a folder for your project
2. Create the package.json file and save it in the root of that folder
3. Open the command line and navigate to the folder where you stored your package.json file
4. From the command line type npm install to install the modules necessary according to your
   package.json file.
5. Create the file app.js and save it to the folder for your project alongside the package.json file.
6. Make sure to set up your connection appropriately in the app.js file

*****PART 3 - Running the application
7. run the app by typing "node app.js" at the command line and the application should work.

