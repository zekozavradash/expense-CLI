const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .command('create-expense <total> <category> <date>')
  .description('Create a new expense')
  .action((total, category, date) => {
    const expense = {
      total: parseFloat(total),
      category,
      date,
    };

    const filePath = path.join(__dirname, 'expenses.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.push(expense);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    console.log('Expense added successfully:', expense);
  });

program.parse(process.argv);
