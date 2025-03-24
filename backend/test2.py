from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Initialize WebDriver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

try:
    # Step 2: Find the registration fields and navigate to login
    driver.get("http://localhost:5173/login/") 

    # Find the input fields
    username_field = driver.find_element(By.CLASS_NAME, "form-input")
    password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]

    # Use test credentials for login
    username = "Hamsi"
    password = "123"

    username_field.send_keys(username)
    password_field.send_keys(password)

    # Wait for the submit button and click it
    submit_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))  # Replace with actual class name of the submit button
    )
    submit_button.click()

    time.sleep(4)  # Wait to observe the result
finally:
    driver.quit()
