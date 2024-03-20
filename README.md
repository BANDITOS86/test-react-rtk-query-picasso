# Тестовое задание
## на позицию Frontend-разработчик (React)

## Задача:
* Используя React, TypeScript (обязательно), RTK Query, React Router DOM 6, JSON Placeholder и FSD-архитектуру (обязательно) сделайте простое приложение:
1. главная страница - список постов (бесконечный скролл + виртуализация)
2. каждый пост в списке - это строка: номер + заголовок + описание обрезанное "...", если не влезает + кнопка "просмотр"
3. кнопка "просмотр" ведет на отдельный роут, где отображается полная информация о посте в произвольной форме + кнопка "назад"

## Все пункты реализованы!

## Стек: 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
### Демонстрация:

* Для демонстрации проекта можно перейти по ссылке и просмотреть [deploy](https://banditos86.github.io/test-react-rtk-query-picasso/ "React-Posts"), либо скачать репозиторий из ветки dev:
```javascript
  https://github.com/BANDITOS86/test-react-rtk-query-picasso/tree/dev
```
* После скачивания репозитория, для подтягивания всех зависимостей в терминале запустите команду:
```javascript
  npm install
```
* После установки всех зависимостей, для запуска проекта в режиме разработчика, запустите команду:
```javascript
  npm start
```
* Для запуска прокта в режиме продакшн, запустите команду:
```javascript
  npm run build
```
* Для деплоя прокта в ветку gh-pages, запустите команду:
```javascript
  npm run deploy
```

### Deploy: [React-Posts](https://banditos86.github.io/test-react-rtk-query-picasso/ "React-Posts")

### Результат:
#### Главная
[![React-Posts](https://github.com/BANDITOS86/my-img/blob/main/posts-picasso.png?raw=true)](https://banditos86.github.io/test-react-rtk-query-picasso/)
#### Детальная
[![React-Posts](https://github.com/BANDITOS86/my-img/blob/main/post-detail-picasso.png?raw=true)](https://banditos86.github.io/test-react-rtk-query-picasso/)