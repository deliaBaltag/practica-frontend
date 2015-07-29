
Instalarea dependintelor necesare se face cu


```
#!javascript

> npm install && bower install
```


In root-ul aplicatiei

### Rularea serverului ###


```
#!javascript

> grunt 
```

Task-ul default care creeaza resursele necesare pentru rularea aplicatiei in mediul de development

```
#!javascript

> grunt deploy
```

Task-ul care creeaza resursele necesare pentru mediul de productie ( ruleaza si grunt implicit )


```
#!javascript

> node server.js
```
Rularea serverului in mod implicit preia resursele din ./deploy si se face pe portul 81.
Se pot aplica parametrii --dev --port=8080 spre exemplu pentru a rula versiunea de development pe portul 8080. node server.js --help pentru lista completa
ex : 
```
#!javascript

> node server.js --dev --port=8080