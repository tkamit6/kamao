const express = require('express');
const nodemailer = require('nodemailer');
const env = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
env.config()

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(
    {
        origin:["https://kamao.vercel.app"],
        methods:["POST", "GET"],
        credentials: true
    }
));

app.get('/', (req, res) => {
    res.send("I am server")
})

app.post('/sendmail', async (req, res) => {
    // console.log(req.body);
    const { fullname, phone, email, city, briefIndustry, managingTeamExpierence, devoteProgram, teamSize, whoArYou
    } = req.body;
    const daraArray = [
        `Fullname: ${fullname}`,
        `<br/> Phone: ${phone}`,
        `<br/> Email: ${email}`,
        `<br/> City: ${city}`,
        `<br/> Brief Past Industry: ${briefIndustry}`,
        `<br/> Managing Team Experience: ${managingTeamExpierence}`,
        `<br/> Devote Program per day: ${devoteProgram}`,
        `<br/> Team Size: ${teamSize}`,
        // `<br/> Who Are You: ${whoArYou}`,
    ]
    try {
        const transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass
            },
        });
        const info = await transporter.sendMail({
            from: `"${fullname}" <${email}>`, // sender address
            to: ["amit.digioffice@gmail.com"], // list of receivers "manishdigi9031@gmail.com"
            subject: "Kamaao - Team Leader", // Subject line
            text: `${fullname}`, // plain text body
            html: `${daraArray.join('<br/>')}`

        })
        //  console.log(info);
        res.send("Mail sent")
        console.log("mail sent");
    } catch (error) {
        console.log(error);
    }
})


app.post('/sendmail/business', async (req, res) => {
    console.log(req.body);
    const { fullname, phone, email, company, category, message, job, EstimateBudget } = req.body;
    const daraArray = [
        `Fullname: ${fullname}`,
        `<br/> Phone: ${phone}`,
        `<br/> Email: ${email}`,
        `<br/> Company: ${company}`,
        `<br/> Category: ${category}`,
        `<br/> Message: ${message}`,
        `<br/> Job: ${job}`,
        // `<br/> Estimate Budget: ${req.body.EstimateBudget}`,
    ]
    console.log(message,EstimateBudget );

    try {
        const transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass
            },
        });
        const info = await transporter.sendMail({
            from: `"${fullname}" <${email}>`, // sender address
            to: "amit.digioffice@gmail.com", // list of receivers
            subject: "Kamaao - Business", // Subject line
            text: `${fullname}`, // plain text body
            html: `${daraArray}`

        })
        //  console.log(info);
        res.send("Mail sent")
        console.log("mail sent");
    } catch (error) {
        console.log(error);
    }
})


const start = async () => {
    try {
        app.listen(5000, () => {
            console.log("server is lstening");
        })

    } catch (error) {
        console.log(error);
    }
}

start().catch(console.error);;
