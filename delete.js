const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .command('delete-expense <index>')
  .description('Delete an expense by index')
  .action((index) => {
    const filePath = path.join(__dirname, 'expenses.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (index < 0 || index >= data.length) {
      console.log('Invalid index');
      return;
    }

    const deletedExpense = data.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    console.log('Expense deleted successfully:', deletedExpense);
  });

program.parse(process.argv);
