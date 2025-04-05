# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
# import time

# # Initialize WebDriver
# service = Service(ChromeDriverManager().install())
# driver = webdriver.Chrome(service=service)

# try:
#     # Step 1: Open login page
#     driver.get("http://localhost:5173/login/")

#     # Step 2: Enter username and password
#     username_field = driver.find_element(By.CLASS_NAME, "form-input")
#     password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]

#     username_field.send_keys("USER1")
#     password_field.send_keys("12345")

#     # Step 3: Click the login button
#     submit_button = WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
#     )
#     submit_button.click()

#     # Step 4: Wait for the Notes page to load
#     WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CLASS_NAME, "note-container"))
#     )

#     # Step 5: Find the first available note
#     first_note = driver.find_element(By.CLASS_NAME, "note-container")

#     # Step 6: Click the delete button inside the note
#     delete_button = first_note.find_element(By.CLASS_NAME, "delete-button")
#     delete_button.click()

#     # Step 7: Wait until the note disappears (confirm deletion)
#     WebDriverWait(driver, 10).until(EC.staleness_of(first_note))

#     print("✅ Note deleted successfully.")

#     # Wait for a few seconds to observe the result
#     time.sleep(2)

# finally:
#     driver.quit()
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

    # Step 2: Wait for the first note to appear
    first_note = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "note-container"))
    )

    # Step 3: Click the "Delete" button
    delete_button = first_note.find_element(By.CLASS_NAME, "delete-button")
    delete_button.click()

    # Step 4: Wait until the note is removed from DOM
    WebDriverWait(driver, 10).until(EC.staleness_of(first_note))
    time.sleep(3)
    print("✅ Note deleted successfully.")
    time.sleep(3)

finally:
    driver.quit()
