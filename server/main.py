from bottle import route, run, request, hook, response

@hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'

@route('/')
def hello():
    return "I smell a rat!"

@route('/req', method='POST')
def handlereq():
    code = request.forms.get('code')
    try:
        exec code
        return "code successfully sent!"
    except:
        return "code failed!"

run(host='0.0.0.0', port=12345, server='cherrypy')
#run(host='0.0.0.0', port=12345, server='cherrypy')
