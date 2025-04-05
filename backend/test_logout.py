# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
# import time
# from pynput.mouse import Button, Controller

# # Setup
# service = Service(ChromeDriverManager().install())
# driver = webdriver.Chrome(service=service)

# try:
#     # Step 1: Open login page
#     driver.get("http://localhost:5173/login/")
    
#     # Step 2: Fill in credentials and login
#     username_field = driver.find_element(By.CLASS_NAME, "form-input")
#     password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]
#     username_field.send_keys("USER1")
#     password_field.send_keys("12345")
    
#     WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
#     ).click()

#     # Step 3: Wait for logout button to appear
#     logout_button = WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable((By.CLASS_NAME, "logout-button"))
#     )

#     # # Step 4: Click logout
#     # logout_button.click()

#     mouse = Controller()
#     mouse.position = (967, 67)
#     mouse.click(Button.left,1)
#     print("✅ Logged in and logged out successfully.")

# finally:
#     driver.quit()
# logout working
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
# from pynput.mouse import Button, Controller
# import time

# # Setup
# service = Service(ChromeDriverManager().install())
# driver = webdriver.Chrome(service=service)

# try:
#     # Step 1: Open login page
#     driver.get("http://localhost:5173/login/")
    
#     # Step 2: Fill in credentials and login
#     username_field = driver.find_element(By.CLASS_NAME, "form-input")
#     password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]
#     username_field.send_keys("USER1")
#     password_field.send_keys("12345")
    
#     WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
#     ).click()

#     # Step 3: Wait for logout button to appear
#     WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CLASS_NAME, "logout-container"))
#     )

#     time.sleep(2)  # wait for UI to fully load

#     # Step 4: Use pynput to click logout button at specific screen position
#     mouse = Controller()    
#     mouse.position = (949, 175)  # adjust coordinates as per your screen
#     time.sleep(1)
#     mouse.click(Button.left, 2)  # double click

#     print("✅ Logged in and logged out successfully.")

# finally:
#     time.sleep(2)
#     driver.quit()
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from pynput.mouse import Button, Controller
import time

# Setup
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

try:
    # Step 1: Open login page
    driver.get("http://localhost:5173/login/")
    
    # Step 2: Fill in credentials and login
    username_field = driver.find_element(By.CLASS_NAME, "form-input")
    password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]
    username_field.send_keys("USER1")
    password_field.send_keys("12345")
    
    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
    ).click()

    # Step 3: Wait for logout button to appear
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "logout-container"))
    )

    time.sleep(2)  # wait for UI to fully load

    # Step 4: Use pynput to click logout button at specific screen position
    mouse = Controller()
    mouse.position = (949, 175)  # adjust coordinates as needed
    time.sleep(1)
    mouse.click(Button.left, 2)  # double click

    # Step 5: Wait for redirect to login page (check for login input again)
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "form-input"))
    )

    # Optional: confirm URL is login page
    WebDriverWait(driver, 5).until(lambda d: "http://localhost:5173/login/" in d.current_url)

    print("✅ Logged out and redirected to login page successfully.")

finally:
    time.sleep(2)
    driver.quit()
