
Installation Instructions

FRONT END

Requirements: React.JS, NPM packages

1) Go to Frontend-React/ and run
	npm install
This will install necessary dependencies such as papa parse csv(npm install papaparse) and axios(npm install axios).

2) Run 
	npm start
This will start the development server




BACK END

Requirements: Django, Django REST Framework, Django CORS Headers

1) pip install django-rest-framework
   python -m pip install django-cors-headers
This will install the REST FRAMEWORK package and CORS Headers package

2) Run 
	python3 manage.py migrate
This will setup the database models for django

3) Go to Backend-React/ and run
	python3 manage.py runserver 0.0.0.0:8000
This will launch a python server that will listen to the incoming requests from React frontend



