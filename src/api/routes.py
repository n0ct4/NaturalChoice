"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#USER ---------------------------------------------------------------------------------------------------------
@api.route('/user', methods=['GET'])
def get_usuario():

    all_user = User.query.all()
    result = [element.serialize() for element in all_user]
    return jsonify(result), 200


@api.route('/user/<int:id>', methods=['GET'])
def get_one_user(id):

    user = User.query.get(id)
    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({"message": "User not found"}), 404
    

@api.route('/user', methods=['POST'])
def post_usuario():

    body = request.get_json()
    print("AQUÍ ESTÁ EL BODY: ", body)

    email = body['email']
    password = body['password']

    new_user = User(email=email, password=password)

    db.session.add(new_user)
    db.session.commit()

    response_body = {"message": "User created successfully"}

    return jsonify(response_body), 200
