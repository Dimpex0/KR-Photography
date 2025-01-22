FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONBUFFERED=1

WORKDIR /backend

RUN python -m pip install --upgrade pip setuptools wheel

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY templates ./templates
COPY api ./api
COPY manage.py ./manage.py
COPY backend ./backend