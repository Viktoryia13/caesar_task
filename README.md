# Caesar cipher CLI tool

Implement CLI tool that will encode and decode a text by Caesar cipher.

## Install

Установить (скачать или clone из репозитория)
Перейти в директорию caesar и выполнить команды

`npm i` or `npm install`

## Details

CLI tool should accept 4 options (short alias and full name):

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode

## Usage example:

`$ node index -a encode -s 7 -i "./input.txt" -o "./output.txt"`

input.txt This is secret. Message about "_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

`$ node index --action encode --shift -1 --input input.txt --output output.txt`

input.txt This is secret. Message about "_" symbol!

output.txt Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!

Базовая реализация (кроме 5 ого пункта) + продвинутая реализация.
Очень спешила, поэтому где-то могут быть недочеты, обратная связь приветстуется. 

Связь со мной возможна в telegram @vika_coyote
email viktoryiacoyote@gmail.com
