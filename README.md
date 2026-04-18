# skyClanParser

Sky2fly scheduling fights parser

War logs collected from clan base can be pasted in and parsed into fights data

# Commands

```
docker build -t sirinoks/skyclanparser .
```

```
node dist/parser.js
```

```
npx tsc
```

```
prettier -w .
```

## Links

#### Get all fights data
```
http://localhost:3643/data
```


#### Send text user data parse into formatted Fight objects
Post a text block in a format of:
```
{
  "logs": "13:10:01 База (Поющий Риф, [Лабиринт Р 14:36]) Остров \"Пелотас /Генератор тоннелей ветра [1]\", построенный кланом \"Истина\", будет атакован кланом \"Omega Rising\" 24.02.24 21:30 по мск.\n13:10:01 База (Поющий Риф, [Лабиринт Т 81:20]) Остров \"Склад - реплоиды /Остров-склад [3]\", построенный кланом \"Wizards of the Sky\", будет атакован кланом \"Omega Rising\" 24.02.24 22:00 по мск."
}
```
to
```
http://localhost:3643/parse
```

## Uses

- Javascript
- Typescript
- Docker
- Express
- Wrangler