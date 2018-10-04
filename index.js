#!/usr/bin/env node
'use strict';
const program=require('commander');
const app3=require('./explorer');

program
    .version('1.0.0')
    .description('Pepperoni : find PHP bugs');

program
    .command('pepperoni <phpsource>')
    .description('#### detect bugs from php_source ####')
    .option('-ss, --serious','detects serious bugs which must be fixed.')
    .option('-s,--scary','detects scary bugs.')
    .option('-t,--troubling','detects troubling bugs.')
    .option('-c,--concern','detects concerned bugs. Ignoring it, if you have no time.')
    .action((phpsource)=>{
        explorer(phpsource);
    });
    

program.parse(process.argv);