from time import sleep
from scrap import Scrap
from bs4 import BeautifulSoup
import random
from lxml import html
import re
import requests
import json
import urllib
import urllib3


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

def ASD(d = -1):
    if(d==-1):
        d = random.randint(0,3);
        
    sleep(d);


if __name__ == "__main__":
    parse("Restaurants", "San Jose, CA")
    scrap = Scrap(URL);
    scrap.pretty_print_req();

    TOP_AV = scrap.soup.find_all("a", class_=TARGET_CLASS);
    T = []
    for i in range(len(TOP_AV)):

        if("search" not in TOP_AV[i]["href"]):
            T.append([TOP_AV[i].text,TOP_AV[i]["href"]]) #note actual url is DOMAIN+href

    ATTRACTION_L = len(T)

    #AQUIRE STATS:

    TARGET_DIV = "stickySidebar--fullHeight__09f24__kqHVd arrange-unit__09f24__rqHTg arrange-unit-grid-column--4__09f24__P05hD padding-l2__09f24__kf_t_ border-color--default__09f24__NPAKY"
    data = [COMP_STATS.copy() for i in range(ATTRACTION_L)]
    
    COMPANY_PAGES = []

    for i in range(ATTRACTION_L):
        LINK =  PROTOCAL+DOMAIN+T[i][1]

        COMPANY_PAGES.append(Scrap(LINK));
        COMPANY_PAGES[i].pretty_print_req()

        data[i]["name"] = T[i][0] #DATA_NAME
        ASD();

    i = 0
    while(i<len(COMPANY_PAGES)):


        UND = 0
        try:

            r = COMPANY_PAGES[i].soup.find("span", class_="css-1yy09vp")
            if(r == None):
                raise UNDETECTED
            
            data[i]["reviews"] = int(str(r[i].content[0]).replace('reviews',''));


            TMP  = COMPANY_PAGES[i].soup.find("div",class_=TARGET_DIV)

            if(TMP == None):
                raise UNDETECTED
            
            #Find WBSite
            L = TMP.find_all("a")
            
            for j in range(len(L)):
                if("/biz_redir?" in str(L[j])):
                    data[i]["website"] = L[j].contents[0]

            #Find Address:
            A = TMP.find("p", class_="css-1ccncw");
            data[i]["address"] = str(A.contents[0])


            UND=0

        except UNDETECTED:
            print("Class Undetected["+str(UND)+"] starting in: 5s [id="+str(i)+"]");
            print("Retrying . . .")
            COMPANY_PAGES[i] = Scrap(PROTOCAL+DOMAIN+T[i][i]);
            ASD(3)
            UND+=1
            continue;

        i+=1;


    print(data)
    #append([TOP_AV[i].text,TOP_AV[i]["href"]]) #note actual url is DOMAIN+href



    # STATS = json.loads(str(data[0]))
    # beautified_json = json.dumps(STATS, indent=2)
    # print(beautified_json)


    # TMP  = scrap.soup.find("div",class_=TARGET_DIV);
    # print(TMP)
    
