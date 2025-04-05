from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Setup
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

try:
    # Step 1: Login
    driver.get("http://localhost:5173/login/")
    username_field = driver.find_element(By.CLASS_NAME, "form-input")
    password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]
    username_field.send_keys("USER1")
    password_field.send_keys("12345")
    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
    ).click()

    # Step 2: Wait for notes to load and click "Edit" on the first one
    first_note = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "note-container"))
    )
    first_note.find_element(By.CLASS_NAME, "edit-button").click()

    # Step 3: Edit title and content
    title_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, ".note-form input[type='text']"))
    )
    content_input = driver.find_element(By.CSS_SELECTOR, ".note-form textarea")
    time.sleep(3)
    title_input.clear()
    title_input.send_keys("Updated Note Title")

    content_input.clear()
    content_input.send_keys("This content was updated via Selenium script.")

    # Step 4: Click "Update Note" button
    driver.find_element(By.CLASS_NAME, "save-button").click()
    time.sleep(3)

    print("✅ Note edited successfully.")
    time.sleep(3)

finally:
    driver.quit()
