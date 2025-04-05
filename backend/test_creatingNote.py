
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
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))).click()

    # Step 2: Click "Add Note" button
    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "add-note-button"))
    ).click()

    # Step 3: Fill title and content fields
    title_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, ".note-form input[type='text']"))
    )
    content_textarea = driver.find_element(By.CSS_SELECTOR, ".note-form textarea")

    title_input.clear()
    title_input.send_keys("Selenium Note")
    content_textarea.clear()
    content_textarea.send_keys("Note added using Selenium automation.")

    # Step 4: Click "Save Note" button
    driver.find_element(By.CLASS_NAME, "save-button").click()

    # Step 5: Wait for 3 seconds before editing
    time.sleep(3)
     
#      # Step 6: Click "Edit" button on the first note
#     first_note = WebDriverWait(driver, 10).until(
#         EC.visibility_of_element_located((By.CLASS_NAME, "note-container"))
#     )
#     edit_button = first_note.find_element(By.CLASS_NAME, "edit-button")
#     edit_button.click()

#     # Step 7: Wait for the form to appear and edit the note
#     # Wait for the new title input field
#     edit_title_input = WebDriverWait(driver, 10).until(
#         EC.visibility_of_element_located((By.CSS_SELECTOR, "form.note-form input[type='text']"))
#     )
#     edit_content_textarea = WebDriverWait(driver, 10).until(
#         EC.visibility_of_element_located((By.CSS_SELECTOR, "form.note-form textarea"))
#     )

#     # Clear existing values and enter new ones
#     edit_title_input.clear()
#     edit_title_input.send_keys("Edited Selenium Note")

#     edit_content_textarea.clear()
#     edit_content_textarea.send_keys("This note was edited via Selenium.")

#     # Step 8: Click the "Update Note" button
#     update_button = WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable((By.CLASS_NAME, "save-button"))
#     )
#     update_button.click()
#     time.sleep(2)

   

#     # Step 9: Delete the note
#     first_note = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CLASS_NAME, "note-container"))
#     )
#     first_note.find_element(By.CLASS_NAME, "delete-button").click()
#     WebDriverWait(driver, 10).until(EC.staleness_of(first_note))

#     print("✅ Add, Edit, and Delete operations completed successfully.")

# finally:
#     driver.quit()

# add note
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
# import time

# # Setup
# service = Service(ChromeDriverManager().install())
# driver = webdriver.Chrome(service=service)

# try:
#     # Step 1: Login
#     driver.get("http://localhost:5173/login/")
#     username_field = driver.find_element(By.CLASS_NAME, "form-input")
#     password_field = driver.find_elements(By.CLASS_NAME, "form-input")[1]
#     username_field.send_keys("USER1")
#     password_field.send_keys("12345")
#     WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, "form-button"))).click()

#     # Step 2: Click "Add Note" button
#     WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable((By.CLASS_NAME, "add-note-button"))
#     ).click()

#     # Step 3: Fill title and content fields (use <input> and <textarea> without specific class)
#     title_input = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CSS_SELECTOR, ".note-form input[type='text']"))
#     )
#     content_textarea = driver.find_element(By.CSS_SELECTOR, ".note-form textarea")

#     title_input.clear()
#     title_input.send_keys("Selenium Note")
#     content_textarea.clear()
#     content_textarea.send_keys("Note added using Selenium automation.")

#     # Step 4: Click "Save Note" button
#     driver.find_element(By.CLASS_NAME, "save-button").click()
#     time.sleep(3)
    
#     # Step 5: Edit the newly added note
#     first_note = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "note-container")))
#     first_note.find_element(By.CLASS_NAME, "edit-button").click()

#     # Step 6: Modify title and content
#     title_input = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CSS_SELECTOR, ".note-form input[type='text']"))
#     )
#     content_textarea = driver.find_element(By.CSS_SELECTOR, ".note-form textarea")

#     title_input.clear()
#     title_input.send_keys("Edited Selenium Note")
#     content_textarea.clear()
#     content_textarea.send_keys("This note was edited via Selenium.")
#     driver.find_element(By.CLASS_NAME, "save-button").click()
#     time.sleep(2)

#     # Step 7: Delete the note
#     first_note = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "note-container")))
#     first_note.find_element(By.CLASS_NAME, "delete-button").click()
#     WebDriverWait(driver, 10).until(EC.staleness_of(first_note))

#     print("✅ Add, Edit, and Delete operations completed successfully.")

finally:
    driver.quit()



# # login and creation-fine 
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

#     # Step 4: Wait until the Notes page loads
#     WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.ID, "title"))
#     )

#     # Step 5: Find the input fields for title and content
#     note_title = driver.find_element(By.ID, "title")  # Finds the title input field
#     note_content = driver.find_element(By.ID, "content")  # Finds the content textarea

#     # Step 6: Enter the note details
#     note_title.send_keys("My Selenium Test Note")
#     note_content.send_keys("This is a test note created using Selenium.")

#     # Step 7: Click the submit button to create the note
#     submit_button = driver.find_element(By.XPATH, "//input[@type='submit']")
#     submit_button.click()

#     # Wait for a few seconds to observe the result
#     time.sleep(4)

# finally:
#     driver.quit() 
  
