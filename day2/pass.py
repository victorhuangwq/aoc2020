import re
f = open("passlist.txt","r")

input_list = f.read().splitlines()

result = 0
for i in input_list:
    start = re.search('([0-9]*)-[0-9]* [a-z]: [a-z]*',i).group(1)
    end = re.search('[0-9]*-([0-9]*) [a-z]: [a-z]*',i).group(1)
    char = re.search('[0-9]*-[0-9]* ([a-z]): [a-z]*',i).group(1)
    password = re.search('[0-9]*-[0-9]* [a-z]: ([a-z]*)',i).group(1)
    if(password.count(char) >= int(start) and
       password.count(char) <= int(end)):
        result+=1

print(result)
