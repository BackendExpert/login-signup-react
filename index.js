const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

const source = argv.source || path.join(__dirname, 'LoginSignUp');
const destination = argv.destination || path.join(process.cwd(), 'src/components');

async function RunReactLoginSignIn() {
    try {
        await fs.copy(source, destination);
        console.log('The Login and SignUp templete Successfully Createed');
    } catch (err) {
        console.error('Error copying folder:', err);
    }
}

RunReactLoginSignIn();
