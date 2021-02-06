# lpnu-project-2020
*Running and stopping using python development server*<br>
```python manage.py runserver 8080```<br>
http://localhost:8080/login/ <br>
http://localhost:8080/signup/

**Do not forget to track changes via ```git add .``` and ```git status```, then use ```git commit -m 'description'```<br>**
Deployment:<br> 
```heroku git:remote -a yourapp```<br>
```git push heroku json-backend-deploy:main```<br>
```heroku run python manage.py migrate```<br>
You can specify the app name in the following way:
```heroku run python manage.py migrate -a <app-name>```<br>
Renaming the app: ```heroku apps:rename newname --app oldname```

*Running and stopping app using HEROKU*<br>
```heroku local```<br>
```heroku ps```<br>
```heroku ps:stop run.1```<br>
for heroku local: http://0.0.0.0:5000/user/ <br>
using deployment: https://eventure-lpnu.herokuapp.com/ 

use ```POST``` on -> http://127.0.0.1:8080/user/ (to create use JSON) <br>
use ```POST``` on -> http://127.0.0.1:8080/user/ANY-EMAIL/  (to check if user with specified email is in db) <br>
use ```DELETE``` on -> http://127.0.0.1:8080/user/ANY-EMAIL/ (to delete user with specified email from db) <br>
use ```GET``` on -> http://127.0.0.1:8080/user/ (to get userlist from db) <br>
use ```PUT``` on -> http://127.0.0.1:8080/user/ (use JSON to update info. do not forget to CREATE before EDITing) <br><br>
JSON body:
```
{
    "first_name": "Taras",
    "last_name": "Vilinskyi",
    "city": "Lviv",
    "password": "pass1",
    "sex": "male",
    "family_status": "single",
    "pets": "dog, cat, parrot",
    "email": "2@ex.com",
    "organizer": false,
    "rating": 86.5
}
```