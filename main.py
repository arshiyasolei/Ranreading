#!/usr/bin/env python
#assume we got data, now make rapid text things with it
from flask import *  
app = Flask(__name__)  

import math
@app.route('/')  
def upload():  
    return render_template("index.html")  
 
@app.route('/calculate/', methods = ['POST'])  
def calculate():  
    if request.method == 'POST':  
        f = request.files['file']
        print(f.filename)
        if '.txt' not in f.filename and '.TXT' not in f.filename:
            resp = jsonify({"rsvp":"Wrong file type!"} )
            return resp
        else:
            
            lines = f.readlines()
            for x in range(len(lines)):
                lines[x] = lines[x].decode("utf-8")
                lines[x] = lines[x].strip('\n')
            highlight_list = []
            
            #f = str(f).splitlines()
            for x in range(len(lines)):
                if "==========" in lines[x] and x -1 >= 0:
                    highlight_list.append(lines[x-1])

            resp = jsonify({"rsvp":'%43'.join(highlight_list)} )
            return resp

if __name__ == '__main__':
    app.run(host = '0.0.0.0',port=8080,debug=True, threaded=True)