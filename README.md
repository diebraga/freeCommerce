# freeCommerce
> freeCommerce is an Open source e-commerce build with Django api, React frontend with using Stripe, 
any small or big contribution is welcome 💖.

One to two paragraph statement about your product and what it does.

## Installation

### Backend

#### Requirements

- Python v3.8.3
- Pip v20.2.1

In the project root, cd 'server' directory and run the following commands in the terminal:

OS X & Linux:

```sh
Create virtual env:
python -m venv env

Activate virtual env:
env/bin/activate

Install python dependencies:
pip install -r requirements.txt

Run project:
python manage.py runserver
```

Windows:

```sh
Create virtual env:
python -m venv env

Activate virtual env:
env/Scripts/activate

Install python dependencies:
pip install -r requirements.txt

Run project:
python manage.py runserver
```

Your server is now running on:
http://127.0.0.1:8000/

#### Create product:

In the server directory create a superuser:

```sh
python manage.py createsuperuser
```
Than set your Email, Name, password and log into your account with the server
running to access the admin panel on:
http://127.0.0.1:8000/admin/

Select "Products" than ADD PRODUCT.

"Warning": In your Stripe dashboard settings anable your 'Viewing test data' .
under your settings: anable 'Checkout' and create your product and a price in
test mode in order to get your 'price_' ID to fill the Price id in the admin panel.

### Frontend

#### Requirements

- Node v14.5.0
- Yarn v1.22.4

In the project root, cd 'client' directory and run the following commands in the terminal:

```sh
Install dependencies:
yarn

Run development frontend:
yarn start
```
Your development frontend server is now running on:
http://localhost:3000/

'Warning': In other to work your server on: http://127.0.0.1:8000/
 must be running too.

'Note': As django is running on a react template inm development some of the frontend routes are going to direct you to
http://127.0.0.1:8000/ in the client directory run: `yarn build` to update template when necessary, than cut
from the client directory and paste inm the server directory. or either redirect to http://localhost:3000/.

## Usage example

- Authentication:

To access 'Contact us' page you'll need to create an account and authenticate login in.

- Shop:

Stripe shop is running on test mode. to make a test transaction fill '4242 4242 4242 4242'
with any code and any future date.

<img src="https://github.com/diebraga/news_galway/blob/main/assets/stripe.gif?raw=true" width="220" height="300"/>    


## Contributing 💖💖🙏🙏

1. Fork it (<https://github.com/diebraga/freeCommerce/fork>)
2. Create your feature branch (`git checkout -b feature/example`)
3. Commit your changes (`git commit -am 'Add some example'`)
5. Documment in your Code and README.md
6. Push to the branch (`git push origin feature/example`)
7. Create a new Pull Request


## Deploy on Heroku 🚀🚀

1. Create your app on heroku.

- In your heroku resources - Add-ons create your heroku postgres database.

- In your heroku settings add you variables in from your locval '.env' file.
example:
```
DATABASE_URL=...
SECRET_KEY=...
DEBUG=False
EMAIL_HOST_USER=...
EMAIL_HOST_PASSWORD=...
HEROKU_HOST=your heroku app url.
```

2. After configure your remote App on heroku. let's configure it locally.

- In your 'client' directory create your build running:
```
yarn build
```

- Copy 'build' folder from 'client' and post in the 'server'.

- Now in your 'freecommerce' directory in settings.py database section
uncomment # HEROKU DATABASE and comment # Sqlite database.

3. After configure it Locally, Let's push to Heroku.

- In your 'server' folder runing the command:

```
git init
heroku git:remote -a 'you-app-name'
git add .
git commit -am "push me to heroku"
git push heroku master
```
Create new local repo, add heroku remote to ripo, stages all changes, commit changes
and push to heroku.

Done: Your app is running you made it!! 💪🏽💪🏽


## License

No license.
Free Open source.
No charge.