from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Initialize WebDriver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Step 1: Open the Registration Page
driver.get("http://localhost:5173/Register/")  # Replace with your app's registration URL

# Step 2: Find the registration fields and submit the form
username_field = driver.find_element(By.CLASS_NAME, "form-input")
password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]

# Use test credentials for registration
username = "USER1"
password = "12345"

username_field.send_keys(username)
password_field.send_keys(password)
submit_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "form-button")) 
    )
submit_button.click()
time.sleep(2)
driver.quit()

