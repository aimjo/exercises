# Put your app in here.
from operations import add, sub, mult, div
from flask import Flask
from flask import request

app = Flask(__name__)


@app.route("/add")
def do_add():
    """Add a and b parameters."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a, b)

    return str(result)


@app.route("/sub")
def do_sub():
    """Subtract a and b paramaters"""

    a = int(request.arg.get("a"))
    b = int(request.arg.get("b"))
    result = sub(a, b)

    return str(result)


@app.route("/mult")
def do_mult():
    """Multiply a and b paramaters"""

    a = int(request.arg.get("a"))
    b = int(request.arg.get("b"))
    result = mult(a, b)

    return str(result)


@app.route("/div")
def do_div():
    """Divide a and b paramaters"""

    a = int(request.arg.get("a"))
    b = int(request.arg.get("b"))
    result = div(a, b)

    return str(result)
