from os import error
import requests
import random
from bs4 import BeautifulSoup


class FOUROFOURERROR(Exception):
    pass

class Scrap():
    def __init__(self, url, userAgents=True, RHeaders=True):
        self.url = url
        self.headers = self.RHead(userAgents);
        
        try:
            self.page = self.get()

            if(self.page == 404):
                raise FOUROFOURERROR

        except FOUROFOURERROR:
            print("404 Erro");

            
        self.content = self.page.text;
        self.soup = BeautifulSoup(self.page.content, "html.parser")
    
    def get(self):
        return requests.get(self.url, headers = self.headers)

    def RHead(self, userAgents):
        headers = {
            "user-agent": "" ,
            'referer':''
        }

        if(userAgents):
            user_agents = open('userHeaders').read().splitlines()
            user_agent =random.choice(user_agents)
            headers["user_agent"] = user_agent
        
        return headers

    def pretty_print_req(self):
        print('-----------REQ-----------')
        print("GET  "+self.page.url)
        print("RESPONSE  "+str(self.page))

    def __repr__(self):
        return self.soup
    
    def __str__(self):
        return str(self.page)
