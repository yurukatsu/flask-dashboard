from flask_restful import Resource

from apps.home.models import Product
from run import api


class ProductAPI(Resource):
    def get(self):
        products = Product.get_json_list()
        return products


api.add_resource(ProductAPI, "/api/product/")
