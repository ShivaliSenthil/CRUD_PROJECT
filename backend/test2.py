# login and creation-fine 
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
    # Step 1: Open login page
    driver.get("http://localhost:5173/login/") 

    # Step 2: Enter username and password
    username_field = driver.find_element(By.CLASS_NAME, "form-input")
    password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]

    username_field.send_keys("USER1")
    password_field.send_keys("12345")

    # Step 3: Click the login button
    submit_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
    )
    submit_button.click()

    # Step 4: Wait until the Notes page loads
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "title"))
    )

    # Step 5: Find the input fields for title and content
    note_title = driver.find_element(By.ID, "title")  # Finds the title input field
    note_content = driver.find_element(By.ID, "content")  # Finds the content textarea

    # Step 6: Enter the note details
    note_title.send_keys("My Selenium Test Note")
    note_content.send_keys("This is a test note created using Selenium.")

    # Step 7: Click the submit button to create the note
    submit_button = driver.find_element(By.XPATH, "//input[@type='submit']")
    submit_button.click()

    # Wait for a few seconds to observe the result
    time.sleep(4)

finally:
    driver.quit() 
  

# delete 
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
    # Step 1: Open login page
    driver.get("http://localhost:5173/login/")

    # Step 2: Enter username and password
    username_field = driver.find_element(By.CLASS_NAME, "form-input")
    password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]

    username_field.send_keys("USER1")
    password_field.send_keys("12345")

    # Step 3: Click the login button
    submit_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
    )
    submit_button.click()

    # Step 4: Wait for the Notes page to load
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "note-container"))
    )

    # Step 5: Find the first available note
    first_note = driver.find_element(By.CLASS_NAME, "note-container")

    # Step 6: Click the delete button inside the note
    delete_button = first_note.find_element(By.CLASS_NAME, "delete-button")
    delete_button.click()

    # Step 7: Wait until the note disappears (confirm deletion)
    WebDriverWait(driver, 10).until(EC.staleness_of(first_note))

    print("✅ Note deleted successfully.")

    # Wait for a few seconds to observe the result
    time.sleep(2)

finally:
    driver.quit()








# # # logout-man
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
# import time
# from plyer import notification  # For system notifications

# # Initialize WebDriver
# service = Service(ChromeDriverManager().install())
# driver = webdriver.Chrome(service=service)

# try:
#     # Step 1: Open login page
#     driver.get("http://localhost:5173/login/")

#     # Step 2: Enter username and password
#     username_field = driver.find_element(By.CLASS_NAME, "form-input")
#     password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]

#     username_field.send_keys("ayy")
#     password_field.send_keys("123")

#     # Step 3: Click the login button
#     submit_button = WebDriverWait(driver, 5).until(
#         EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))
#     )
#     submit_button.click()

#     # Step 4: Wait for the Notes page to load
#     WebDriverWait(driver, 5).until(
#         EC.presence_of_element_located((By.CLASS_NAME, "note-container"))
#     )

#     print("✅ Logged in successfully. Waiting before logging out...")
#     time.sleep(2)  # Wait for a few seconds before logging out

#     # Step 5: Find and click the Logout button (using class name "logout")
#     logout_button = WebDriverWait(driver, 5).until(
#     EC.element_to_be_clickable((By.ID, "Logout"))
# )

#     logout_button.click()
    

#     # # Step 6: Confirm logout by checking if the login page appears again
#     # WebDriverWait(driver, 5).until(
#     #     EC.presence_of_element_located((By.CLASS_NAME, "form-button"))  # Login button should reappear
#     # )

#     # print("✅ Logout successful.")

#     # # Step 7: Send a system notification for logout success
#     # notification.notify(
#     #     title="Logout Successful",
#     #     message="You have been logged out successfully.",
#     #     timeout=5
#     # )

# finally:
#     driver.quit()
