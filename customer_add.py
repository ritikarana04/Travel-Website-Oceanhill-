import json
import os
from random import randint
cust_exists = False
custid = randint(1,500)
data = {}
data['customer']=[]
tempdata = []
#tempdata.append({
#	"custid":custid,
#	"firstname":"Madhu",
#	"lastname":"Kaushal",
#	"emailid":"mkaushal@cisco.com",
#	"phonenum":"6507143984",
#	"address":{
#		"addr1":"414 Waverly Street",
#		"city":"Sunnyavle",
#		"state":"CA",
#		"Zipcode":"94086",
#		"country":"USA"}
#	})
emailid = "gskaushal15@gmail.com"
tempdata.append({
	"custid":custid,
	"firstname":"Gaurav",
	"lastname":"Kaushal",
	"emailid":"gskaushal15@gmail.com",
	"phonenum":"4087391475",
	"address":{
		"addr1":"414 Waverly Street",
		"city":"Sunnyavle",
		"state":"CA",
		"Zipcode":"94086",
		"country":"USA"}
	})
#emailid = "kaushal.divs@gmail.com"
#tempdata.append({
#	"custid":custid,
#	"firstname":"Divya",
#	"lastname":"Kaushal",
#	"emailid":"kaushal.divs@gmail.com",
#	"phonenum":"6509965117",
#	"address":{
#		"addr1":"414 Waverly Street",
#		"city":"Sunnyavle",
#		"state":"CA",
#		"Zipcode":"94086",
#		"country":"USA"}
#	})
if os.path.isfile('customer.json') :
	with open('customer.json') as outfile:
		data = json.load(outfile)
temp = data['customer']
for cust in data['customer']:
	if (emailid == cust['emailid']):
		print('Customer already exists')
		cust_exists = True
		break
if cust_exists == False:
	data['customer'] = temp + tempdata
	with open('customer.json', 'w') as finalfile:
		json.dump(data,finalfile)

#tempdata.append({
#	"custid":custid,
#	"firstname":"Mamta",
#	"lastname":"Rana",
#	"emailid":"mamta.rana@gmail.com",
#	"phonenum":"9986534517",
#	"address":{
#		"addr1":"Malhotra Colony",
#		"city":"Rupnagar",
#		"state":"Punjab",
#		"Zipcode":"211657",
#		"country":"India"}
#	})
#tempdata.append({
#	"custid":custid,
#	"firstname":"Ritika",
#	"lastname":"Rana",
#	"emailid":"Ritika.rana@gmail.com",
#	"phonenum":"8986534517",
#	"address":{
#		"addr1":"Malhotra Colony",
#		"city":"Rupnagar",
#		"state":"Punjab",
#		"Zipcode":"211657",
#		"country":"India"}
#	})
#
