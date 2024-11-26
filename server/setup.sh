#install dependancies
pip install setuptools
pip install -r requirements.txt

#Run django 
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic 
python manage.py runserver