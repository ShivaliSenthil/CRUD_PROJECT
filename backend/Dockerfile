# Use Python image
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .

RUN pip install -r requirements.txt

# Copy the rest of the Django app
COPY . .

# Expose port and run server
EXPOSE 8000

# Start Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]