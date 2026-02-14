# Python Dockerfile
FROM python:3.11

WORKDIR /app

# Install dependencies
COPY requirements.txt ./
RUN python -m pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . .

EXPOSE 5000

# Replace app.py with your Python entry file
CMD ["python", "app.py"]
