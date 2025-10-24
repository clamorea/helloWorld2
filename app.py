from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World from Colin LaMoreaux!'

@app.route('/hello')
def hello():  # put application's code here
    return render_template('hello.html')

@app.route('/about')
def about():  # put application's code here
    return render_template('about.html')

@app.route('/aboutcss')
def aboutcss():
    return render_template('about-css.html')

@app.route('/greeting')
def greeting():
    return render_template('greeting.html')
if __name__ == '__main__':
    app.run()

@app.route('/favorite-course')
def favoritecourse():
    subject = request.args.get('subject')
    course_number = request.args.get('course_number')
    return render_template('favorite-course.html', subject=subject, course_number=course_number)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        fname = request.form['fname']
        lname = request.form['lname']
        email = request.form['email']
        dob = request.form['dob']
        return render_template('contact.html', fname=fname, lname=lname, email=email, dob=dob)
    return render_template('contact.html')