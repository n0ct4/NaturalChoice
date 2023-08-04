"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

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
    first_name = body['first_name']
    last_name = body['last_name']
    password = body['password']

    new_user = User(email=email, first_name=first_name, last_name=last_name, password=password)

    db.session.add(new_user)
    db.session.commit()

    response_body = {"message": "User created successfully"}

    return jsonify(response_body), 200


#LOGIN USER ---------------------------------------------------------------------------------------------------------
@api.route('/login-user', methods=['POST'])
def login():
    # Obtener los datos del usuario desde el cliente
    body = request.get_json()
    email = body['email']
    password = body['password']

    # Existe el usuario en la base de datos?
    user = User.query.filter_by(email=email, password=password).first()

    # si no existe, devuelve un mensaje de error y el código 401
    if user == None:
        return jsonify({"msg": "User or password, Not exist!"}), 401

    # Flask crea un nuevo token JWT. Se lo guarda en su base de datos y lo asocia al usuario que hemos recuperado de la base de datos
    access_token = create_access_token(identity=user.serialize())

    # Devolvemos el token (string) al cliente para que en futuras peticiones a nuestros endpoints protegidos se pueda autentificar
    # (cebolla_patata_queso)
    response_body = {
        "msg": "Token create successfully",
        "token": access_token,
        "email": email
    }

    return jsonify(response_body), 200
