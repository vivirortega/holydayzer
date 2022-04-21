import express from 'express';
import cors from 'cors';

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];


const app = express();
app.use(cors());

app.get("/holidays", (req,res) => {
    res.send(holidays)
})

app.get("/is-today-holiday", (req,res) => {
    const today = new Date();
    today.toLocaleDateString("en-us");

    const todayIsHoliday = holidays.find((day) => day.date === today);
    
    if (todayIsHoliday) {
        res.send(`<h1>Sim, hoje é ${todayIsHoliday} </h1>`)
    } else {
        res.send(`<h1>Não, hoje não é feriado</h1>`)
    }
    
})

app.listen(5000, () => 
console.log("Servidor funcionando!"));