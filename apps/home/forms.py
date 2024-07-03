from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField


class ProductForm(FlaskForm):
    name = StringField("Name", id="name")
    info = StringField("Info", id="info")
    price = IntegerField("Price", id="price")
