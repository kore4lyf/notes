import urllib.request, urllib.error, urllib.parse
from urllib.request import Request, urlopen

webpage = input('Web Address: https://')
filename = input('File name: ') 
extension = input('File extension: .')

req = Request(
    url = 'https://' + webpage, 
    headers={'User-Agent': 'Mozilla/5.0'}
)

response = urlopen(req)
webContent = response.read().decode('UTF-8')

f = open(filename + '.' + extension, 'w')
f.write(webContent)
f.close

if response: 
  print("Saved...")