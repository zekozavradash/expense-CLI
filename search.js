const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .command('search-expense <category>')
  .description('Search expenses by category')
  .action((category) => {
    const filePath = path.join(__dirname, 'expenses.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const results = data.filter(expense => expense.category === category);

    if (results.length === 0) {
      console.log(`No expenses found for category: ${category}`);
    } else {
      console.log(`Expenses for category "${category}":`, results);
    }
  });

program.parse(process.argv);
