#! C:\Program Files\Python311\python.exe

from bs4 import BeautifulSoup
import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
from time import time
from os import path, makedirs
import csv
import re

class Skill:
    names = []
    count = 0

    def __init__(self, names):
        self.names = names
        self.count = 0

    def increment_count(self, count):
        self.count+=count


title_class = "BjJfJf.PUpOsf"
job_class = "pE8vnd.avtvi"
description_class = "HBvzbc"
expand_btns_class = "mjkhcd.OSrXXb"
location_300km_btn_class = "TRwkpf.GbaVB.sel"
job_query = 'vaga+desenvolvedor+programador+"junior"'

skills = []
csvfile =  open('skills.csv', newline='')
skills_csv = csv.reader(csvfile)
for row in skills_csv:
    skills.append(Skill(row))

csvfile.close()
del csvfile, skills_csv

firefox_options = webdriver.FirefoxOptions()
firefox_options.add_argument('--headless')
driver = webdriver.Firefox(options=firefox_options)  
driver.get('https://www.google.com/search?q='+ job_query + '&ibp=htl;jobs')

sleep(1)

driver.find_element(By.CLASS_NAME, location_300km_btn_class).click()
driver.find_element(By.CLASS_NAME, "xFmI7b").click() #clicking in a random element to dismiss the menu used to choose specific locations

sleep(1.5) #remove this later and use something that doesn't get stuck

titles = driver.find_elements(By.CLASS_NAME, title_class)
jobs = driver.find_elements(By.CLASS_NAME, job_class)
expand_btns = driver.find_elements(By.CLASS_NAME, expand_btns_class)

i = 0
LIMIT = 60

while i < len(titles):
    titles[i].click()
    sleep(0.2)

    description = jobs[i].find_element(By.CLASS_NAME, description_class).get_attribute("innerText").lower()

    #there must be a better way to do this...
    expand_btns = driver.find_elements(By.CLASS_NAME, expand_btns_class)
    for btn in expand_btns:
        if btn.get_dom_attribute("jsname") == "GTrWA" and btn.is_displayed():
            btn.click()
    
    for skill in skills:
        for name in skill.names:
            skill.increment_count(len(re.findall('\\b' +name+'[., \\n\\t]?\\b', description)))

    i+=1
    titles = driver.find_elements(By.CLASS_NAME, title_class)
    jobs = driver.find_elements(By.CLASS_NAME, job_class)
    if i>=LIMIT:
        break

sorted_skills = []


while len(skills)>0:
    max_skill_index = 0
    i = 0
    for i in range(0, len(skills)):
        if skills[i].count>=skills[max_skill_index].count:
            max_skill_index = i
    sorted_skills.append(skills[max_skill_index])
    del skills[max_skill_index]
    
output_folder_dir = './rank_output'
if not path.exists(output_folder_dir):
    makedirs(output_folder_dir)
output_file_dir = output_folder_dir + "/skill_rank_"+str(round(time()))+".csv"
output_file = open(output_file_dir, 'w', encoding="utf-8")

for skill in sorted_skills:
    print(skill.names[0] + ": " + str(skill.count))
    output_file.write(skill.names[0] + "," + str(skill.count)+"\n")

output_file.close()