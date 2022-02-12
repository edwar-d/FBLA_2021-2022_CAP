import re
import os
import json
import math
import random
import unicodedata
from time import sleep
from datetime import datetime

import requests
from bs4 import BeautifulSoup
import pandas as pd

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException


class UNDETECTED(Exception):
    pass

TARGET_CLASS = "css-1422juy";

PROTOCAL = "https://"
DOMAIN = "www.yelp.com"
URL = PROTOCAL+DOMAIN;

def parse(destination, location):

    global URL
    URL += "/search?find_desc="+destination+"&"+"find_loc="+location



def run(a_type, loc):

    driver = webdriver.Firefox()

    #parsing

    parse(a_type, loc)

    driver.get(URL)

    sleep(1);
    #specific urls
    T = driver.find_elements(By.XPATH, '//a[@class="'+TARGET_CLASS+'"]')

    specific_urls = [link.get_attribute('href') for link in T]
    names = [link.get_attribute('name') for link in T]


    #    rI = [link.text for link in rInf]
    formatted = {}

    for i in range(len(specific_urls)):
        if("https://www.yelp.com/search?find_loc" in specific_urls[i]) or ('https://www.yelp.com/search?' in specific_urls[i]):
            continue;

        driver.get(specific_urls[i])
        print("Current url[",i,"]: ",specific_urls[i])
        print()
        sleep(0.5)

        rInf = driver.find_elements(By.XPATH, '//a[@class="css-10y60kr"]')
        links= driver.find_elements(By.XPATH, '//a[@class="css-1422juy"]')

        #gets

        N = []

        for i in range(len(links)):
            N.append(links[i].text)


        L = [link.get_attribute('href') for link in links]

        p = -1
        for i in range(len(N)):
            if("Ask " in N[i]):
                p = i

        if(p == -1):
            continue

        N, L = N[0:p], L[0:p]


        area_data = {
            "name" : "",
            "type" : a_type,
            "loc" : loc,
            "website" : "",  	
            "open_time" : "",
            "address" : "" ,
            "number" : "",
            "reviews" : "",
            "star_rating" :""
        }


        sleep(2);
        
        f = driver.find_element(By.XPATH,"//div[@class=' stickySidebar--fullHeight__09f24__kqHVd arrange-unit__09f24__rqHTg arrange-unit-grid-column--4__09f24__P05hD padding-l2__09f24__kf_t_ border-color--default__09f24__NPAKY']")
        name = driver.find_element(By.XPATH,"//h1[@class='css-1x9iesk']")
        sub = driver.find_elements(By.XPATH,"//span[@class=' css-1yy09vp']")

        area_data["name"] = name.text

        for comp in sub:
            if "reviews" in comp.text:
                area_data["reviews"] = comp.text.replace(" reviews", "")
            elif ( "AM" in comp.text ) or ( "PM" in comp.text ):
                area_data["open_time"] = comp.text
            else:
                continue

        


        props = f.find_elements(By.XPATH, "//div[@class=' css-1vhakgw border--top__09f24__exYYb border-color--default__09f24__NPAKY']");
        micro_links = f.find_elements(By.XPATH, "//a[@class='css-10y60kr']")
        
        stars = f.find_element(By.XPATH, " //div[ contains(@class, ' i-stars__09f24__foihJ') ]")
            
        area_data["star_rating"] = stars.get_attribute("aria-label")


        def phone_number(n) -> bool:
            ns = ["0","1","2","3","4","5","6","7","8","9"]

            nc = 0

            for i in range(len(n)):
                if n[i] in ns:
                    nc+=1
                
            return (nc > 9 and nc < 12)


        for prop in props:
            T = prop.text

            if "Get Directions" in T:
                TL = T.split("\n")
                area_data["address"] = TL[1]
                continue

            if "http" in T:
                area_data["website"] = T
                continue

            if phone_number(T):
                area_data["number"] = T
                continue
                


        print(area_data)
        if("\n" in area_data["loc"]):   
            area_data["loc"] = area_data["loc"].split("\n")[1]

        formatted[name.text] = area_data

    df = pd.DataFrame(data=formatted).T
    df.to_csv('data.csv',mode='a', index=False, header=False)

def main():
    a_types = ["Restaurants","Parks","Bars","Karaoke","Malls","Amusement Parks","Water Parks","Landmarks & Historical Buildings","Museum","Monuments","Temples","Zoos","Aquariums","Art Galleries","Tourist Attractions"]
    #a_types = ["Karaoke","Malls","Amusement Parks","Water Parks","Landmarks & Historical Buildings","Museum","Monuments","Temples","Zoos","Aquariums","Art Galleries","Tourist Attractions"]

    for a_type in a_types:
        run(a_type,"Berkeley, CA") #Santa Clara

main()