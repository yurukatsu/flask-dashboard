FROM python:3.12

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt .

# install python dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install flask-minify[go]

COPY . .

CMD ["gunicorn", "--config", "gunicorn-cfg.py", "run:flask_app"]
