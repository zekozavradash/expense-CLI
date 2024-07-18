// ააწყეთ ხარჯების მენეჯერის Cli(expense manager cli) აპლიკაცია რომელსაც ექნება შემდეგი ფუნცქიონალი:

// 1) ხარჯის ობიექტის დამატება
// 2) ხარჯის ობიექტის წაშლა
// 3) ხარჯის ობიექტის მოძიება თარიღით და კატეგორიით

// მოსალოდნელი ფუნცქიონალი 

// create-expense total category date უნდა შეიქმნას ახალი ობეიქტი და ჩაიწეროს json ფაილში

// search-expense shopping მოძიებული უნდა იქნა შესაბამისი კატეგორიის ხარჯი და დაკონსოლდეს ტერმინალში

// delete-expense 2 უნდა წაიშალოს შესაბამის ინდექსზე მყოფი ხარჯი.

// უნდა გამოიყენოთ fs, path მოდული რომ იმუშაოთ ფაილურ სისტემაზე და ასევე უნდა გამოიყენოთ commander ბიბლიოთეკა

// მინიშნება: უნდა გქონდეს 3 სხვადასხვა js ის ფაილი და შესაბამისი ბრძანებები უნდა გაწეროთ package.json bin create-expense: create.js, search-expense: search.js და ა.შ.

// ქულა 5.

// დედლაინი: 19/07/2024



//შექქმნა

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
