<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://img.freepik.com/free-vector/vector-goddess-athena_75487-853.jpg?w=2000" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building polls and decision making.</p>

## Description

Athna POC Framework

## Dependencies

Please make sure that Node.js (version >= 18) is installed on your operating system.

## Installation

```bash
$ npm i -g @nestjs/cli
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger

Navigate to

```
 http://localhost:3000/api-docs
```

## Api Details

### Surverys End Point

```
List Surveys - http://localhost:3000/surveys
List 1 Survey - http://localhost:3000/surveys/:id

return {
  id: number;

  question: string;

  description?: string;

  isActive?: boolean;

  questions: number[]; -- list of questions attached to survey (questions are in order)

}

```

### Questions End Point

```

List Survey Questions - http://localhost:3000/surveys/:id/questions
List 1 Survey Question - http://localhost:3000/surveys/:id/question/:questionId

return {
  id: number;

  question: string;

  description?: string;

  options: [{
    label: string;
    value: string | boolean | number;
  }];
}

```

### Selections End point

```

POST Next question based on question value - http://localhost:3000/surveys/:id/selections/decision
Returns Question ID or Null - If Null then there are no more questions and the poll is over

Body {
  selection: number | string | Boolean;
  questionId: number;
  surveyId: number;
}

return number | null

```

## Stay in touch

- Author - [Josh Gonzalez](https://zetaglobal.com)
