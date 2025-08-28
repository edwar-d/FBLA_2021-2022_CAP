import re
import os
import json
import nltk
import math
import random
import unicodedata

from datetime import datetime

import requests
from bs4 import BeautifulSoup

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException


class UNDETECTED(Exception):
    pass

TARGET_CLASS = "css-1422juy";
COMP_STATS = {"website":"", "name":"", "address":"", "reviews":-1, "keywords":""}

#COMPSTATS = {"name": "","category": "","address": "","phone": "","price_range": "","health_rating": "","info":"","working_hours": "","ratings": "","ratings_histogram": "","claimed_status": "","reviews": "","website": "","url":""}


PROTOCAL = "https://"
DOMAIN = "www.yelp.com"
URL = PROTOCAL+DOMAIN;


def parse(destination, location):

    global URL
    URL += "/search?find_desc="+destination+"&"+"find_loc="+location


if __name__ == "__main__":
    parse("Museums", "San Jose, CA")
    print(URL)

    driver = webdriver.Firefox()

    
    driver.get(URL)

    T = driver.find_elements(By.XPATH, '//a[@class="'+TARGET_CLASS+'"]')


    

    specific_urls = [link.get_attribute('href') for link in T]
    names = [link.get_attribute('name') for link in T]
#    rI = [link.text for link in rInf]

    print(specific_urls)
    print(names)

   for i in range(len(specific_urls)):
       driver.get(specific_urls[i])
#        stick_info_div = driver.find_element(By.CLASS_NAME, " stickySidebar--fullHeight__09f24__kqHVd arrange-unit__09f24__rqHTg arrange-unit-grid-column--4__09f24__P05hD padding-l2__09f24__kf_t_ border-color--default__09f24__NPAKY");
        rInf = driver.find_elements(By.XPATH, '//span[@class="'+"css-1yy09vp"+'"]')


