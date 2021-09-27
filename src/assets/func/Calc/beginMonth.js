import { startOfMonth } from "date-fns";
import { formatISO } from "date-fns";
import { addMonths } from "date-fns";

// Считаем данные за текущий месяц
// I - Форматируем дату НАЧАЛА ТЕКУЩЕГО месяца
// 1.1) Находим дату начала месяца
const dateMonthStart = startOfMonth(new Date());
// Перевод в ISO формат
const dateMonthStartISO = formatISO(new Date(dateMonthStart));
// 1.2) Переводим дату в JSON формат
const dayStartOfMonthJson = JSON.stringify(dateMonthStartISO);
// 2.1) Получаем первые 10 символов
const beginMonth = dayStartOfMonthJson.substr(1, 10);

// II - Форматируем дату НАЧАЛА СЛЕДУЮЩЕГО месяца
// 1.1) Находим дату НАЧАЛА месяца
const startNextMonth = addMonths(new Date(), 1);
const startNextMonthRight = startOfMonth(startNextMonth);
// Перевод в ISO формат
const startNextMonthISO = formatISO(new Date(startNextMonthRight));
// 1.2) Переводим дату в JSON формат
const startNextMonthJson = JSON.stringify(startNextMonthISO);
// 2.1) Получаем первые 10 символов
const beginNextMonth = startNextMonthJson.substr(1, 10);

// 3 - Форматируем дату НАЧАЛА ПРЕДЫДУЩЕГО месяца
// 1.1) Находим дату НАЧАЛА месяца
const startPrevMonth = addMonths(new Date(), -1);
const startPrevMonthRight = startOfMonth(startPrevMonth);
// Перевод в ISO формат
const startPrevMonthISO = formatISO(new Date(startPrevMonthRight));
// 1.2) Переводим дату в JSON формат
const startPrevMonthJson = JSON.stringify(startPrevMonthISO);
// 2.1) Получаем первые 10 символов
const beginPrevMonth = startPrevMonthJson.substr(1, 10);

export { beginMonth, beginNextMonth, beginPrevMonth };
