# lpnu-project-2020
*Running and stopping using python development server*<br>
```python manage.py runserver 8080```<br>
http://localhost:8080/user/ <br>

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