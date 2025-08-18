FROM ubuntu

RUN apt-get update
RUN apt-get -y install python3 python3-dev python3-pip python3-venv python3-flask python3-setuptools build-essential default-libmysqlclient-dev
RUN python3 -m venv venv
RUN . venv/bin/activate && pip install flask flask-mysql

COPY app.py opt/app.py

ENV FLASK_APP=opt/app.py 

CMD ["flask", "run", "--host=0.0.0.0"]

