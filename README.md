# lpnu-project-2020
*Running and stopping using python development server*<br>
```python manage.py runserver 8080```<br>
http://localhost:8080/login/ <br>
http://localhost:8080/signup/

**Do not forget to track changes via ```git add .``` and ```git status```, then use ```git commit -m 'description'```<br>**
Deploying: ```git push heroku json-backend-deploy:main```

*Running and stopping app using HEROKU*<br>
```heroku local```<br>
```heroku ps```<br>
```heroku ps:stop run.1```<br>
http://0.0.0.0:5000/user/

```
{
    "first_name": "Taras",
    "last_name": "Vilinskyi",
    "city": "Lviv",
    "password": "12345",
    "sex": 1,
    "family_status": 0,
    "pets": "dog",
    "email": "123@example.com"
}
```