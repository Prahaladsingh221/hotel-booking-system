from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

driver.get("http://localhost:8080")

time.sleep(2)

driver.get("http://localhost:8080/login.html")

time.sleep(2)

driver.find_element(By.ID, "username").send_keys("user")
driver.find_element(By.ID, "password").send_keys("1234")

driver.find_element(By.TAG_NAME, "button").click()

time.sleep(3)

print("Selenium Test Passed")

driver.quit()