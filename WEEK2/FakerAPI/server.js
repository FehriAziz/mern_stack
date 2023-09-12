const app = express();
const port = 3000;

// Create a function to generate a random User object
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.username.lastName(),
        firstName: faker.username.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newUser;
};

// Create a function to generate a random Company object
const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.location.streetAddress(),
        street: faker.location.Name(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    };
    return newCompany;
};

// Define API routes
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.listen(PORT) , ()=>{
	console.log ('>>>>SERVER IS RUNNING ON PORT ${port} <<<<');
	
	}